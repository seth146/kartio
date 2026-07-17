// Pre-launch social-proof numbers for the waitlist.
//
// We don't expose the real row count (RLS blocks anon SELECT, and an honest
// "0 v poradovníku" reads badly before launch). Instead we show a number that
// is a pure, strictly-increasing function of time: it starts well above zero
// and only ever ticks up, never jitters down. Real emails are still stored —
// only the displayed number is cosmetic.

const LAUNCH_TS = Date.UTC(2026, 6, 1); // 1. júl 2026
const BASE = 144; // tuned so "today" already reads ~240
const STEP_MS = 4 * 60 * 60 * 1000; // +1 every 4h ≈ 6/day, monotonic

/** Believable "already N in the waitlist" number. Only increases over time. */
export function waitlistCount(): number {
  return BASE + Math.floor((Date.now() - LAUNCH_TS) / STEP_MS);
}

/** The spot a brand-new signup gets — always just ahead of the live count. */
export function waitlistPosition(): number {
  return waitlistCount() + 1;
}
