// Presentational, in-brand UI mockups of the kartio app. Pure markup + CSS —
// no real data, no client JS. Used to make the pre-launch page feel like a
// real product instead of a "coming soon" placeholder.

function WinBar({ path }: { path: string }) {
  return (
    <div className="win-bar">
      <div className="win-dots">
        <span />
        <span />
        <span />
      </div>
      <div className="win-url">kartio.sk{path}</div>
    </div>
  );
}

function Side({ active }: { active: string }) {
  const items = ["Prehľad", "Kalendár", "Klienti", "Dokumentácia", "Výkazy"];
  return (
    <aside className="win-side">
      <div className="win-brand">
        <span className="win-logo">k</span>
        <span>kartio</span>
      </div>
      <nav className="win-nav">
        {items.map((i) => (
          <div key={i} className={i === active ? "active" : ""}>
            {i}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export function DashboardMock() {
  return (
    <div
      className="win"
      role="img"
      aria-label="Ukážka rozhrania kartio – prehľad ambulancie"
    >
      <WinBar path="/app" />
      <div className="win-body">
        <Side active="Prehľad" />
        <div className="win-main">
          <div className="mk-head">
            <div>
              <div className="mk-hello">Dobré ráno, Jana 👋</div>
              <div className="mk-date">Streda 17. júla</div>
            </div>
            <div className="chip ok">Všetko pripravené</div>
          </div>
          <div className="mk-stats">
            <div className="mk-stat">
              <b>8</b>
              <span>dnešných objednávok</span>
            </div>
            <div className="mk-stat">
              <b>3</b>
              <span>noví klienti</span>
            </div>
            <div className="mk-stat">
              <b>12</b>
              <span>výkazov k odoslaniu</span>
            </div>
          </div>
          <div className="mk-subhead">Najbližšie objednávky</div>
          <div className="mk-list">
            <div className="mk-appt">
              <span className="t">09:00</span>
              <span className="av">MK</span>
              <span className="who">Martin Kováč</span>
              <span className="chip">Terapia</span>
            </div>
            <div className="mk-appt">
              <span className="t">10:30</span>
              <span className="av">ZH</span>
              <span className="who">Zuzana Horváthová</span>
              <span className="chip">Vstupné</span>
            </div>
            <div className="mk-appt">
              <span className="t">13:00</span>
              <span className="av">PB</span>
              <span className="who">Peter Baláž</span>
              <span className="chip">Kontrola</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CalendarMock() {
  const cols = [
    { d: "Po", n: "14", evs: [{ t: "09:00", c: "a" }, { t: "11:00", c: "b" }] },
    { d: "Ut", n: "15", evs: [{ t: "10:00", c: "c" }] },
    { d: "St", n: "16", evs: [{ t: "09:00", c: "b" }, { t: "13:30", c: "a" }] },
    { d: "Št", n: "17", evs: [{ t: "08:30", c: "a" }, { t: "12:00", c: "c" }] },
    { d: "Pi", n: "18", evs: [{ t: "10:30", c: "b" }] },
  ];
  return (
    <div className="win" role="img" aria-label="Ukážka objednávkového kalendára">
      <WinBar path="/app/kalendar" />
      <div className="win-main">
        <div className="mk-subhead">Tento týždeň · júl 2026</div>
        <div className="cal">
          {cols.map((col) => (
            <div className="cal-col" key={col.d}>
              <div className="cal-day">
                <span>{col.d}</span>
                <b>{col.n}</b>
              </div>
              <div className="cal-slots">
                {col.evs.map((e, i) => (
                  <div className={`cal-ev ${e.c}`} key={i}>
                    <span className="cal-t">{e.t}</span>
                    <span className="cal-bar" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RecordMock() {
  return (
    <div
      className="win"
      role="img"
      aria-label="Ukážka zdravotnej dokumentácie klienta"
    >
      <WinBar path="/app/klienti" />
      <div className="win-main">
        <div className="rec-head">
          <span className="av lg">ZH</span>
          <div>
            <div className="rec-name">Zuzana Horváthová</div>
            <div className="rec-tags">
              <span className="chip">F41.1 · Úzkostná porucha</span>
              <span className="chip">Dôvera</span>
            </div>
          </div>
        </div>
        <div className="rec-tabs">
          <span className="active">História sedení</span>
          <span>Dokumenty</span>
          <span>Testy</span>
        </div>
        <div className="rec-sessions">
          <div className="rec-session">
            <b>10. júl</b>
            <span>Individuálne sedenie · práca s úzkosťou, dychové techniky</span>
          </div>
          <div className="rec-session">
            <b>26. jún</b>
            <span>Kontrolné sedenie · zlepšenie spánku, GAD-7 klesol na 9</span>
          </div>
          <div className="rec-session">
            <b>12. jún</b>
            <span>Vstupné vyšetrenie · anamnéza, stanovenie cieľov</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BillingMock() {
  return (
    <div className="win" role="img" aria-label="Ukážka dávky pre zdravotnú poisťovňu">
      <WinBar path="/app/vykazy" />
      <div className="win-main">
        <div className="mk-head">
          <div>
            <div className="mk-hello sm">Dávka pre VšZP</div>
            <div className="mk-date">Júl 2026 · 128 výkonov</div>
          </div>
          <div className="chip ok">Pripravené na odoslanie</div>
        </div>
        <div className="bill-rows">
          <div className="bill-row">
            <span>Psychoterapia (60 min)</span>
            <span className="mut">64×</span>
            <b>1 216 €</b>
          </div>
          <div className="bill-row">
            <span>Psychologické vyšetrenie</span>
            <span className="mut">22×</span>
            <b>704 €</b>
          </div>
          <div className="bill-row">
            <span>Kontrolné sedenie</span>
            <span className="mut">42×</span>
            <b>630 €</b>
          </div>
        </div>
        <div className="bill-total">
          <span>Spolu za júl</span>
          <b>2 550 €</b>
        </div>
        <button className="bill-btn" type="button" tabIndex={-1} aria-hidden="true">
          Odoslať dávku do poisťovne
        </button>
      </div>
    </div>
  );
}
