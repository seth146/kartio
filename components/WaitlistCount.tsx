"use client";

import { useEffect, useState } from "react";
import { waitlistCount } from "@/lib/waitlist";

// Renders the live social-proof count. Computed on the client (after mount) so
// the time-based number never causes a server/client hydration mismatch.
export default function WaitlistCount() {
  const [n, setN] = useState<number | null>(null);

  useEffect(() => {
    setN(waitlistCount());
  }, []);

  return (
    <div className="hero-social" aria-live="polite">
      <div className="av-stack" aria-hidden="true">
        <span className="av">MK</span>
        <span className="av">ZH</span>
        <span className="av">PB</span>
        <span className="av more">+</span>
      </div>
      <span className="hero-social-text">
        {n ? (
          <>
            Už <b>{n}</b> ambulancií v poradovníku
          </>
        ) : (
          <>&nbsp;</>
        )}
      </span>
    </div>
  );
}
