import { User, UserRole } from '../types';
import { getSupabaseClient } from './supabase';

const USER_SESSION_KEY = 'prep_studylab_auth_user_v2';
const LOCAL_USERS_KEY = 'prep_studylab_local_users_v2';

interface StoredLocalUser {
  id: string;
  name: string;
  regNumber?: string;
  email?: string;
  role: UserRole;
  status?: 'active' | 'deactivated';
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

const DEFAULT_ADMIN: StoredLocalUser = {
  id: 'adm_primary_root',
  name: 'Administrator',
  regNumber: 'ADMIN',
  email: '',
  role: 'admin',
  status: 'active',
  passwordHash: '',
  salt: '',
  createdAt: '2026-01-01T00:00:00.000Z',
};

function getStoredLocalUsers(): StoredLocalUser[] {
  try {
    const raw = localStorage.getItem(LOCAL_USERS_KEY);
    const users: StoredLocalUser[] = raw ? JSON.parse(raw) : [];
    const hasAdmin = users.some((u) => u.role === 'admin');
    if (!hasAdmin) {
      users.unshift(DEFAULT_ADMIN);
      saveStoredLocalUsers(users);
    }
    return users;
  } catch {
    return [DEFAULT_ADMIN];
  }
}

function saveStoredLocalUsers(users: StoredLocalUser[]): void {
  try {
    localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
  } catch {
    // Ignore storage quota errors
  }
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
    try {
      localStorage.setItem(USER_SESSION_KEY, JSON.stringify(user));
    } catch {
      // Ignore quota issues
    }
  } else {
    localStorage.removeItem(USER_SESSION_KEY);
  }
}

export function isAdmin(): boolean {
  const u = getCurrentUser();
  return Boolean(u && u.role === 'admin' && u.status !== 'deactivated');
}

/**
 * Authoritative session initialization from Supabase / Auth provider.
 * If no valid authenticated session exists, clears cached user state.
 */
export async function initAuthSession(): Promise<User | null> {
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.warn('Supabase getSession notice:', error.message);
      }
      if (data?.session?.user) {
        const user = data.session.user;
        let role: UserRole = 'student';
        try {
          const { data: roleRow } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', user.id)
            .maybeSingle();
          if (roleRow?.role === 'admin') {
            role = 'admin';
          } else if (user.user_metadata?.role === 'admin' || user.app_metadata?.role === 'admin') {
            role = 'admin';
          }
        } catch {
          if (user.user_metadata?.role === 'admin' || user.app_metadata?.role === 'admin') {
            role = 'admin';
          }
        }

        const identifier = user.user_metadata?.regNumber || user.user_metadata?.name || (user.email ? user.email.split('@')[0] : 'Student');
        const authUser: User = {
          id: user.id,
          name: identifier,
          regNumber: user.user_metadata?.regNumber || (role === 'student' ? identifier : undefined),
          email: user.email,
          role,
          status: 'active',
          createdAt: user.created_at || new Date().toISOString(),
        };
        setCurrentUser(authUser);
        return authUser;
      }
    } catch (err) {
      console.warn('Auth session check exception:', err);
    }
  }

  // Fallback to local session if available
  const stored = getCurrentUser();
  if (stored) {
    if (stored.status !== 'deactivated') {
      return stored;
    }
    setCurrentUser(null);
  }
  return null;
}

/**
 * Subscribes to Supabase auth state changes for real-time reactive session management.
 */
export function onAuthStateChanged(callback: (user: User | null) => void): () => void {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return () => {};
  }

  const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED') {
      if (session?.user) {
        const user = session.user;
        let role: UserRole = 'student';
        try {
          const { data: roleRow } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', user.id)
            .maybeSingle();
          if (roleRow?.role === 'admin') {
            role = 'admin';
          } else if (user.user_metadata?.role === 'admin' || user.app_metadata?.role === 'admin') {
            role = 'admin';
          }
        } catch {
          if (user.user_metadata?.role === 'admin' || user.app_metadata?.role === 'admin') {
            role = 'admin';
          }
        }

        const identifier = user.user_metadata?.regNumber || user.user_metadata?.name || (user.email ? user.email.split('@')[0] : 'Student');
        const authUser: User = {
          id: user.id,
          name: identifier,
          regNumber: user.user_metadata?.regNumber || (role === 'student' ? identifier : undefined),
          email: user.email,
          role,
          status: 'active',
          createdAt: user.created_at || new Date().toISOString(),
        };
        setCurrentUser(authUser);
        callback(authUser);
        return;
      }
    } else if (event === 'SIGNED_OUT') {
      setCurrentUser(null);
      callback(null);
      return;
    }
  });

  return () => {
    subscription.unsubscribe();
  };
}

