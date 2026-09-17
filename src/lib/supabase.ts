import { createClient, SupabaseClient } from '@supabase/supabase-js';

const envUrl = (import.meta.env.VITE_SUPABASE_URL || '').trim();
const envKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || '').trim();

let cachedClient: SupabaseClient | null = null;
let initAttempted = false;

/**
 * Returns whether Supabase credentials are configured via environment variables.
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
