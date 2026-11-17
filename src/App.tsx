import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  RDV, FB, MAIL, TEL, TEL_TXT, MAPS, CONSENT,
  EXPLO, PRETRAIT, TECH, ECHO, CHIRURGIE, PATHO, MATERNITE, FICHES, CAS, QUALIF,
} from "./content";
import type { Item } from "./content";

const NAV: { l: string; h: string; sub?: { l: string; h: string }[] }[] = [
  { l: "Accueil", h: "" },
  { l: "Dr Benjelloun", h: "dr-benjelloun" },
  { l: "Assistance à la procréation", h: "procreation/exploration" },
  { l: "Gynécologie", h: "gynecologie/chirurgie", sub: [
    { l: "Chirurgie gynécologique", h: "gynecologie/chirurgie" },
    { l: "Pathologies gynécologiques", h: "gynecologie/pathologies" },
  ] },
  { l: "Obstétrique", h: "obstetrique/maternite", sub: [
    { l: "Maternité", h: "obstetrique/maternite" },
    { l: "Fiches pratiques", h: "obstetrique/fiches" },
  ] },
  { l: "En pratique", h: "pratique/cas-cliniques", sub: [
    { l: "Cas cliniques", h: "pratique/cas-cliniques" },
    { l: "Contact et horaires", h: "contact" },
  ] },
];

