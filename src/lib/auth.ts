import { User, UserRole } from '../types';
import { getSupabaseClient } from './supabase';

const USER_SESSION_KEY = 'prep_studylab_auth_user_v2';
const LOCAL_USERS_KEY = 'prep_studylab_local_users_v2';

interface StoredLocalUser {
  id: string;
  name: string;
  email?: string;
  role: UserRole;
  passwordHash: string;
  salt: string;
  createdAt: string;
}

/**
 * Secure client-side password hashing using standard Web Crypto API (SHA-256 + 16-byte random salt).
 * Plaintext passwords are NEVER stored in localStorage or database.
 */
async function hashPassword(password: string, salt: string): Promise<string> {
  const enc = new TextEncoder();
  const data = enc.encode(password + salt);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

function generateSalt(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function getStoredLocalUsers(): StoredLocalUser[] {
  try {
    const raw = localStorage.getItem(LOCAL_USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveStoredLocalUsers(users: StoredLocalUser[]): void {
  localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
}

export function getCurrentUser(): User | null {
  try {
    const raw = localStorage.getItem(USER_SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setCurrentUser(user: User | null): void {
  if (user) {
    localStorage.setItem(USER_SESSION_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(USER_SESSION_KEY);
  }
}

export function isAdmin(): boolean {
  const u = getCurrentUser();
  return Boolean(u && u.role === 'admin');
}

/**
 * Normal Student Sign Up.
 * Role is strictly 'user'.
 */
export async function createAccount(
  name: string,
  password: string,
  confirmPassword: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  const cleanName = name.trim();
  if (!cleanName) {
    return { success: false, error: 'Please enter your name.' };
  }
  if (cleanName.length < 2) {
    return { success: false, error: 'Name must be at least 2 characters.' };
  }
  if (!password || password.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters.' };
  }
  if (password !== confirmPassword) {
    return { success: false, error: 'Passwords do not match.' };
  }

  const localUsers = getStoredLocalUsers();
  const existing = localUsers.find((u) => u.name.toLowerCase() === cleanName.toLowerCase());
  if (existing) {
    return { success: false, error: 'An account with this name already exists. Please log in.' };
  }

  const salt = generateSalt();
  const passwordHash = await hashPassword(password, salt);
  const userId = `usr_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

  const newUser: User = {
    id: userId,
    name: cleanName,
    role: 'user',
    createdAt: new Date().toISOString(),
  };

  // Supabase Auth Integration
  const supabase = getSupabaseClient();
  if (supabase) {
    const sanitizedEmail = `${cleanName.toLowerCase().replace(/[^a-z0-9]/g, '')}_${userId.slice(-6)}@prepstudylab.local`;
    try {
      const { data, error: supaErr } = await supabase.auth.signUp({
        email: sanitizedEmail,
        password,
        options: {
          data: { name: cleanName, role: 'user' },
        },
      });
      if (data?.user?.id) {
        newUser.id = data.user.id;
        newUser.email = sanitizedEmail;
      } else if (supaErr) {
        console.warn('Auth notice:', supaErr.message);
      }
    } catch (err) {
      console.warn('Auth exception:', err);
    }
  }

  localUsers.push({
    id: newUser.id,
    name: cleanName,
    email: newUser.email,
    role: 'user',
    passwordHash,
    salt,
    createdAt: newUser.createdAt,
  });
  saveStoredLocalUsers(localUsers);
  setCurrentUser(newUser);

  return { success: true, user: newUser };
}

/**
 * Student Login.
 */
export async function login(
  nameOrEmail: string,
  password: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  const cleanInput = nameOrEmail.trim();
  if (!cleanInput || !password) {
    return { success: false, error: 'Please provide both credentials.' };
  }

  // 1. Try Supabase Auth first if configured
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const isEmail = cleanInput.includes('@');
      const emailToUse = isEmail
        ? cleanInput
        : `${cleanInput.toLowerCase().replace(/[^a-z0-9]/g, '')}@prepstudylab.local`;

      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailToUse,
        password,
      });

      if (data?.user && !error) {
        const role = (data.user.user_metadata?.role || data.user.app_metadata?.role || 'user') as UserRole;
        const authUser: User = {
          id: data.user.id,
          name: data.user.user_metadata?.name || cleanInput,
          email: data.user.email,
          role,
          createdAt: data.user.created_at || new Date().toISOString(),
        };
        setCurrentUser(authUser);
        return { success: true, user: authUser };
      }
    } catch {
      // Fall through to local verify
    }
  }

  // 2. Local Fallback Verification (Secure salted hash)
  const localUsers = getStoredLocalUsers();
  const match = localUsers.find(
    (u) =>
      u.name.toLowerCase() === cleanInput.toLowerCase() ||
      (u.email && u.email.toLowerCase() === cleanInput.toLowerCase())
  );

  if (!match) {
    return { success: false, error: 'Account not found. Please verify your credentials.' };
  }

  const computedHash = await hashPassword(password, match.salt);
  if (computedHash !== match.passwordHash) {
    return { success: false, error: 'Incorrect password. Please try again.' };
  }

  const user: User = {
    id: match.id,
    name: match.name,
    email: match.email,
    role: match.role || 'user',
    createdAt: match.createdAt,
  };

  setCurrentUser(user);
  return { success: true, user };
}

/**
 * Dedicated Protected Administrator Login.
 * Gated to users with role === 'admin'.
 * Normal students cannot use this endpoint.
 */
export async function adminLogin(
  adminLoginId: string,
  password: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  const cleanInput = adminLoginId.trim();
  if (!cleanInput || !password) {
    return { success: false, error: 'Please provide administrator credentials.' };
  }

  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const email = cleanInput.includes('@')
        ? cleanInput
        : `${cleanInput.toLowerCase().replace(/[^a-z0-9]/g, '')}@prepstudylab.local`;

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (data?.user && !error) {
        // Query user_roles or metadata
        const userMetadataRole = data.user.user_metadata?.role || data.user.app_metadata?.role;
        let role = userMetadataRole;

        if (!role) {
          const { data: roleRow } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', data.user.id)
            .single();
          role = roleRow?.role;
        }

        if (role !== 'admin') {
          await supabase.auth.signOut().catch(() => {});
          return {
            success: false,
            error: 'Access denied: You do not possess administrator permissions.',
          };
        }

        const adminUser: User = {
          id: data.user.id,
          name: data.user.user_metadata?.name || 'Administrator',
          email: data.user.email,
          role: 'admin',
          createdAt: data.user.created_at || new Date().toISOString(),
        };
        setCurrentUser(adminUser);
        return { success: true, user: adminUser };
      } else if (error) {
        return { success: false, error: error.message };
      }
    } catch (err: any) {
      return { success: false, error: err?.message || 'Administrator authentication failed.' };
    }
  }

  // Local fallback check (no hardcoded passwords; checks stored local user table)
  const localUsers = getStoredLocalUsers();
  const match = localUsers.find(
    (u) =>
      u.role === 'admin' &&
      (u.name.toLowerCase() === cleanInput.toLowerCase() ||
        (u.email && u.email.toLowerCase() === cleanInput.toLowerCase()))
  );

  if (!match) {
    return {
      success: false,
      error: 'Administrator credentials not recognized or unauthorized.',
    };
  }

  const computedHash = await hashPassword(password, match.salt);
  if (computedHash !== match.passwordHash) {
    return { success: false, error: 'Incorrect administrator password.' };
  }

  const adminUser: User = {
    id: match.id,
    name: match.name,
    email: match.email,
    role: 'admin',
    createdAt: match.createdAt,
  };

  setCurrentUser(adminUser);
  return { success: true, user: adminUser };
}

export function logout(): void {
  const supabase = getSupabaseClient();
  if (supabase) {
    supabase.auth.signOut().catch(() => {});
  }
  setCurrentUser(null);
}
