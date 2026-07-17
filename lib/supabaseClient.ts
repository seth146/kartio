import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

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