function useRoute() {
  const get = () => window.location.hash.replace(/^#\/?/, "");
  const [route, setRoute] = useState(get());
  useEffect(() => {
    const f = () => { setRoute(get()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", f);
    return () => window.removeEventListener("hashchange", f);
  }, []);
  return route;
}

function Acc({ items }: { items: Item[] }) {
  return (
    <div className="acc">
      {items.map((i) => (
        <details key={i.t}><summary>{i.t}</summary><p>{i.d}</p></details>
      ))}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return <ul className="ticks">{items.map((i) => <li key={i}>{i}</li>)}</ul>;
}

function Listing({ title, intro, children }: { title: string; intro?: ReactNode; children: ReactNode }) {
  return (
    <div className="wrap page">
      <h1>{title}</h1>
      {intro && <p className="lead">{intro}</p>}
      {children}
    </div>
  );
}

const TABS = [
  { k: "exploration", l: "Exploration / Diagnostic", items: EXPLO },
  { k: "pretraitement", l: "Préparation aux traitements", items: PRETRAIT },
  { k: "techniques", l: "Techniques d’assistance", items: TECH },
  { k: "echographies", l: "Échographies", items: ECHO },
];

function Procreation({ tab }: { tab?: string }) {
  const cur = TABS.find((t) => t.k === tab) ?? TABS[0];
  return (
    <Listing title="Assistance à la procréation" intro="Un parcours complet, de l’exploration du couple aux techniques d’assistance médicale à la procréation.">
      <div className="tabs" role="tablist">
        {TABS.map((t) => (
          <a key={t.k} role="tab" aria-selected={t.k === cur.k} className={t.k === cur.k ? "on" : ""} href={"#/procreation/" + t.k}>{t.l}</a>
        ))}
      </div>
      <div className="panel">
        <h2>{cur.l}</h2>
        <Bullets items={cur.items} />
      </div>
      <p className="cta-row"><a className="btn" href={RDV}>Prendre rendez-vous</a></p>
    </Listing>
  );
}

function Hours() {
  return (
    <dl className="hours">
      <dt>Consultations de gynécologie-obstétrique</dt>
      <dd>Sur rendez-vous, lundi au jeudi, 14h00 – 19h00 (Mabella)</dd>
      <dt>Diagnostic de l’infertilité et monitorage</dt>
      <dd>Lundi au vendredi, 11h00 – 14h00 (Mabella)</dd>
      <dt>Ponctions, transferts, congélations, inséminations</dt>
      <dd>Lundi au vendredi, 08h00 – 11h00 (Centre Noor)</dd>
      <dt>Préparation à l’accouchement</dt>
      <dd>Lundi au vendredi, 16h00 – 18h00 (Mabella)</dd>
    </dl>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Rabat · Mabella</p>
            <h1>Un accompagnement attentif, du désir d’enfant jusqu’à l’accouchement.</h1>
            <p className="lead">
              Le Dr Youssef Benjelloun est spécialisé dans la préservation de la fertilité, le diagnostic et le
              traitement de la stérilité (FIV, IIU, ICSI), ainsi que dans l’obstétrique et la chirurgie gynécologique.
            </p>
            <div className="cta">
              <a className="btn" href={RDV}>Prendre rendez-vous sur DabaDoc</a>
              <a className="btn ghost" href="#/dr-benjelloun">Découvrir le Dr Benjelloun</a>
            </div>
          </div>
          <img className="portrait" src="/doctor.jpg" alt="Dr Youssef Benjelloun" />
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <h2>Nos domaines d’activité</h2>
          <div className="cards">
            <a className="card link" href="#/procreation/exploration"><h3>Procréation médicalement assistée</h3><p>Diagnostic, préparation aux traitements, inséminations, FIV/ICSI et congélation d’ovocytes, d’embryons et de spermatozoïdes.</p></a>
            <a className="card link" href="#/gynecologie/chirurgie"><h3>Gynécologie et chirurgie</h3><p>Colposcopie, cœlioscopie, hystéroscopie, chirurgie vaginale et abdominale, urgences gynécologiques 24h/24.</p></a>
            <a className="card link" href="#/obstetrique/maternite"><h3>Obstétrique</h3><p>Suivi de grossesse, préparation à l’accouchement et accouchements 24h/24 dans quatre cliniques de Rabat.</p></a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split">
          <div>
            <h2>Horaires</h2>
            <Hours />
            <p className="cta-row"><a href="#/contact">Adresse, contact et urgences →</a></p>
          </div>
          <blockquote>
            « Mariée depuis 3 ans, consultait pour infertilité primaire. Après deux inséminations intra-utérines puis
            une fécondation in vitro, la grossesse se poursuit avec deux fœtus bien portants à 6 mois. »
            <footer>Une patiente, 28 ans</footer>
          </blockquote>
        </div>
      </section>
    </>
  );
}

function Doctor() {
  return (
    <div className="wrap page">
      <h1>Dr Youssef Benjelloun</h1>
      <div className="doc-grid">
        <img className="portrait" src="/doctor.jpg" alt="Dr Youssef Benjelloun" />
        <div>
          <p className="lead">
            Spécialisé dans la préservation de la fertilité, le diagnostic et le traitement de la stérilité (FIV, IIU, ICSI),
            chirurgien gynécologue et obstétricien à Rabat.
          </p>
          <p>
            Inscrit au Conseil de l’Ordre des Médecins de la Région Nord : autorisation d’exercer et n° d’inscription au
            Conseil national de l’Ordre des Médecins n° 6807, carte professionnelle n° 5285/RSZZ.
          </p>
          <p>Le Dr Benjelloun parle anglais, espagnol, français et arabe.</p>
          <p><b>Tarifs :</b> conventionné secteur privé, honoraires libres. À titre indicatif, la consultation avec échographie est à 700 dhs.</p>
        </div>
      </div>

      <h2>Parcours</h2>
      <p>
        Membre titulaire de la Société Royale de Gynécologie Obstétrique. Après 2 ans d’internat et 6 ans de résidanat de
        gynécologie-obstétrique à Rabat, il a été 2 ans assistant dans une maternité de niveau 3 à Rabat, puis à Lyon chef
        de clinique et praticien hospitalier pendant 8 ans, avant de s’installer au 32 avenue Tadla, Mabella.
      </p>

      <h2>Qualifications</h2>
      <Bullets items={QUALIF} />

      <h2>Domaines d’activité</h2>
      <div className="cards">
        <div className="card"><h3>Procréation médicale assistée</h3><Bullets items={["Diagnostic, programmation et préparation aux traitements de la stérilité", "Inséminations intra-utérines", "FIV : FIVETTE et ICSI", "Congélation d’embryons, d’ovocytes et de spermatozoïdes pour préserver la fertilité"]} /></div>
        <div className="card"><h3>Chirurgie gynécologique</h3><Bullets items={["Colposcopie diagnostique et opératoire, résection à l’anse diathermique, traitement des lésions précancéreuses du col", "Cœlioscopie et hystéroscopie diagnostiques et opératoires", "Chirurgie vaginale et abdominale", "Urgences gynécologiques"]} /></div>
        <div className="card"><h3>Suivi de grossesse et accouchement</h3><Bullets items={["Préparation à l’accouchement naturel : 75 % d’accouchements par voie naturelle (recommandation OMS : 85 % ; secteur privé : 30 %)", "Césariennes (25 %) : maîtrise des techniques minimisant les complications (environ 1 %)"]} /></div>
      </div>

      <h2>Horaires</h2>
      <Hours />
      <p>
        <b>Chirurgie programmée</b> les lundi, mardi et mercredi, de 07h00 à 09h00, aux cliniques Les Ambassadeurs, Tour
        Hassan, Benjelloun et Beauséjour. Urgences chirurgicales et accouchements 24h/24 et 7j/7 dans ces mêmes cliniques.
        En cas d’absence, le Dr Benjelloun est remplacé par des confrères gynécologues-obstétriciens de ces cliniques.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="wrap page">
      <h1>Contact et horaires</h1>
      <div className="cards">
        <div className="card"><h3>Cabinet</h3><p>32 avenue Tadla, Mabella<br />Rabat, CP 10180</p><p><a href={MAPS}>Ouvrir dans Google Maps</a></p></div>
        <div className="card"><h3>Rendez-vous</h3><p><a href={RDV}>Prendre rendez-vous sur DabaDoc</a></p><p><a href={"mailto:" + MAIL}>{MAIL}</a></p><p><a href={FB}>Page Facebook</a></p></div>
        <div className="card urgent"><h3>Urgences</h3><p>Contactez l’assistante du cabinet, Houda, 24h/24 et 7j/7 :</p><p><a href={"tel:" + TEL}>{TEL_TXT}</a></p></div>
      </div>
      <h2>Horaires</h2>
      <Hours />
    </div>
  );
}

function Pages({ route }: { route: string }) {
  const [a, b] = route.split("/");
  switch (a) {
    case "dr-benjelloun": return <Doctor />;
    case "procreation": return <Procreation tab={b} />;
    case "gynecologie":
      return b === "pathologies"
        ? <Listing title="Pathologies gynécologiques"><Acc items={PATHO} /></Listing>
        : <Listing title="Chirurgie gynécologique" intro={<>Document à télécharger : <a href={CONSENT}>consentement éclairé aux soins</a></>}><Acc items={CHIRURGIE} /></Listing>;
    case "obstetrique":
      return b === "fiches"
        ? <Listing title="Fiches pratiques maternité"><Acc items={FICHES} /></Listing>
        : <Listing title="Maternité" intro="Un suivi personnalisé de la préconception aux suites de couches."><Acc items={MATERNITE} /></Listing>;
    case "pratique": return <Listing title="Cas cliniques"><Acc items={CAS} /></Listing>;
    case "contact": return <Contact />;
    default: return <Home />;
  }
}

export default function App() {
  const route = useRoute();
  const [open, setOpen] = useState(false);
  return (
    <>
      <header>
        <div className="wrap bar">
          <a href="#/" aria-label="FIVMAB – accueil"><img className="logo" src="/fivmab-logo.png" alt="Centre de gynécologie obstétrique spécialisé en procréation médicale assistée" /></a>
          <button className="burger" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
          <nav className={open ? "open" : ""} onClick={() => setOpen(false)} aria-label="Navigation principale">
            <ul>
              {NAV.map((n) => (
                <li key={n.l} className={n.sub ? "has-sub" : ""}>
                  <a href={"#/" + n.h}>{n.l}</a>
                  {n.sub && <ul>{n.sub.map((s) => <li key={s.h}><a href={"#/" + s.h}>{s.l}</a></li>)}</ul>}
                </li>
              ))}
            </ul>
          </nav>
          <a className="btn small" href={RDV}>Rendez-vous</a>
        </div>
      </header>
      <main><Pages route={route} /></main>
      <footer>
        <div className="wrap">
          <span>© 2026 FIVMAB – Dr Youssef Benjelloun · 32 avenue Tadla, Mabella, Rabat</span>
          <span><a href={FB}>Facebook</a> · <a href={"mailto:" + MAIL}>{MAIL}</a></span>
          <small>Les informations de ce site ne remplacent pas une consultation médicale.</small>
        </div>
      </footer>
    </>
  );
}