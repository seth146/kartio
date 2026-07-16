import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container inner">
          <a className="brand" href="#top" aria-label="kartio domov">
            <span className="mark">k</span>
            <span>
              kartio<span className="dot">.</span>
            </span>
          </a>
          <a className="btn btn-primary" href="#poradovnik">
            Zapísať sa do poradovníka
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <span className="eyebrow">
              Ambulantný informačný softvér · klinická psychológia
            </span>
            <h1>Ambulantný softvér, ktorý vám vráti čas na klientov.</h1>
            <p className="lead">
              kartio je cloudový ambulantný informačný softvér navrhnutý
              špeciálne pre ambulancie klinickej psychológie na Slovensku.
              Zdravotná dokumentácia, objednávky a výkazy pre poisťovne — na
              jednom mieste, bezpečne a bez zbytočnej byrokracie.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary btn-lg" href="#poradovnik">
                Chcem byť medzi prvými
              </a>
              <a className="btn btn-ghost btn-lg" href="#funkcie">
                Pozrieť funkcie
              </a>
            </div>
            <p className="hero-note">
              <span aria-hidden="true">🔒</span>
              Pripravujeme spustenie · zápis do poradovníka je nezáväzný a
              zdarma
            </p>
          </div>
        </section>

        {/* FEATURES */}
        <section id="funkcie">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Čo kartio prinesie</span>
              <h2>Všetko pre chod ambulancie na jednom mieste</h2>
              <p>
                Navrhnuté s klinickými psychológmi tak, aby sedelo na reálny
                priebeh práce v ambulancii — od prvého objednania po výkaz pre
                poisťovňu.
              </p>
            </div>

            <div className="grid">
              <article className="card">
                <span className="ico" aria-hidden="true">📋</span>
                <h3>Elektronická dokumentácia</h3>
                <p>
                  Vedenie zdravotnej dokumentácie klientov v štruktúrovanej,
                  prehľadnej podobe. História sedení, testy a nálezy vždy po
                  ruke.
                </p>
              </article>

              <article className="card">
                <span className="ico" aria-hidden="true">🗓️</span>
                <h3>Objednávkový kalendár</h3>
                <p>
                  Prehľadné plánovanie sedení, automatické pripomienky pre
                  klientov a menej neobsadených termínov.
                </p>
              </article>

              <article className="card">
                <span className="ico" aria-hidden="true">🧾</span>
                <h3>Výkazy pre poisťovne</h3>
                <p>
                  Podklady a dávky pre zdravotné poisťovne (VšZP, Dôvera,
                  Union) pripravené na pár klikov namiesto hodín papierovačiek.
                </p>
              </article>

              <article className="card">
                <span className="ico" aria-hidden="true">☁️</span>
                <h3>V cloude, odkiaľkoľvek</h3>
                <p>
                  Žiadna inštalácia ani server v ambulancii. Bezpečný prístup z
                  počítača aj tabletu, automatické zálohovanie.
                </p>
              </article>

              <article className="card">
                <span className="ico" aria-hidden="true">🛡️</span>
                <h3>Bezpečnosť a GDPR</h3>
                <p>
                  Šifrovanie dát, riadenie prístupov a spracovanie v súlade s
                  GDPR aj požiadavkami na zdravotnú dokumentáciu.
                </p>
              </article>

              <article className="card">
                <span className="ico" aria-hidden="true">🇸🇰</span>
                <h3>Slovenské prostredie</h3>
                <p>
                  Kompletne v slovenčine, prispôsobené legislatíve a bežnej
                  praxi ambulancií klinickej psychológie u nás.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* AUDIENCE */}
        <section>
          <div className="container">
            <div className="split">
              <span className="kicker">Pre koho je kartio</span>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  letterSpacing: "-0.02em",
                  margin: "10px 0 0",
                }}
              >
                Pre ambulancie klinickej psychológie, ktoré chcú menej
                administratívy
              </h2>
              <ul className="checklist">
                <li>
                  <span className="tick" aria-hidden="true">✓</span>
                  Súkromné ambulancie klinickej psychológie
                </li>
                <li>
                  <span className="tick" aria-hidden="true">✓</span>
                  Psychológovia so zmluvou so zdravotnými poisťovňami
                </li>
                <li>
                  <span className="tick" aria-hidden="true">✓</span>
                  Ambulancie, ktoré stále vedú dokumentáciu na papieri
                </li>
                <li>
                  <span className="tick" aria-hidden="true">✓</span>
                  Menšie tímy, ktoré chcú prehľad na jednom mieste
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* WAITLIST */}
        <section id="poradovnik" className="waitlist">
          <div className="container">
            <div
              style={{
                display: "grid",
                gap: "40px",
                gridTemplateColumns: "1fr",
                alignItems: "start",
              }}
            >
              <div className="section-head" style={{ marginBottom: 8 }}>
                <span className="kicker">Poradovník</span>
                <h2>Buďte medzi prvými, kto kartio vyskúša</h2>
                <p>
                  Kartio ešte len pripravujeme. Zapíšte sa do poradovníka a
                  ozveme sa vám, hneď ako otvoríme prístup — vrátane možnosti
                  ovplyvniť, ako bude softvér fungovať.
                </p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="container">
            <div className="section-head">
              <span className="kicker">Časté otázky</span>
              <h2>Čo je dobré vedieť</h2>
            </div>
            <div style={{ maxWidth: "760px" }}>
              <div className="faq-item">
                <h3>Kedy bude kartio dostupné?</h3>
                <p>
                  Pracujeme na prvej verzii. Presný dátum spustenia oznámime
                  ľuďom v poradovníku ako prvým — a to bez akéhokoľvek záväzku z
                  vašej strany.
                </p>
              </div>
              <div className="faq-item">
                <h3>Koľko bude kartio stáť?</h3>
                <p>
                  Cenník ešte finalizujeme. Chceme, aby bol dostupný aj pre malé
                  a jednoosobové ambulancie. Záujemcovia z poradovníka dostanú
                  zvýhodnené podmienky.
                </p>
              </div>
              <div className="faq-item">
                <h3>Ako je to s ochranou údajov?</h3>
                <p>
                  Ochrana citlivých zdravotných údajov je pre nás priorita. Dáta
                  sú šifrované a spracúvané v súlade s GDPR a požiadavkami na
                  vedenie zdravotnej dokumentácie.
                </p>
              </div>
              <div className="faq-item">
                <h3>Zapisujem sa k niečomu záväznému?</h3>
                <p>
                  Nie. Zápis do poradovníka je nezáväzný a zdarma. Slúži len na
                  to, aby sme vás vedeli informovať o spustení.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container inner">
          <div className="brand" style={{ fontSize: "1.05rem" }}>
            <span className="mark" style={{ width: 28, height: 28 }}>
              k
            </span>
            <span>
              kartio<span className="dot">.</span>
            </span>
          </div>
          <div>
            © 2026 kartio · Ambulantný informačný softvér ·{" "}
            <a href="mailto:ahoj@kartio.sk">ahoj@kartio.sk</a>
          </div>
        </div>
      </footer>
    </>
  );
}
