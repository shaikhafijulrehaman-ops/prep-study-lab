import { User } from '../types';
import { getSupabaseClient } from './supabase';

const USER_SESSION_KEY = 'prep_studylab_auth_user_v1';
const LOCAL_USERS_KEY = 'prep_studylab_local_users_v1';

interface StoredLocalUser {
  id: string;
  name: string;
  passwordHash: string;
  salt: string;
  createdAt: string;
}

/**
 * Secure client-side password hashing using standard Web Crypto API (SHA-256 + salt)
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

/**
 * Create a new account with Name, Password, Confirm Password.
 * Seamlessly signs up in Supabase Auth if configured, with secure local cryptographic storage.
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

  // Check if name is already taken locally
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
    createdAt: new Date().toISOString(),
  };

  // Attempt Supabase Auth signup if available (derive synthetic email for Name+Password flow)
  const supabase = getSupabaseClient();
  if (supabase) {
    const sanitizedEmail = `${cleanName.toLowerCase().replace(/[^a-z0-9]/g, '')}_${userId.slice(-6)}@prepstudylab.local`;
    try {
      const { data, error: supaErr } = await supabase.auth.signUp({
        email: sanitizedEmail,
        password,
        options: {
          data: { name: cleanName },
        },
      });
      if (data?.user?.id) {
        newUser.id = data.user.id;
        newUser.email = sanitizedEmail;
      } else if (supaErr) {
        console.warn('Supabase auth notice:', supaErr.message);
      }
    } catch (err) {
      console.warn('Supabase auth exception:', err);
    }
  }

  localUsers.push({
    id: newUser.id,
    name: cleanName,
    passwordHash,
    salt,
    createdAt: newUser.createdAt,
  });
  saveStoredLocalUsers(localUsers);
  setCurrentUser(newUser);

  return { success: true, user: newUser };
}

/**
 * Log in with Name and Password.
 */
export async function login(
  name: string,
  password: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  const cleanName = name.trim();
  if (!cleanName || !password) {
    return { success: false, error: 'Please provide both name and password.' };
  }

  const localUsers = getStoredLocalUsers();
  const match = localUsers.find((u) => u.name.toLowerCase() === cleanName.toLowerCase());

  if (!match) {
    return { success: false, error: 'Account not found. Please create an account.' };
  }

  const computedHash = await hashPassword(password, match.salt);
  if (computedHash !== match.passwordHash) {
    return { success: false, error: 'Incorrect password. Please try again.' };
  }

  const user: User = {
    id: match.id,
    name: match.name,
    createdAt: match.createdAt,
  };

  // If Supabase is connected, optionally sign in
  const supabase = getSupabaseClient();
  if (supabase) {
    const sanitizedEmail = `${cleanName.toLowerCase().replace(/[^a-z0-9]/g, '')}_${match.id.slice(-6)}@prepstudylab.local`;
    supabase.auth.signInWithPassword({
      email: sanitizedEmail,
      password,
    }).catch(() => {});
  }

  setCurrentUser(user);
  return { success: true, user };
}

export function logout(): void {
  const supabase = getSupabaseClient();
  if (supabase) {
    supabase.auth.signOut().catch(() => {});
  }
  setCurrentUser(null);
}
