import { useEffect, useLayoutEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  RDV, FB, MAIL, TEL, TEL_TXT, MAPS, CONSENT, PHOTOS,
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

function Icon({ n }: { n: string }) {
  const p: Record<string, string> = {
    pin: "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11zM12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",
    mail: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM3 7l9 6 9-6",
    phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
    clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
    cal: "M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 10h16M8 3v4M16 3v4",
  };
  return <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d={p[n]} /></svg>;
}

function Acc({ items, open = false, search = false }: { items: Item[]; open?: boolean; search?: boolean }) {
  const [q, setQ] = useState("");
  const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const shown = items.filter((i) => norm(i.t + " " + i.d).includes(norm(q)));
  return (
    <div>
      {search && (
        <div className="search">
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher dans cette liste…" aria-label="Rechercher" />
          <span>{shown.length} / {items.length}</span>
        </div>
      )}
      <div className="acc">
        {shown.map((i) => (
          <details key={i.t} open={open}><summary>{i.t}</summary><p>{i.d}</p></details>
        ))}
        {shown.length === 0 && <p className="lead">Aucun résultat. Essayez un autre mot.</p>}
      </div>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return <ul className="ticks">{items.map((i) => <li key={i}>{i}</li>)}</ul>;
}

function SubNav({ route }: { route: string }) {
  const g = NAV.find((n) => n.sub?.some((s) => s.h === route));
  if (!g || !g.sub) return null;
  return (
    <div className="subnav">
      {g.sub.map((s) => <a key={s.h} href={"#/" + s.h} className={s.h === route ? "on" : ""}>{s.l}</a>)}
    </div>
  );
}

function PageHero({ route, title, intro }: { route: string; title: string; intro?: ReactNode }) {
  const g = NAV.find((n) => n.sub?.some((s) => s.h === route));
  return (
    <div className="page-hero">
      <div className="wrap">
        <p className="crumbs"><a href="#/">Accueil</a><span>/</span>{g && <>{g.l}<span>/</span></>}{title}</p>
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </div>
  );
}

function Listing({ route, title, intro, children }: { route: string; title: string; intro?: ReactNode; children: ReactNode }) {
  return (
    <>
      <PageHero route={route} title={title} intro={intro} />
      <div className="wrap page">
        <SubNav route={route} />
        {children}
      </div>
    </>
  );
}

const TABS = [
  { k: "exploration", l: "Exploration / Diagnostic", items: EXPLO },
  { k: "pretraitement", l: "Préparation aux traitements", items: PRETRAIT },
  { k: "techniques", l: "Techniques d’assistance", items: TECH },
  { k: "echographies", l: "Échographies", items: ECHO },
];

function Procreation({ tab }: { tab?: string }) {
  const idx = Math.max(0, TABS.findIndex((t) => t.k === tab));
  const cur = TABS[idx];
  const prev = TABS[idx - 1];
  const next = TABS[idx + 1];
  return (
    <Listing route={"procreation/" + cur.k} title="Assistance à la procréation" intro="Un parcours complet, de l’exploration du couple aux techniques d’assistance médicale à la procréation.">
      <div className="tabs" role="tablist">
        {TABS.map((t, i) => (
          <a key={t.k} role="tab" aria-selected={t.k === cur.k} className={t.k === cur.k ? "on" : ""} href={"#/procreation/" + t.k}><b>{i + 1}</b>{t.l}</a>
        ))}
      </div>
      <div className="panel">
        <h2>{cur.l}</h2>
        <Bullets items={cur.items} />
      </div>
      <div className="pager">
        {prev ? <a href={"#/procreation/" + prev.k}>← {prev.l}</a> : <span />}
        {next ? <a href={"#/procreation/" + next.k}>{next.l} →</a> : <a className="btn" href={RDV}>Prendre rendez-vous</a>}
      </div>
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

function useReveal(route: string) {
  useLayoutEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("main .wrap > *, main .card, main details, main blockquote");
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    els.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      io.observe(el);
    });
    return () => io.disconnect();
  }, [route]);
}

