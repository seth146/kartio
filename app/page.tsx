import WaitlistForm from "@/components/WaitlistForm";
import WaitlistCount from "@/components/WaitlistCount";
import Calculator from "@/components/Calculator";
import {
  DashboardMock,
  CalendarMock,
  RecordMock,
  BillingMock,
} from "@/components/mocks";

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
          <nav className="nav-links">
            <a href="#funkcie">Funkcie</a>
            <a href="#kalkulacka">Úspora času</a>
            <a href="#preco">Prečo kartio</a>
          </nav>
          <a className="btn btn-primary" href="#poradovnik">
            Zapísať sa do poradovníka
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                Ambulantný informačný softvér · klinická psychológia
              </span>
              <h1>Ambulantný softvér, ktorý vám vráti čas na klientov.</h1>
              <p className="lead">
                kartio je cloudový ambulantný informačný softvér navrhnutý
                špeciálne pre ambulancie klinickej psychológie na Slovensku.
                Dokumentácia, objednávky a výkazy pre poisťovne — na jednom
                mieste, bez zbytočnej byrokracie.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary btn-lg" href="#poradovnik">
                  Chcem byť medzi prvými
                </a>
                <a className="btn btn-ghost btn-lg" href="#funkcie">
                  Pozrieť funkcie
                </a>
              </div>
              <WaitlistCount />
            </div>
            <div className="hero-visual">
              <DashboardMock />
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <div className="trust-strip">
          <div className="container inner">
            <div className="trust-item">
              <span className="ic" aria-hidden="true">🇪🇺</span> Dáta uložené v EÚ
            </div>
            <div className="trust-item">
              <span className="ic" aria-hidden="true">🔒</span> Šifrované a v
              súlade s GDPR
            </div>
            <div className="trust-item">
              <span className="ic" aria-hidden="true">🏥</span> eZdravie / NCZI na
              roadmape
            </div>
            <div className="trust-item">
              <span className="ic" aria-hidden="true">🇸🇰</span> Kompletne v
              slovenčine
            </div>
          </div>
        </div>

        {/* FEATURE SHOWCASE */}
        <section id="funkcie">
          <div className="container">
            <div className="section-head" style={{ marginBottom: 48 }}>
              <span className="kicker">Čo kartio prinesie</span>
              <h2>Celá ambulancia na jednom mieste</h2>
              <p>
                Navrhnuté pre reálny priebeh práce v ambulancii klinickej
                psychológie — od prvého objednania po odoslanie dávky poisťovni.
              </p>
            </div>

            {/* Kalendár */}
            <div className="showcase-row">
              <div className="showcase-copy">
                <span className="kicker">Objednávkový kalendár</span>
                <h3>Prehľad o termínoch bez telefonovania</h3>
                <p>
                  Plánujte sedenia v prehľadnom kalendári a nechajte kartio
                  posielať pripomienky klientom automaticky.
                </p>
                <ul className="mini-checklist">
                  <li>
                    <span className="tick" aria-hidden="true">✓</span>
                    Automatické SMS a e-mailové pripomienky
                  </li>
                  <li>
                    <span className="tick" aria-hidden="true">✓</span>
                    Menej neobsadených termínov a zabudnutých sedení
                  </li>
                  <li>
                    <span className="tick" aria-hidden="true">✓</span>
                    Opakované termíny na pár klikov
                  </li>
                </ul>
              </div>
              <div className="showcase-visual">
                <CalendarMock />
              </div>
            </div>

            {/* Dokumentácia */}
            <div className="showcase-row reverse">
              <div className="showcase-copy">
                <span className="kicker">Zdravotná dokumentácia</span>
                <h3>História každého klienta vždy poruke</h3>
                <p>
                  Štruktúrovaná elektronická dokumentácia — sedenia, nálezy,
                  psychodiagnostické testy aj ciele terapie na jednom mieste.
                </p>
                <ul className="mini-checklist">
                  <li>
                    <span className="tick" aria-hidden="true">✓</span>
                    Prehľadná časová os sedení
                  </li>
                  <li>
                    <span className="tick" aria-hidden="true">✓</span>
                    Šablóny záznamov pre rýchlejšie písanie
                  </li>
                  <li>
                    <span className="tick" aria-hidden="true">✓</span>
                    Bezpečné vyhľadávanie naprieč klientmi
                  </li>
                </ul>
              </div>
              <div className="showcase-visual">
                <RecordMock />
              </div>
            </div>

            {/* Výkazy */}
            <div className="showcase-row">
              <div className="showcase-copy">
                <span className="kicker">Výkazy pre poisťovne</span>
                <h3>Dávky pre poisťovne bez papierovačiek</h3>
                <p>
                  kartio zozbiera výkony za obdobie a pripraví dávku pre VšZP,
                  Dôveru či Union — namiesto hodín ručného vypĺňania.
                </p>
                <ul className="mini-checklist">
                  <li>
                    <span className="tick" aria-hidden="true">✓</span>
                    Automatický zber výkonov z dokumentácie
                  </li>
                  <li>
                    <span className="tick" aria-hidden="true">✓</span>
                    Kontrola chýb pred odoslaním
                  </li>
                  <li>
                    <span className="tick" aria-hidden="true">✓</span>
                    Prehľad o tom, čo už bolo uhradené
                  </li>
                </ul>
              </div>
              <div className="showcase-visual">
                <BillingMock />
              </div>
            </div>
          </div>
        </section>

        {/* SECONDARY FEATURES */}
        <section style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="grid">
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
                <span className="ico" aria-hidden="true">🧩</span>
                <h3>Postavené pre psychológov</h3>
                <p>
                  Nie prerobený softvér pre všeobecných lekárov — kartio sedí na
                  prax ambulancie klinickej psychológie.
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

        {/* FOUNDER / WHY */}
        <section id="preco">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Prečo staviame kartio</span>
              <h2>Softvér, aký by sme sami chceli používať</h2>
            </div>
            <div className="founder-card">
              <div className="founder-photo" aria-hidden="true">
                k
              </div>
              <div>
                <p className="founder-quote">
                  „Psychológovia trávia hodiny týždenne administratívou, ktorá
                  ich oberá o čas na klientov. Existujúce systémy sú buď staré,
                  komplikované, alebo písané pre všeobecných lekárov. kartio
                  staviame preto, aby bola technika v ambulancii konečne
                  pomocníkom — jednoduchá, bezpečná a naozaj slovenská.“
                </p>
                <div className="founder-name">Tím kartio</div>
                <div className="founder-role">
                  Staviame ambulantný softvér pre klinickú psychológiu
                </div>
              </div>
            </div>

            <div className="assurances">
              <div className="assurance">
                <span className="ic" aria-hidden="true">🔐</span>
                <b>Bezpečnosť na prvom mieste</b>
                <span>
                  Citlivé zdravotné údaje šifrované a spracované v súlade s GDPR.
                </span>
              </div>
              <div className="assurance">
                <span className="ic" aria-hidden="true">🇪🇺</span>
                <b>Dáta v Európskej únii</b>
                <span>Vaše dáta neopúšťajú EÚ a zostávajú pod kontrolou.</span>
              </div>
              <div className="assurance">
                <span className="ic" aria-hidden="true">🏥</span>
                <b>Napojenie na eZdravie</b>
                <span>
                  Integráciu s NCZI / eZdravie máme na roadmape od začiatku.
                </span>
              </div>
              <div className="assurance">
                <span className="ic" aria-hidden="true">🤝</span>
                <b>Budujeme s vami</b>
                <span>
                  Funkcie určujú psychológovia z poradovníka, nie tabuľka v
                  Exceli.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CALCULATOR */}
        <section id="kalkulacka">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Koľko času ušetríte</span>
              <h2>Spočítajte si, koľko času vám kartio vráti</h2>
              <p>
                Posuňte hodnoty podľa vašej praxe a pozrite si odhad, koľko času
                mesačne by ste získali späť pri klientoch.
              </p>
            </div>
            <Calculator />
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
                  sú šifrované, uložené v EÚ a spracúvané v súlade s GDPR a
                  požiadavkami na vedenie zdravotnej dokumentácie.
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