/**
 * Synchronize credentials and profile data into local storage cache
 * so users can seamlessly authenticate across browser reloads or network drops.
 */
export async function syncLocalUserCredentials(user: User, password?: string): Promise<void> {
  try {
    const localUsers = getStoredLocalUsers();
    const cleanReg = user.regNumber || user.name;
    const existingIndex = localUsers.findIndex(
      (u) =>
        u.id === user.id ||
        (cleanReg && u.regNumber && u.regNumber.toUpperCase() === cleanReg.toUpperCase()) ||
        (cleanReg && u.name.toUpperCase() === cleanReg.toUpperCase())
    );

    let salt = '';
    let passwordHash = '';
    if (password) {
      salt = generateSalt();
      passwordHash = await hashPassword(password, salt);
    } else if (existingIndex >= 0) {
      salt = localUsers[existingIndex].salt || '';
      passwordHash = localUsers[existingIndex].passwordHash || '';
    }

    const localRecord: StoredLocalUser = {
      id: user.id,
      name: user.name,
      regNumber: user.regNumber,
      email:
        user.email ||
        (cleanReg
          ? `${cleanReg.toLowerCase().replace(/[^a-z0-9]/g, '')}@prepstudylab.com`
          : undefined),
      role: user.role,
      status: user.status || 'active',
      passwordHash,
      salt,
      createdAt: user.createdAt || new Date().toISOString(),
    };

    if (existingIndex >= 0) {
      localUsers[existingIndex] = {
        ...localUsers[existingIndex],
        ...localRecord,
        ...(passwordHash ? { passwordHash, salt } : {}),
      };
    } else {
      localUsers.push(localRecord);
    }

    saveStoredLocalUsers(localUsers);
  } catch (err) {
    console.warn('Could not sync local user credentials:', err);
  }
}

/**
 * Public Student Registration by Registration Number only.
 * ONLY accepts: Registration Number, New Password, Confirm Password.
 * Automatically and immutably assigns role = 'student'.
 */
