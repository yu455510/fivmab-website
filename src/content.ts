export type Item = { t: string; d: string };
export type BulletItem = string | { text: string; links?: { label: string; href: string }[] };

export const RDV = "https://www.dabadoc.com/medecins/youssef-benjelloun-gynecologue-rabat";
export const FB = "https://www.facebook.com/Gynecologue.Fertologue.Obstetricien";
export const MAIL = "contact@fivmab.com";
export const TEL = "+212648800227";
export const TEL_TXT = "06 48 80 02 27";
export const TEL_CAB = "+212550106710";
export const TEL_CAB_TXT = "05 50 10 67 10";
export const MAPS = "https://www.google.com/maps/search/?api=1&query=32+Avenue+Tadla+Mabella+Rabat";
// Documents to download. They are on the old site for now.
// Before moving fivmab.com to the new site: download them, put them in public/docs/ and change DOCS to "/docs/".
export const DOCS = "https://www.fivmab.com/DocsFIVMAB/";
export const CONSENT = DOCS + "consentement.docx";

export const EXPLO = [
  "Colposcopie, échographie endovaginale (2D/3D, 4D de dernière génération, 5D), Doppler pulsé/couleur",
  "Hystérosalpingographie, hystérosonographie, hystéroscopie",
  "Spermogramme, spermocytogramme, MAR test, test de migration-survie, tests de fragmentation de l’ADN des spermatozoïdes, tests chromosomiques et génétiques",
  "Bilan hormonal",
  "Sérologies du couple et bilan biologique pré-opératoire",
  "Cœlioscopie avec épreuve de perméabilité tubaire",
];
export const PRETRAIT = [
  "Prise en charge psychologique, diététique et restauration d’une bonne hygiène de vie",
  "Antibiothérapie, vitaminothérapie et thérapies anti-inflammatoires",
  "Salpingectomies pré-FIV",
  "Reperméabilisation des trompes de Fallope",
];
export const TECH: BulletItem[] = [
  "Cycles stimulés avec rapports spontanés",
  { text: "Insémination artificielle intra-utérine avec sperme du conjoint", links: [{ label: "Télécharger : convention et consentement – IIU", href: DOCS + "IIU.docx" }] },
  { text: "Fécondation in vitro : FIVETTE et injection intracytoplasmique de spermatozoïdes (ICSI)", links: [{ label: "Télécharger : convention et consentement – FIV", href: DOCS + "Consentement-FIV.docx" }] },
  "Extraction de spermatozoïdes des testicules (TESE)",
  { text: "Congélation de spermatozoïdes", links: [{ label: "Télécharger : convention et consentement – cryopréservation de sperme", href: DOCS + "Preservation_des_gametes_males.docx" }] },
  { text: "Congélation d’ovocytes", links: [{ label: "Télécharger : convention et consentement – cryopréservation d’ovocytes", href: DOCS + "Preservation_de_fertilite_feminine.docx" }] },
  { text: "Congélation et transfert des embryons", links: [{ label: "Télécharger : convention sur le nombre d’embryons à transférer", href: DOCS + "Transfert_dembryon_congele.docx" }] },
];
const ECHO_BASE = "https://fivmab.com/index.php/assistance-a-la-procreation/echographies/";
export const ECHO: BulletItem[] = [
  "Obstétricale 2D : morphologique du 1er et 2e trimestre, estimation pondérale et croissance du 3e trimestre",
  "Endovaginale / endorectale",
  { text: "4D : gynécologique et obstétricale, avec option scan 3DXI, compte et mesure automatique des follicules ovariens", links: [{ label: "Échographie obstétricale 4D", href: ECHO_BASE + "echo-obstetricale-4d" }, { label: "Comptage des follicules ovariens", href: ECHO_BASE + "comptage-des-follicules-ovariens" }] },
  { text: "5D : enregistrement et restitution des plans de coupe, calcul automatique des principales mesures de l’échographie morphologique (ex. clarté nucale)", links: [{ label: "Mesure de la clarté nucale", href: ECHO_BASE + "mesure-de-la-clarete-nucale" }] },
  { text: "HD-Live : l’imagerie fœtale la plus proche de la réalité au premier et au deuxième trimestre", links: [{ label: "Échographie HD-Live", href: ECHO_BASE + "echo-obstetricale-hd-live" }] },
  "Doppler pulsé couleur",
  "Mammaire 2D - 3D avec élastographie",
];

