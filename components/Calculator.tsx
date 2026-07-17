"use client";

import { useState } from "react";

// Interactive "how much time will kartio save you" hook. Pure client-side
// estimate — assumes kartio removes ~60 % of the weekly admin/paperwork load.
export default function Calculator() {
  const [clients, setClients] = useState(25);
  const [adminHours, setAdminHours] = useState(6);

  const savedPerMonth = Math.round(adminHours * 0.6 * 4.3);
  const workdaysPerYear = Math.max(1, Math.round((savedPerMonth * 12) / 8));

  return (
    <div className="calc-card">
      <div className="calc-controls">
        <div className="calc-field">
          <div className="calc-label">
            <span>Klienti týždenne</span>
            <b>{clients}</b>
          </div>
          <input
            type="range"
            min={5}
            max={60}
            step={1}
            value={clients}
            onChange={(e) => setClients(Number(e.target.value))}
            aria-label="Počet klientov týždenne"
          />
        </div>

        <div className="calc-field">
          <div className="calc-label">
            <span>Hodiny týždenne na administratíve a výkazoch</span>
            <b>{adminHours} h</b>
          </div>
          <input
            type="range"
            min={1}
            max={20}
            step={1}
            value={adminHours}
            onChange={(e) => setAdminHours(Number(e.target.value))}
            aria-label="Hodiny týždenne strávené administratívou"
          />
        </div>
      </div>

      <div className="calc-result">
        <span className="calc-result-label">S kartiom ušetríte približne</span>
        <div className="calc-big">
          {savedPerMonth}
          <span className="calc-unit">hodín mesačne</span>
        </div>
        <div className="calc-sub">
          To je zhruba <b>{workdaysPerYear}</b> pracovných dní ročne späť pri
          vašich klientoch.
        </div>
        <a className="btn btn-primary calc-cta" href="#poradovnik">
          Chcem ten čas späť
        </a>
        <p className="calc-note">
          Orientačný odhad na základe {clients} klientov týždenne. Skutočná
          úspora závisí od vašej praxe.
        </p>
      </div>
    </div>
  );
}