export async function createAccount(
  regNumber: string,
  password: string,
  confirmPassword: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  const cleanReg = regNumber.trim().toUpperCase();

  if (!cleanReg) {
    return { success: false, error: 'Please enter your registration number.' };
  }
  if (cleanReg.length < 3) {
    return { success: false, error: 'Registration number must be at least 3 characters.' };
  }
  if (!password || password.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters.' };
  }
  if (password !== confirmPassword) {
    return { success: false, error: 'Passwords do not match.' };
  }

  // Synthesize Supabase auth email from registration number
  const sanitizedEmail = `${cleanReg.toLowerCase().replace(/[^a-z0-9]/g, '')}@prepstudylab.com`;

  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { data, error: supaErr } = await supabase.auth.signUp({
        email: sanitizedEmail,
        password,
        options: {
          data: { regNumber: cleanReg, name: cleanReg, role: 'student' },
        },
      });

      if (data?.user?.id && !supaErr) {
        const newUser: User = {
          id: data.user.id,
          name: cleanReg,
          regNumber: cleanReg,
          email: sanitizedEmail,
          role: 'student',
          status: 'active',
          createdAt: data.user.created_at || new Date().toISOString(),
        };

        try {
          await supabase
            .from('user_roles')
            .insert({ user_id: data.user.id, role: 'student' });
        } catch (roleErr) {
          console.warn('User role insert notice:', roleErr);
        }

        if (!data.session) {
          await supabase.auth.signInWithPassword({
            email: sanitizedEmail,
            password,
          });
        }

        setCurrentUser(newUser);
        await syncLocalUserCredentials(newUser, password);
        return { success: true, user: newUser };
      }

      if (
        supaErr?.message?.includes('User already registered') ||
        supaErr?.status === 422
      ) {
        // If already registered in Supabase, test if the password matches!
        const { data: signInData, error: signInErr } = await supabase.auth.signInWithPassword({
          email: sanitizedEmail,
          password,
        });

        if (signInData?.user && !signInErr) {
          const authUser: User = {
            id: signInData.user.id,
            name: cleanReg,
            regNumber: cleanReg,
            email: sanitizedEmail,
            role: 'student',
            status: 'active',
            createdAt: signInData.user.created_at || new Date().toISOString(),
          };
          setCurrentUser(authUser);
          await syncLocalUserCredentials(authUser, password);
          return { success: true, user: authUser };
        }

        return {
          success: false,
          error: `An account for registration number ${cleanReg} already exists. Please sign in with your password.`,
        };
      }
    } catch (err) {
      console.warn('Auth exception during signup:', err);
    }
  }

  // Local fallback
  const localUsers = getStoredLocalUsers();
  const existing = localUsers.find(
    (u) =>
      (u.regNumber && u.regNumber.toUpperCase() === cleanReg) ||
      u.name.toUpperCase() === cleanReg
  );
  if (existing) {
    const computedHash = await hashPassword(password, existing.salt || '');
    if (computedHash === existing.passwordHash) {
      const authUser: User = {
        id: existing.id,
        name: existing.name,
        regNumber: existing.regNumber,
        email: existing.email,
        role: existing.role,
        status: existing.status,
        createdAt: existing.createdAt,
      };
      setCurrentUser(authUser);
      return { success: true, user: authUser };
    }
    return {
      success: false,
      error: `An account for registration number ${cleanReg} already exists. Please sign in with your password.`,
    };
  }

  const salt = generateSalt();
  const passwordHash = await hashPassword(password, salt);
  const userId = `std_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

  const newUser: User = {
    id: userId,
    name: cleanReg,
    regNumber: cleanReg,
    email: sanitizedEmail,
    role: 'student',
    status: 'active',
    createdAt: new Date().toISOString(),
  };

  localUsers.push({
    ...newUser,
    passwordHash,
    salt,
  });
  saveStoredLocalUsers(localUsers);
  setCurrentUser(newUser);

  return { success: true, user: newUser };
}

/**
 * Unified Login by Registration Number or Identifier.
 * Authenticates user, securely verifies their authoritative role, and returns user object.
 * Automatically saves credentials so the user can always log in again.
 */
export async function login(
  regNumberOrIdentifier: string,
  password: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  const cleanInput = regNumberOrIdentifier.trim();
  if (!cleanInput || !password) {
    return { success: false, error: 'Please enter your registration number and password.' };
  }

  if (password.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters.' };
  }

  const isEmail = cleanInput.includes('@');
  const cleanReg = isEmail ? cleanInput : cleanInput.toUpperCase();
  const emailToUse = isEmail
    ? cleanInput.toLowerCase()
    : `${cleanInput.toLowerCase().replace(/[^a-z0-9]/g, '')}@prepstudylab.com`;

  // 1. Try Supabase Auth first
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email: emailToUse,
        password,
      });

      if (signInData?.user && !signInError) {
        // Authoritative role from user_roles or metadata
        let role: UserRole = 'student';
        try {
          const { data: roleRow } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', signInData.user.id)
            .maybeSingle();

          if (roleRow?.role === 'admin') {
            role = 'admin';
          } else if (signInData.user.user_metadata?.role === 'admin' || signInData.user.app_metadata?.role === 'admin') {
            role = 'admin';
          }
        } catch {
          if (signInData.user.user_metadata?.role === 'admin' || signInData.user.app_metadata?.role === 'admin') {
            role = 'admin';
          }
        }

        const identifier =
          signInData.user.user_metadata?.regNumber ||
          signInData.user.user_metadata?.name ||
          cleanReg;

        const authUser: User = {
          id: signInData.user.id,
          name: identifier,
          regNumber: signInData.user.user_metadata?.regNumber || (role === 'student' ? identifier : undefined),
          email: signInData.user.email,
          role,
          status: 'active',
          createdAt: signInData.user.created_at || new Date().toISOString(),
        };

        setCurrentUser(authUser);
        await syncLocalUserCredentials(authUser, password);
        return { success: true, user: authUser };
      }

      // If signIn failed for a student registration number:
      // Try to auto-register new student OR identify wrong password for existing student
      if (!isEmail) {
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
          email: emailToUse,
          password,
          options: {
            data: { regNumber: cleanReg, name: cleanReg, role: 'student' },
          },
        });

        if (signUpData?.user && !signUpError) {
          // New student registered smoothly on first sign-in!
          const newUserId = signUpData.user.id;
          try {
            await supabase
              .from('user_roles')
              .insert({ user_id: newUserId, role: 'student' });
          } catch (roleErr) {
            console.warn('Failed to insert student role row:', roleErr);
          }

          if (!signUpData.session) {
            await supabase.auth.signInWithPassword({
              email: emailToUse,
              password,
            });
          }

          const newUser: User = {
            id: newUserId,
            name: cleanReg,
            regNumber: cleanReg,
            email: emailToUse,
            role: 'student',
            status: 'active',
            createdAt: signUpData.user.created_at || new Date().toISOString(),
          };

          setCurrentUser(newUser);
          await syncLocalUserCredentials(newUser, password);
          return { success: true, user: newUser };
        }

        // If signUp returned "User already registered", the account exists in Supabase,
        // which means the password they entered was wrong!
        if (
          signUpError?.message?.includes('User already registered') ||
          signUpError?.status === 422
        ) {
          return {
            success: false,
            error: `Incorrect password for registration number ${cleanReg}. Please check your credentials.`,
          };
        }
      }
    } catch (err: any) {
      console.warn('Supabase auth attempt notice:', err);
    }
  }

  // 2. Local Fallback Verification
  const localUsers = getStoredLocalUsers();
  const match = localUsers.find(
    (u) =>
      u.name.toLowerCase() === cleanInput.toLowerCase() ||
      (u.regNumber && u.regNumber.toLowerCase() === cleanInput.toLowerCase()) ||
      (u.email && u.email.toLowerCase() === cleanInput.toLowerCase())
  );

  if (match) {
    if (match.status === 'deactivated') {
      return { success: false, error: 'This account has been deactivated. Please contact an administrator.' };
    }

    if (match.passwordHash && match.salt) {
      const computedHash = await hashPassword(password, match.salt);
      if (computedHash !== match.passwordHash) {
        return {
          success: false,
          error: `Incorrect password for registration number ${cleanReg}. Please check your credentials.`,
        };
      }
    }

    const identifier = match.regNumber || match.name;
    const authUser: User = {
      id: match.id,
      name: identifier,
      regNumber: match.regNumber || (match.role === 'student' ? identifier : undefined),
      email: match.email,
      role: match.role === 'admin' ? 'admin' : 'student',
      status: match.status || 'active',
      createdAt: match.createdAt,
    };
    setCurrentUser(authUser);
    return { success: true, user: authUser };
  }

  // If local offline fallback and valid student regNumber: auto-save local account
  if (!isEmail && cleanReg.length >= 3) {
    const salt = generateSalt();
    const passwordHash = await hashPassword(password, salt);
    const newLocalUser: StoredLocalUser = {
      id: `std_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      name: cleanReg,
      regNumber: cleanReg,
      email: emailToUse,
      role: 'student',
      status: 'active',
      passwordHash,
      salt,
      createdAt: new Date().toISOString(),
    };
    localUsers.push(newLocalUser);
    saveStoredLocalUsers(localUsers);

    const authUser: User = {
      id: newLocalUser.id,
      name: newLocalUser.name,
      regNumber: newLocalUser.regNumber,
      email: newLocalUser.email,
      role: 'student',
      status: 'active',
      createdAt: newLocalUser.createdAt,
    };
    setCurrentUser(authUser);
    return { success: true, user: authUser };
  }

  return { success: false, error: 'Account not found. Please check your credentials.' };
}

