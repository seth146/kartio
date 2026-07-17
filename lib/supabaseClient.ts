import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Accept either the modern publishable key or the legacy/integration-injected
// anon key, so the form works regardless of how the env var was named in Vercel.
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Verejný Supabase klient pre prehliadač.
 * Používa publishable kľúč (sb_publishable_…) — bezpečný pre klienta.
 * Zápis do tabuľky `waitlist` je povolený cez RLS politiku (len INSERT).
 */
export const supabase =
  supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey, {
        auth: { persistSession: false },
      })
    : null;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);