export const CHIRURGIE: Item[] = [
  { t: "Chirurgie de l’infertilité", d: "Près de la moitié des infertilités féminines sont liées à une stérilité tubaire, c’est-à-dire à un défaut de perméabilité des trompes." },
  { t: "Aspiration curetage", d: "Pratiquée avant 14 semaines en cas d’interruption médicale de grossesse ou de grossesse arrêtée (fausse couche) en l’absence d’expulsion spontanée complète." },
  { t: "Césarienne", d: "Intervention chirurgicale qui permet d’extraire le fœtus par voie abdominale, par incision de l’utérus." },
  { t: "Chirurgie de l’hymen", d: "L’hymen est une petite membrane qui ferme partiellement l’orifice vaginal. L’obturation n’est que partielle pour permettre l’écoulement des règles. Il se rompt en principe lors du premier rapport sexuel." },
  { t: "Chirurgie du prolapsus", d: "Le prolapsus génital ou descente d’organes est une pathologie fonctionnelle. Son traitement doit tenir compte de la gêne occasionnée et de la fonctionnalité des organes." },
  { t: "Cœlioscopie", d: "Appelée aussi laparoscopie, c’est une voie d’abord chirurgicale mini-invasive de diagnostic et d’intervention sur la cavité abdominale." },
  { t: "Colposcopie", d: "Examen du col de l’utérus et du vagin réalisé à l’aide d’un appareil optique grossissant, le colposcope." },
  { t: "Conisation", d: "Ablation chirurgicale d’une portion du col utérin, par les voies naturelles, sans cicatrice visible." },
  { t: "Cure d’incontinence urinaire (T.O.T.)", d: "Elle consiste à rétablir un fonctionnement normal de la vessie." },
  { t: "Essure", d: "Technique de stérilisation tubaire réalisée sous hystéroscopie." },
  { t: "Hystérectomie", d: "Ablation de l’utérus, sous anesthésie générale ou loco-régionale." },
  { t: "Hystéroscopie", d: "Endoscopie qui consiste à explorer l’intérieur de l’utérus à l’aide d’une caméra introduite par les voies naturelles : l’hystéroscope." },
  { t: "Information et consentement avant une intervention", d: "Vous avez le droit, en tant que patiente, d’être informée sur les modalités chirurgicales recommandées dans votre cas." },
  { t: "La chirurgie ambulatoire", d: "De nombreuses interventions peuvent être réalisées sous anesthésie de courte durée. La patiente quitte la clinique quelques heures après son intervention, dans des conditions de grande sécurité." },
  { t: "Myomectomie", d: "Ablation du fibrome. Elle conserve l’utérus et offre donc une possibilité de grossesse : c’est l’alternative de choix chez les patientes en âge de procréer." },
  { t: "Nymphoplastie de réduction", d: "Intervention chirurgicale simple qui permet de réduire le volume des petites lèvres." },
  { t: "Stérilet", d: "Le stérilet ou dispositif intra-utérin est la deuxième méthode de contraception en France, avec 25 % d’utilisatrices en cas de souhait contraceptif." },
  { t: "Stérilisation tubaire", d: "La ligature des trompes est un moyen de contraception définitif et irréversible, réalisé après un délai de réflexion de 4 mois." },
  { t: "Tumorectomie", d: "Ablation chirurgicale d’un nodule du sein." },
];