function Gallery() {
  const [big, setBig] = useState<string | null>(null);
  if (PHOTOS.length === 0) return null;
  return (
    <section className="alt">
      <div className="wrap">
        <h2>Le cabinet</h2>
        <p className="lead">Un cadre calme et accueillant, pensé pour votre confort à chaque étape de votre parcours.</p>
        <div className="gallery">
          {PHOTOS.map((p) => (
            <figure key={p.src}>
              <button onClick={() => setBig(p.src)} aria-label={"Agrandir : " + p.alt}>
                <img src={p.src} alt={p.alt} loading="lazy" />
              </button>
              <figcaption>{p.alt}</figcaption>
            </figure>
          ))}
        </div>
        {big && (
          <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setBig(null)}>
            <img src={big} alt="" />
          </div>
        )}
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="blobs" aria-hidden="true"><i /><i /><i /></div>
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
           const TERMS = ["Fécondation in vitro", "ICSI", "Insémination intra-utérine", "Congélation d’ovocytes", "Préservation de la fertilité", "Échographie 4D · 5D · HD-Live", "Colposcopie", "Cœlioscopie", "Hystéroscopie", "Suivi de grossesse", "Préparation à l’accouchement"];

const STEPS = [
  { n: "01", t: "Écouter et comprendre", d: "Consultation, bilan complet du couple et échographies pour identifier l’origine de l’infertilité.", h: "procreation/exploration" },
  { n: "02", t: "Préparer", d: "Hygiène de vie, traitements adaptés et, si besoin, chirurgie pour optimiser vos chances.", h: "procreation/pretraitement" },
  { n: "03", t: "Traiter", d: "Insémination, FIV ou ICSI, congélation d’ovocytes, d’embryons ou de spermatozoïdes.", h: "procreation/techniques" },
  { n: "04", t: "Accompagner", d: "Suivi de grossesse, préparation à l’accouchement et naissance en clinique, 24h/24.", h: "obstetrique/maternite" },
];

function ArtIcon({ n }: { n: "cells" | "scope" | "heart" }) {
  return (
    <svg className="art" viewBox="0 0 48 48" aria-hidden="true">
      {n === "cells" && <><circle cx="19" cy="24" r="12" /><circle cx="30" cy="24" r="12" /></>}
      {n === "scope" && <><circle cx="24" cy="24" r="13" /><path d="M24 6v8M24 34v8M6 24h8M34 24h8" /></>}
      {n === "heart" && <path d="M24 41s-14-8.5-14-19a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 10.5-14 19-14 19z" />}
    </svg>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="blobs" aria-hidden="true"><i /><i /><i /></div>
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Rabat · Mabella</p>
            <h1>Votre projet d’enfant, accompagné avec <em>exigence</em> et <em>douceur</em>.</h1>
            <p className="lead">
              Le Dr Youssef Benjelloun est spécialisé dans la préservation de la fertilité, le diagnostic et le
              traitement de la stérilité (FIV, IIU, ICSI), ainsi que dans l’obstétrique et la chirurgie gynécologique.
            </p>
            <div className="cta">
              <a className="btn" href={RDV}>Prendre rendez-vous</a>
              <a className="btn ghost" href="#/procreation/exploration">Découvrir le parcours</a>
            </div>
          </div>
          <div className="hero-art">
            <svg className="orbit" viewBox="0 0 400 400" aria-hidden="true">
              <circle className="r1" cx="200" cy="200" r="188" />
              <circle className="r2" cx="200" cy="200" r="160" />
              <g className="spin a"><circle cx="200" cy="12" r="9" fill="var(--lav)" /><circle cx="200" cy="388" r="6" fill="var(--sky)" /></g>
              <g className="spin b"><circle cx="40" cy="200" r="7" fill="var(--rose)" /><circle cx="360" cy="200" r="5" fill="var(--lav)" /></g>
            </svg>
            <img className="portrait" src="/doctor.jpg" alt="Dr Youssef Benjelloun" />
            <span className="chip c1">FIV · ICSI · IIU</span>
            <span className="chip c2">Accouchements 24h/24</span>
            <span className="chip c3">Chirurgie mini-invasive</span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="track">{[...TERMS, ...TERMS].map((t, i) => <span key={i}>{t}</span>)}</div>
      </div>

      <section>
        <div className="wrap">
          <p className="eyebrow">Votre parcours</p>
          <h2>De la première consultation à la naissance</h2>
          <ol className="steps4">
            {STEPS.map((s) => (
              <li key={s.n}>
                <a href={"#/" + s.h}>
                  <span className="num">{s.n}</span>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                  <span className="more">En savoir plus →</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <p className="eyebrow">Domaines d’activité</p>
          <h2>Trois spécialités, un même suivi personnalisé</h2>
          <div className="doms">
            <a className="dom" href="#/procreation/exploration"><ArtIcon n="cells" /><h3>Procréation médicalement assistée</h3><p>Diagnostic, préparation, inséminations, FIV/ICSI et congélation d’ovocytes, d’embryons et de spermatozoïdes.</p><span className="more">Découvrir →</span></a>
            <a className="dom" href="#/gynecologie/chirurgie"><ArtIcon n="scope" /><h3>Gynécologie et chirurgie</h3><p>Colposcopie, cœlioscopie, hystéroscopie, chirurgie vaginale et abdominale, urgences gynécologiques.</p><span className="more">Découvrir →</span></a>
            <a className="dom" href="#/obstetrique/maternite"><ArtIcon n="heart" /><h3>Obstétrique</h3><p>Suivi de grossesse, préparation à l’accouchement et accouchements dans quatre cliniques de Rabat.</p><span className="more">Découvrir →</span></a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap spot-grid">
          <div className="arch"><img src="/doctor.jpg" alt="Dr Youssef Benjelloun" loading="lazy" /></div>
          <div>
            <p className="eyebrow">Votre médecin</p>
            <h2>Dr Youssef Benjelloun</h2>
            <p className="lead">Chirurgien gynécologue et obstétricien, spécialisé dans la préservation de la fertilité et le traitement de la stérilité.</p>
            <Bullets items={["Diplômé inter-universitaire en procréation médicale assistée (FIV, ICSI, IIU)", "Ancien chef de clinique et praticien hospitalier à Lyon", "Diplômé européen de cœlio-chirurgie diagnostique et thérapeutique", "Consulte en français, arabe, anglais et espagnol"]} />
            <div className="cta">
              <a className="btn" href="#/dr-benjelloun">Son parcours</a>
              <a className="btn ghost" href={RDV}>Prendre rendez-vous</a>
            </div>
          </div>
        </div>
      </section>

      <section className="voice">
        <div className="wrap">
          <figure>
            <blockquote><p>Mariée depuis 3 ans, consultait pour infertilité primaire. Après deux inséminations intra-utérines puis une fécondation in vitro, la grossesse se poursuit avec deux fœtus bien portants à 6 mois.</p></blockquote>
            <figcaption>Une patiente, 28 ans</figcaption>
          </figure>
        </div>
      </section>

      <Gallery />

      <section>
        <div className="wrap visit">
          <div className="card">
            <h2>Horaires</h2>
            <Hours />
          </div>
          <div className="card visit-side">
            <h3>Au cabinet</h3>
            <p>32 avenue Tadla, Mabella<br />Rabat</p>
            <div className="cta"><a className="btn" href={MAPS}>Itinéraire</a><a className="btn ghost" href="#/contact">Urgences et contact</a></div>
          </div>
        </div>
      </section>
    </>
  );
}

           <li><b>Société savante</b>Membre titulaire de la Société Royale de Gynécologie Obstétrique</li>
            </ul>
            <a className="btn" href={RDV}>Prendre rendez-vous</a>
          </aside>
          <div>
            <h2 className="first">Parcours</h2>
            <ol className="timeline">
              <li><b>Internat</b><span>2 ans · hôpitaux de Rabat-Salé</span></li>
              <li><b>Résidanat de gynécologie-obstétrique</b><span>6 ans · Rabat</span></li>
              <li><b>Assistant en maternité de niveau 3</b><span>2 ans · Rabat</span></li>
              <li><b>Chef de clinique et praticien hospitalier</b><span>8 ans · Lyon</span></li>
              <li><b>Installation au cabinet</b><span>32 avenue Tadla, Mabella, Rabat</span></li>
            </ol>

            <h2>Qualifications</h2>
            <div className="chips">{QUALIF.map((q) => <div className="chip" key={q}>{q}</div>)}</div>

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
        </div>
      </div>
    </>
  );
}

function Contact({ route }: { route: string }) {
  return (
    <>
      <PageHero route={route} title="Contact et horaires" intro="Prenez rendez-vous en ligne ou contactez le cabinet. Pour une urgence, appelez l’assistante, 24h/24." />
      <div className="wrap page">
        <SubNav route={route} />
        <div className="cards">
          <div className="card"><Icon n="pin" /><h3>Cabinet</h3><p>32 avenue Tadla, Mabella<br />Rabat, CP 10180</p><p><a href={MAPS}>Ouvrir dans Google Maps</a></p></div>
          <div className="card"><Icon n="cal" /><h3>Rendez-vous</h3><p><a href={RDV}>Prendre rendez-vous sur DabaDoc</a></p><p><a href={FB}>Page Facebook</a></p></div>
          <div className="card"><Icon n="mail" /><h3>Écrire au cabinet</h3><p><a href={"mailto:" + MAIL}>{MAIL}</a></p></div>
          <div className="card urgent"><Icon n="phone" /><h3>Urgences</h3><p>Assistante du cabinet, Houda, 24h/24 et 7j/7 :</p><p><a href={"tel:" + TEL}>{TEL_TXT}</a></p></div>
        </div>
        <iframe className="map" title="Plan d’accès au cabinet" loading="lazy" src="https://www.google.com/maps?q=32+Avenue+Tadla+Mabella+Rabat&output=embed" />
        <h2><Icon n="clock" /> Horaires</h2>
        <Hours />
      </div>
    </>
  );
}

function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap">
        <div><h2>Une question ? Un rendez-vous ?</h2><p>Prenez rendez-vous en ligne ou contactez le cabinet.</p></div>
        <div className="cta">
          <a className="btn light" href={RDV}>Prendre rendez-vous</a>
          <a className="btn ghost light" href="#/contact">Nous contacter</a>
        </div>
      </div>
    </section>
  );
}

