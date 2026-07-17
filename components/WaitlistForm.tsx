"use client";

import { useState } from "react";
import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";
import { waitlistPosition } from "@/lib/waitlist";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [position, setPosition] = useState<number | null>(null);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!EMAIL_RE.test(email.trim())) {
      setError("Zadajte prosím platnú e-mailovú adresu.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    if (!isSupabaseConfigured || !supabase) {
      setError(
        "Poradovník momentálne nie je pripojený. Skúste to prosím neskôr alebo nám napíšte na ahoj@kartio.sk."
      );
      setStatus("error");
      return;
    }

    const { error: insertError } = await supabase.from("waitlist").insert({
      email: email.trim().toLowerCase(),
      name: name.trim() || null,
      organization: organization.trim() || null,
      note: note.trim() || null,
      source: "landing",
    });

    // 23505 = unique_violation → e-mail už v poradovníku je; berieme to ako úspech.
    if (insertError && insertError.code !== "23505") {
      setError(
        "Zápis sa nepodaril. Skúste to prosím znova, alebo nám napíšte na ahoj@kartio.sk."
      );
      setStatus("error");
      return;
    }

    setPosition(waitlistPosition());
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="form-card">
        <div className="success-state">
          <div className="big-tick" aria-hidden="true">
            ✓
          </div>
          <h3 style={{ margin: "0 0 6px", color: "#fff" }}>
            Ste v poradovníku!
          </h3>
          {position && (
            <div className="position-badge">
              Vaše poradie: <b>{position}.</b>
            </div>
          )}
          <p style={{ margin: "10px 0 0", color: "#c7ebe6" }}>
            Ďakujeme. Ozveme sa vám hneď, ako spustíme prístup — budete medzi
            prvými, kto kartio vyskúša.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="wl-email">Pracovný e-mail *</label>
        <input
          id="wl-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="meno@ambulancia.sk"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="wl-name">Meno a priezvisko</label>
          <input
            id="wl-name"
            type="text"
            autoComplete="name"
            placeholder="Mgr. Jana Nováková"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="wl-org">Názov ambulancie</label>
          <input
            id="wl-org"
            type="text"
            autoComplete="organization"
            placeholder="Ambulancia klinickej psychológie"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="wl-note">Čo by vám najviac pomohlo? (nepovinné)</label>
        <textarea
          id="wl-note"
          placeholder="Napríklad: výkazy pre poisťovne, objednávkový kalendár, elektronická dokumentácia…"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      {status === "error" && (
        <div className="form-msg err" role="alert">
          {error}
        </div>
      )}

      <div className="form-actions">
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Zapisujem…" : "Zapísať sa do poradovníka"}
        </button>
      </div>

      <p className="form-fineprint">
        Zapísaním súhlasíte s tým, že vás môžeme kontaktovať ohľadom spustenia
        kartio. Žiadny spam, kedykoľvek sa môžete odhlásiť.
      </p>
    </form>
  );
}