export const PATHO: Item[] = [
  { t: "Adénomyose", d: "Maladie inflammatoire de l’utérus qui se manifeste principalement entre 40 et 50 ans chez les patientes qui n’ont pas eu d’enfant." },
  { t: "Bartholinite aiguë", d: "Les glandes de Bartholin, situées à l’entrée du vagin, assurent la lubrification vaginale pendant les rapports." },
  { t: "Cancer de l’endomètre", d: "Cancer du corps de l’utérus, développé à partir de la muqueuse qui tapisse l’intérieur de la cavité utérine." },
  { t: "Condylomes périnéaux", d: "Verrues génitales (« crêtes de coq ») résultant d’une infection à papillomavirus (HPV 6 et 11)." },
  { t: "Contraception d’urgence", d: "Contraception d’exception qui permet de réduire la possibilité de grossesse non désirée." },
  { t: "Descente d’organes et prolapsus génital", d: "Conséquence de la descente des organes pelviens à des degrés divers, c’est l’anomalie la plus fréquente des troubles de la statique pelvienne en gynécologie." },
  { t: "Dyspareunies", d: "Douleurs survenant lors des rapports sexuels." },
  { t: "Endométriose", d: "Prolifération de cellules endométriales (paroi interne de l’utérus) en dehors de l’utérus." },
  { t: "Fausse couche", d: "Interruption de la grossesse ou expulsion du fœtus avant le terme de viabilité, le plus souvent lors du premier trimestre." },
  { t: "Fibrome utérin", d: "Tumeur bénigne développée à partir de la paroi musculaire de l’utérus, hormonodépendante et très fréquente chez la femme en âge de procréer." },
  { t: "Grossesse extra-utérine", d: "Implantation et évolution de la grossesse en dehors de la cavité utérine, le plus souvent dans une trompe. Elle représente environ 1 % des grossesses." },
  { t: "Hémorragies génitales", d: "Un des motifs de consultation les plus fréquents en gynécologie." },
  { t: "Hystérosalpingographie", d: "Examen radiographique de l’utérus et des trompes utilisant un produit de contraste." },
  { t: "Incontinence urinaire à l’effort", d: "Fuites urinaires incontrôlées lors d’un effort, d’un éternuement ou d’une toux. On estime que 10 % des femmes en souffrent." },
  { t: "Kyste de l’ovaire", d: "Tumeur de l’ovaire à contenu liquidien." },
  { t: "Lésions du col utérin", d: "Les lésions dysplasiques peuvent apparaître à la jonction entre l’intérieur et l’extérieur du col, tapissés par des cellules différentes." },
  { t: "Polype utérin", d: "Excroissance qui se développe aux dépens de la muqueuse utérine." },
  { t: "Salpingite", d: "Infection des trompes qui touche surtout les jeunes femmes et peut être à l’origine d’une infertilité." },
  { t: "Synéchie utérine", d: "Accolement fibreux des deux faces de l’intérieur de l’utérus, pouvant causer une infertilité ou des fausses couches à répétition si elle n’est pas traitée." },
  { t: "Urgences gynécologiques", d: "Pour toute urgence gynécologique, contactez l’assistante du cabinet : un rendez-vous vous sera donné dans la journée dans la mesure du possible." },
];

export const MATERNITE: Item[] = [
  { t: "Consultation préconceptionnelle", d: "Elle informe la femme qui souhaite être enceinte de son état de santé actuel et des complications maternelles et fœtales possibles, et propose des mesures pour les éviter ou les minimiser." },
  { t: "Première consultation prénatale", d: "Réalisée idéalement avant 2 mois et demi de grossesse, elle permet de confirmer la grossesse et d’en dater le début." },
  { t: "Déroulement du suivi de grossesse", d: "Après la première consultation, le suivi est planifié. En l’absence d’anomalie, les consultations prénatales sont mensuelles." },
  { t: "Formalités administratives", d: "Le formulaire de déclaration de grossesse conditionne l’ouverture des droits aux prestations familiales et à la prise en charge des soins liés à la grossesse." },
  { t: "Suivi de fin de grossesse", d: "La fin de grossesse peut être marquée par des complications maternelles ou fœtales : la surveillance est intensifiée et rapprochée à la fin du neuvième mois." },
  { t: "Accouchement", d: "Il survient habituellement à la fin du neuvième mois. Il est dit prématuré avant la fin du huitième mois et post-terme après 9 mois." },
  { t: "Suites de couche", d: "Période qui suit l’accouchement." },
  { t: "Consultation postnatale", d: "Elle a lieu dans les 8 semaines qui suivent l’accouchement." },
];

