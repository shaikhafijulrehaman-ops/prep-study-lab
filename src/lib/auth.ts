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
 * Unified Student Registration.
 * Role is strictly and immutably assigned to 'student'.
 * A newly registered user can NEVER choose or receive an admin role.
 */
export async function createAccount(
  name: string,
  email: string,
  password: string,
  confirmPassword: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();

  if (!cleanName) {
    return { success: false, error: 'Please enter your full name.' };
  }
  if (cleanName.length < 2) {
    return { success: false, error: 'Name must be at least 2 characters.' };
  }
  if (!cleanEmail || !cleanEmail.includes('@')) {
    return { success: false, error: 'Please provide a valid email address.' };
  }
  if (!password || password.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters.' };
  }
  if (password !== confirmPassword) {
    return { success: false, error: 'Passwords do not match.' };
  }

  const localUsers = getStoredLocalUsers();
  const existing = localUsers.find(
    (u) =>
      (u.email && u.email.toLowerCase() === cleanEmail) ||
      u.name.toLowerCase() === cleanName.toLowerCase()
  );
  if (existing) {
    return { success: false, error: 'An account with this email or name already exists. Please sign in.' };
  }

  const salt = generateSalt();
  const passwordHash = await hashPassword(password, salt);
  const userId = `std_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

  const newUser: User = {
    id: userId,
    name: cleanName,
    email: cleanEmail,
    role: 'student',
    createdAt: new Date().toISOString(),
  };

  // Supabase Auth Integration
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { data, error: supaErr } = await supabase.auth.signUp({
        email: cleanEmail,
        password,
        options: {
          data: { name: cleanName, role: 'student' },
        },
      });
      if (data?.user?.id) {
        newUser.id = data.user.id;
        // Insert into user_roles table
        await supabase
          .from('user_roles')
          .insert({ user_id: data.user.id, role: 'student' })
          .then(() => {}, () => {});
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
    email: cleanEmail,
    role: 'student',
    passwordHash,
    salt,
    createdAt: newUser.createdAt,
  });
  saveStoredLocalUsers(localUsers);
  setCurrentUser(newUser);

  return { success: true, user: newUser };
}

/**
 * Unified Login for both Students and Administrators.
 * Authenticates user, silently checks their authoritative role, and returns user object.
 */
export async function login(
  nameOrEmail: string,
  password: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  const cleanInput = nameOrEmail.trim();
  if (!cleanInput || !password) {
    return { success: false, error: 'Please enter your credentials.' };
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
        // Query authoritative role from user_roles or metadata
        let role: UserRole = 'student';
        try {
          const { data: roleRow } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', data.user.id)
            .single();

          if (roleRow?.role === 'admin') {
            role = 'admin';
          } else if (data.user.user_metadata?.role === 'admin' || data.user.app_metadata?.role === 'admin') {
            role = 'admin';
          }
        } catch {
          if (data.user.user_metadata?.role === 'admin' || data.user.app_metadata?.role === 'admin') {
            role = 'admin';
          }
        }

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
    role: match.role === 'admin' ? 'admin' : 'student',
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

/**
 * Register / Initialize an Administrator Account.
 * Used for first-time administrator initialization without hardcoding secrets.
 */
export async function createAdminAccount(
  name: string,
  password: string,
  confirmPassword?: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  const cleanName = name.trim();
  if (!cleanName) {
    return { success: false, error: 'Administrator identifier or name is required.' };
  }
  if (!password || password.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters.' };
  }
  if (confirmPassword !== undefined && password !== confirmPassword) {
    return { success: false, error: 'Passwords do not match.' };
  }

  const localUsers = getStoredLocalUsers();
  const existing = localUsers.find(
    (u) => u.name.toLowerCase() === cleanName.toLowerCase()
  );
  if (existing && existing.role === 'admin') {
    return { success: false, error: 'An administrator account with this identifier already exists.' };
  }

  const salt = generateSalt();
  const passwordHash = await hashPassword(password, salt);
  const adminId = `adm_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

  const newAdmin: User = {
    id: adminId,
    name: cleanName,
    role: 'admin',
    createdAt: new Date().toISOString(),
  };

  const supabase = getSupabaseClient();
  if (supabase) {
    const sanitizedEmail = cleanName.includes('@')
      ? cleanName
      : `${cleanName.toLowerCase().replace(/[^a-z0-9]/g, '')}@prepstudylab.local`;
    try {
      const { data, error: supaErr } = await supabase.auth.signUp({
        email: sanitizedEmail,
        password,
        options: {
          data: { name: cleanName, role: 'admin' },
        },
      });
      if (data?.user?.id) {
        newAdmin.id = data.user.id;
        newAdmin.email = sanitizedEmail;
      } else if (supaErr) {
        console.warn('Supabase admin registration notice:', supaErr.message);
      }
    } catch (err) {
      console.warn('Supabase admin registration exception:', err);
    }
  }

  // Update or insert into local users
  const filteredUsers = localUsers.filter((u) => u.name.toLowerCase() !== cleanName.toLowerCase());
  filteredUsers.push({
    id: newAdmin.id,
    name: cleanName,
    email: newAdmin.email,
    role: 'admin',
    passwordHash,
    salt,
    createdAt: newAdmin.createdAt,
  });
  saveStoredLocalUsers(filteredUsers);
  setCurrentUser(newAdmin);

  return { success: true, user: newAdmin };
}

export function logout(): void {
  const supabase = getSupabaseClient();
  if (supabase) {
    supabase.auth.signOut().catch(() => {});
  }
  setCurrentUser(null);
}
