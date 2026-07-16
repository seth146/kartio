import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Verejný Supabase klient pre prehliadač.
 * Používa publishable (anon) kľúč — bezpečný pre klienta.
 * Zápis do tabuľky `waitlist` je povolený cez RLS politiku (len INSERT).
 */
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: { persistSession: false },
      })
    : null;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