function Pages({ route }: { route: string }) {
  const [a, b] = route.split("/");
  switch (a) {
    case "dr-benjelloun": return <Doctor route="dr-benjelloun" />;
    case "procreation": return <Procreation tab={b} />;
    case "gynecologie":
      return b === "pathologies"
        ? <Listing route="gynecologie/pathologies" title="Pathologies gynécologiques" intro="Les principales pathologies gynécologiques, expliquées simplement."><Acc items={PATHO} search /></Listing>
        : <Listing route="gynecologie/chirurgie" title="Chirurgie gynécologique" intro={<>Document à télécharger : <a href={CONSENT}>consentement éclairé aux soins</a></>}><Acc items={CHIRURGIE} search /></Listing>;
    case "obstetrique":
      return b === "fiches"
        ? <Listing route="obstetrique/fiches" title="Fiches pratiques maternité" intro="Des réponses claires à vos questions pendant la grossesse et après l’accouchement."><Acc items={FICHES} search /></Listing>
        : <Listing route="obstetrique/maternite" title="Maternité" intro="Un suivi personnalisé de la préconception aux suites de couches."><Acc items={MATERNITE} /></Listing>;
    case "pratique": return <Listing route="pratique/cas-cliniques" title="Cas cliniques" intro="Exemples de parcours de patientes. Les cas sont anonymisés."><Acc items={CAS} open /></Listing>;
    case "contact": return <Contact route="contact" />;
    default: return <Home />;
  }
}

export default function App() {
  const route = useRoute();
  const [open, setOpen] = useState(false);
  const [prog, setProg] = useState(0);
  useReveal(route);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement;
      setProg(h.scrollTop / (h.scrollHeight - h.clientHeight || 1));
    };
    window.addEventListener("scroll", f, { passive: true });
    f();
    return () => window.removeEventListener("scroll", f);
  }, []);
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
        <div className="progress" style={{ transform: "scaleX(" + prog + ")" }} />
      </header>
      <main key={route} className="page-in"><Pages route={route} /></main>
      <CtaBand />
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