export const FICHES: Item[] = [
  { t: "À la sortie de la maternité", d: "Saignements, retour de couches, relations sexuelles, contraception… les conseils pour les jeunes mamans." },
  { t: "Accouchement prématuré", d: "Accouchement survenant avant 37 semaines d’aménorrhée, soit 8 mois de grossesse." },
  { t: "Allaitement", d: "Après l’accouchement, l’allaitement s’installe en deux à trois jours : c’est la montée laiteuse." },
  { t: "Amniocentèse", d: "Ponction de liquide amniotique réalisée sous contrôle échographique à partir de 16 semaines d’aménorrhée." },
  { t: "Analgésie péridurale", d: "Pratiquée par un médecin anesthésiste-réanimateur, c’est la méthode la plus efficace pour supprimer ou atténuer les douleurs de l’accouchement." },
  { t: "Anomalies du liquide amniotique", d: "Le liquide amniotique est constitué d’eau, de sels minéraux, de lipides, de glucides, d’enzymes et d’hormones. Son volume à terme varie de 500 à 1000 ml." },
  { t: "Bassin osseux", d: "Il regroupe 4 os : 2 ailes iliaques réunies en avant pour former le pubis, rattachées en arrière au sacrum, et le coccyx." },
  { t: "Bilans biologiques", d: "Durant la grossesse, de nombreuses prises de sang et analyses d’urines seront prescrites." },
  { t: "Biopsie de trophoblaste", d: "Prélèvement d’un très petit fragment de tissu qui deviendra le placenta à la fin du premier trimestre." },
  { t: "Cerclage", d: "Intervention qui consiste à faufiler une bandelette dans l’épaisseur du col de l’utérus pour le maintenir fermé jusqu’à la fin du 8e mois." },
  { t: "Cholestase gravidique", d: "Une patiente atteinte de cholestase gravidique doit être considérée comme ayant une grossesse à risque." },
  { t: "Déclenchement du travail", d: "Il consiste à provoquer des contractions de l’utérus pour démarrer le travail et aboutir à l’accouchement." },
  { t: "Dépistage de la trisomie 21", d: "La trisomie 21 se manifeste par des anomalies physiques variables et un retard mental constant. L’échographie réalisée pendant la grossesse peut être normale." },
  { t: "Diabète et grossesse", d: "Qu’il soit préexistant ou gestationnel, le diabète doit être pris en charge rigoureusement du fait des risques de complications maternelles et fœtales potentiellement graves." },
  { t: "Échographie", d: "Technique d’imagerie qui permet d’obtenir des images du fœtus grâce à des ultrasons émis par une sonde." },
  { t: "Épisiotomie", d: "Incision de la région périnéale réalisée pour prévenir les déchirures liées à l’expulsion de l’enfant et préserver la statique pelvienne." },
  { t: "Forceps", d: "Utilisés par le gynécologue, ils permettent d’accompagner les efforts de poussée." },
  { t: "Grossesse après 40 ans", d: "En l’absence de pathologie contre-indiquant la grossesse, il n’y a aucune raison de ne pas envisager une grossesse après 40 ans." },
  { t: "Grossesse et rhésus sanguin", d: "Si vous êtes de rhésus négatif, votre grossesse nécessite un suivi particulier. Ayez toujours votre carte de groupe sanguin et informez chaque médecin." },
  { t: "Grossesse gémellaire", d: "Elle représente 1,2 % des grossesses et comporte des risques accrus tant sur le plan maternel que fœtal." },
  { t: "Listériose et grossesse", d: "Infection fréquente (1 grossesse sur 250), d’origine alimentaire : fromages au lait cru, poissons fumés, glaces…" },
  { t: "Monitoring", d: "Enregistrement du rythme cardiaque fœtal et des contractions utérines pendant toute la durée du travail." },
  { t: "Partogramme", d: "Selon l’OMS, enregistrement graphique des progrès du travail et des principales données sur l’état de la mère et du fœtus." },
  { t: "Placenta praevia", d: "Localisation anormalement basse du placenta, pouvant provoquer des saignements au troisième trimestre." },
  { t: "Prééclampsie et hypertension artérielle", d: "L’hypertension se définit par une pression systolique supérieure à 140 mmHg ou diastolique supérieure à 90 mmHg, lors de deux examens successifs au repos." },
  { t: "Présentation du siège", d: "Elle représente 3 à 4 % des accouchements." },
  { t: "Prévention de l’infection materno-fœtale", d: "Infection bactérienne du nouveau-né résultant d’une transmission de la mère, qui s’exprime dans les premières minutes ou les premiers jours de vie." },
  { t: "Rubéole et grossesse", d: "La rubéole est une infection virale dangereuse chez la femme enceinte." },
  { t: "Tabac et grossesse", d: "Près de 20 % des femmes enceintes continuent de fumer pendant tout ou partie de leur grossesse." },
  { t: "Toxoplasmose et grossesse", d: "Infection liée à un parasite appelé Toxoplasma gondii." },
  { t: "Trisomie 21", d: "Chaque être humain possède 23 paires de chromosomes, dont 2 chromosomes sexuels (46 XY chez l’homme, 46 XX chez la femme)." },
  { t: "Version par manœuvre externe", d: "Procédure qui a pour objectif de retourner le fœtus en siège pour le mettre la tête en bas." },
];