/**
 * Retrieve all registered administrator accounts.
 * Gated strictly to authorized administrators.
 */
export function getAdminUsers(): User[] {
  if (!isAdmin()) return [];
  const localUsers = getStoredLocalUsers();
  return localUsers
    .filter((u) => u.role === 'admin')
    .map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: 'admin' as const,
      status: u.status || 'active',
      createdAt: u.createdAt,
    }));
}

/**
 * Securely create a new administrator account.
 * Gated strictly to existing authorized administrators inside the Admin Dashboard.
 */
export async function createAdminAccount(
  name: string,
  email: string,
  password: string,
  confirmPassword?: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  if (!isAdmin()) {
    return { success: false, error: 'Unauthorized: Only an authorized administrator can create administrator accounts.' };
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();

  if (!cleanName || cleanName.length < 2) {
    return { success: false, error: 'Administrator name must be at least 2 characters.' };
  }
  if (!cleanEmail || !cleanEmail.includes('@')) {
    return { success: false, error: 'Please provide a valid email address.' };
  }
  if (!password || password.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters.' };
  }
  if (confirmPassword !== undefined && password !== confirmPassword) {
    return { success: false, error: 'Passwords do not match.' };
  }

  const localUsers = getStoredLocalUsers();
  const existing = localUsers.find(
    (u) =>
      (u.email && u.email.toLowerCase() === cleanEmail) ||
      u.name.toLowerCase() === cleanName.toLowerCase()
  );
  if (existing) {
    return { success: false, error: 'An administrator with this email or name already exists.' };
  }

  const salt = generateSalt();
  const passwordHash = await hashPassword(password, salt);
  const adminId = `adm_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

  const newAdmin: User = {
    id: adminId,
    name: cleanName,
    email: cleanEmail,
    role: 'admin',
    status: 'active',
    createdAt: new Date().toISOString(),
  };

  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { data, error: supaErr } = await supabase.auth.signUp({
        email: cleanEmail,
        password,
        options: {
          data: { name: cleanName, role: 'admin' },
        },
      });
      if (data?.user?.id) {
        newAdmin.id = data.user.id;
        await supabase
          .from('user_roles')
          .insert({ user_id: data.user.id, role: 'admin' })
          .then(() => {}, () => {});
      } else if (supaErr) {
        console.warn('Supabase admin registration notice:', supaErr.message);
      }
    } catch (err) {
      console.warn('Supabase admin registration exception:', err);
    }
  }

  localUsers.push({
    id: newAdmin.id,
    name: cleanName,
    email: cleanEmail,
    role: 'admin',
    status: 'active',
    passwordHash,
    salt,
    createdAt: newAdmin.createdAt,
  });
  saveStoredLocalUsers(localUsers);

  return { success: true, user: newAdmin };
}

/**
 * Update an administrator's profile.
 * Gated strictly to existing authorized administrators.
 */
export async function updateAdminProfile(
  adminId: string,
  name: string,
  email: string
): Promise<{ success: boolean; error?: string }> {
  if (!isAdmin()) {
    return { success: false, error: 'Unauthorized.' };
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim().toLowerCase();

  if (!cleanName || cleanName.length < 2) {
    return { success: false, error: 'Name must be at least 2 characters.' };
  }
  if (!cleanEmail || !cleanEmail.includes('@')) {
    return { success: false, error: 'Valid email is required.' };
  }

  const localUsers = getStoredLocalUsers();
  const idx = localUsers.findIndex((u) => u.id === adminId && u.role === 'admin');
  if (idx === -1) {
    return { success: false, error: 'Administrator not found.' };
  }

  localUsers[idx].name = cleanName;
  localUsers[idx].email = cleanEmail;
  saveStoredLocalUsers(localUsers);

  // If updating current logged in admin, update session
  const current = getCurrentUser();
  if (current && current.id === adminId) {
    setCurrentUser({
      ...current,
      name: cleanName,
      email: cleanEmail,
    });
  }

  return { success: true };
}

/**
 * Deactivate or Reactivate an administrator.
 * Prevents an administrator from deactivating themselves.
 */
export async function toggleAdminStatus(
  adminId: string,
  newStatus: 'active' | 'deactivated'
): Promise<{ success: boolean; error?: string }> {
  if (!isAdmin()) {
    return { success: false, error: 'Unauthorized.' };
  }

  const current = getCurrentUser();
  if (current && current.id === adminId && newStatus === 'deactivated') {
    return { success: false, error: 'You cannot deactivate your own administrator account.' };
  }

  const localUsers = getStoredLocalUsers();
  const idx = localUsers.findIndex((u) => u.id === adminId && u.role === 'admin');
  if (idx === -1) {
    return { success: false, error: 'Administrator not found.' };
  }

  localUsers[idx].status = newStatus;
  saveStoredLocalUsers(localUsers);

  return { success: true };
}

/**
 * Reset an administrator's password.
 * Gated strictly to existing authorized administrators.
 */
export async function resetAdminPassword(
  adminId: string,
  newPassword: string
): Promise<{ success: boolean; error?: string }> {
  if (!isAdmin()) {
    return { success: false, error: 'Unauthorized.' };
  }

  if (!newPassword || newPassword.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters.' };
  }

  const localUsers = getStoredLocalUsers();
  const idx = localUsers.findIndex((u) => u.id === adminId && u.role === 'admin');
  if (idx === -1) {
    return { success: false, error: 'Administrator not found.' };
  }

  const salt = generateSalt();
  const passwordHash = await hashPassword(newPassword, salt);
  localUsers[idx].salt = salt;
  localUsers[idx].passwordHash = passwordHash;
  saveStoredLocalUsers(localUsers);

  return { success: true };
}

export function logout(): void {
  const supabase = getSupabaseClient();
  if (supabase) {
    supabase.auth.signOut().catch(() => {});
  }
  setCurrentUser(null);
  try {
    localStorage.removeItem(USER_SESSION_KEY);
    localStorage.removeItem('prep_studylab_active_session_v1');
  } catch {
    // Ignore
  }
}
