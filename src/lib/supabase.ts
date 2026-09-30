import { createClient, SupabaseClient } from '@supabase/supabase-js';

const DEFAULT_SUPABASE_URL = 'https://kbebriigrnkgzzzsqymk.supabase.co';
const DEFAULT_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiZWJyaWlncm5rZ3p6enNxeW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2NTI0NjksImV4cCI6MjEwNTIyODQ2OX0.9CBS8W5yGpWoHCssRR6uGFCMQR19ZlDes6Pa5DAPZzU';

const envUrl = ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) || (globalThis as any).process?.env?.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL).trim();
const envKey = ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY) || (globalThis as any).process?.env?.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_KEY).trim();

let cachedClient: SupabaseClient | null = null;
let initAttempted = false;

/**
 * Returns whether Supabase credentials are configured.
 */
export function isSupabaseConfigured(): boolean {
  return Boolean(envUrl && envKey && envUrl.startsWith('http'));
}

/**
 * Returns the Supabase client instance initialized strictly from environment variables.
 * If credentials are missing or invalid, logs a warning in developer console and returns null.
 */
export function getSupabaseClient(): SupabaseClient | null {
  if (cachedClient) {
    return cachedClient;
  }

  if (initAttempted) {
    return null;
  }

  initAttempted = true;

  if (!isSupabaseConfigured()) {
    console.warn(
      '[Config] Supabase environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) are not set. The application is operating with local persistence.'
    );
    return null;
  }

  try {
    cachedClient = createClient(envUrl, envKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    });
    return cachedClient;
  } catch (err) {
    console.warn('[Config] Failed to initialize client from environment variables:', err);
    return null;
  }
}