export const CAS: Item[] = [
  {
    t: "Cas clinique 1 – Infertilité primaire et insuffisance ovarienne précoce",
    d: "Patiente de 28 ans, mariée depuis 3 ans, consultant pour infertilité primaire et absence de règles depuis 1 an. Le bilan hormonal très perturbé était en faveur d’une insuffisance ovarienne précoce (AMH à 0,78 µg/l). Le bilan d’infertilité a été complété par une échographie endovaginale 2D et 3D, une analyse de sperme et une radiographie des trompes. Les résultats étaient normaux en dehors d’un utérus hypotrophique de 21 ml, d’ovaires atrophiés de 1,5 et 2,2 ml et d’un compte folliculaire égal à 9. Un programme d’assistance médicale à la procréation a été démarré : 2 inséminations intra-utérines avec sperme du conjoint, suivies d’une fécondation in vitro. Après l’échec de la première insémination, une grossesse gémellaire a été découverte. Elle se poursuit avec deux fœtus bien portants à 6 mois.",
  },
  {
    t: "Cas clinique 2 – Fibrome intracavitaire et grossesse à haut risque",
    d: "Patiente de 26 ans, mariée depuis 5 mois, consultant pour douleurs pelviennes expulsives et saignement. L’échographie endovaginale 2D et 4D et sus-pubienne a montré une masse intra-utérine irrégulière avec un utérus globuleux de 450 ml. Une hystéroscopie avec mini-laparotomie a permis d’extraire un fibrome intracavitaire en nécrobiose de 7 x 3 x 2,5 cm. La patiente est revenue enceinte 9 mois après, avec un placenta localisé au niveau de la cicatrice de myomectomie. Une césarienne à haut risque a été pratiquée, en raison de la localisation sous-cicatricielle du placenta et d’une thrombopénie idiopathique de la grossesse (plaquettes à 10 000) traitée par corticothérapie. Elle a permis d’extraire un garçon bien portant de 3000 g.",
  },
];

export const QUALIF = [
  "Chirurgien gynécologue et obstétricien",
  "Ancien praticien attaché au Centre hospitalier provincial de Khouribga puis de Rabat",
  "Ancien interne des hôpitaux de Rabat-Salé",
  "Diplôme d’études spécialisées en gynécologie-obstétrique",
  "Diplômé inter-universitaire de colposcopie",
  "Diplômé inter-universitaire de chirurgie vaginale",
  "Diplômé inter-universitaire d’hystéroscopie",
  "Diplômé inter-universitaire en procréation médicale assistée : FIV, ICSI, IIU",
  "Diplômé européen inter-universitaire de cœlio-chirurgie diagnostique et thérapeutique",
];

// CABINET PHOTOS: upload each photo to the "public" folder, then list it here.
// Example: { src: "/cabinet-1.jpg", alt: "La salle de consultation" },
export const PHOTOS: { src: string; alt: string }[] = [
  { src: "/cabinet-1.jpg", alt: "La salle d’attente du cabinet : fauteuils, canapé et œuvres d’art" },
  { src: "/cabinet-2.jpg", alt: "La salle d’attente, lumineuse et calme" },
  { src: "/cabinet-3.jpg", alt: "L’accueil et le couloir du cabinet" },
  { src: "/cabinet-4.jpg", alt: "La plaque à l’entrée : appartement 17, 4e étage" },
];

export type NewsItem = { id: string; tag: string; title: string; summary: string; date?: string; image?: string };

// NEWS: add new items at the TOP of this list (date and image are optional).
export const NEWS: NewsItem[] = [
  { id: "prep", tag: "Maternité", title: "Préparation à l’accouchement", summary: "Des séances avec les sages-femmes Soukaina et Basma, à Mabella, du lundi au vendredi de 16h00 à 18h00." },
  { id: "echo", tag: "Échographie", title: "Échographie 4D, 5D et HD-Live", summary: "Imagerie fœtale haute définition au premier et au deuxième trimestre, avec calcul automatique de la clarté nucale." },
  { id: "fertilite", tag: "Fertilité", title: "Préserver votre fertilité", summary: "Congélation d’ovocytes, d’embryons et de spermatozoïdes : parlez-en lors de votre consultation." },
];

// VIDEOS: the first video appears on the homepage; all appear on the gallery page.
export const VIDEOS: { id: string; title: string; titleAr?: string; text: string }[] = [
  {
    id: "tUTbKQNopZE",
    title: "La FIV expliquée par le Dr Benjelloun",
    titleAr: "أطفال الأنابيب : كيف يمكننا تفادي فشل العملية وما هي نسبة نجاحها؟",
    text: "Extrait du programme « Votre santé » de DabaDoc (2019), en arabe : le Dr Youssef Benjelloun et le Dr Adil Sadiq répondent aux questions sur la fécondation in vitro.",
  },
];