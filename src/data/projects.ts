export type IconName =
  | 'credit-card'
  | 'utensils'
  | 'routing'
  | 'plane'
  | 'calculator'
  | 'book-open'
  | 'train'
  | 'briefcase';

export type PrivateCategory = 'Verktøy' | 'Skole & Utdanning' | 'Hverdag & Fritid';

export interface Project {
  id: string;
  title: string;
  iconName: IconName;
  section: 'business' | 'private';
  category: 'Nettbutikk' | 'Bedriftsløsning' | PrivateCategory;
  tagline: string;
  description: string;
  detailedDescription: string;
  features: string[];
  url: string;
  ctaLabel?: string;
  isActive: boolean;
  statusBadge?: string;
  statusTone?: 'available' | 'upcoming' | 'neutral' | 'inactive';
}

export type CategoryFilter = 'Alle' | 'Verktøy & Skole' | 'Hverdag & Fritid';

export const businessProjects: Project[] = [
  {
    id: 'nfc-review',
    title: 'NFC Review',
    iconName: 'credit-card',
    section: 'business',
    category: 'Nettbutikk',
    tagline: 'Kontaktløse Google Review NFC-kort med 3M-bakside',
    description:
      'Flate, ferdigprogrammerte NFC-kort som festes rett ved kassen eller på disken. Kunden holder mobilen inntil kortet og kommer rett til bedriftens anmeldelsesside på Google.',
    detailedDescription:
      'Nettbutikk drevet som registrert ungdomsbedrift (NFC Review UB). Kortene leveres ferdig programmert mot bedriftens Google-profil, har ripebestandig overflate og kraftig 3M-monteringsfilm på baksiden. Engangskjøp uten abonnement eller månedlige gebyrer.',
    features: [
      'Flate NFC-kort med 3M-feste på baksiden',
      '399 kr (1 stk) · 990 kr (3-pk m/ fri frakt) · 1 490 kr (5-pk m/ fri frakt)',
      'Alle priser inkl. mva. og 0 kr i månedsgebyr',
    ],
    url: '/NfcReview/',
    ctaLabel: 'Åpne nettbutikken',
    isActive: true,
    statusBadge: 'Tilgjengelig nå · NFC Review UB',
    statusTone: 'available',
  },
  {
    id: 'smaksync',
    title: 'SmakSync',
    iconName: 'utensils',
    section: 'business',
    category: 'Bedriftsløsning',
    tagline: 'Digitale menyer og NFC-bordkort for serveringssteder',
    description:
      'Kommende plattform for restauranter og kafeer med sanntids menystyring, allergenfiltrering og kontaktløse bordkort. Interaktiv demo og interesseliste er åpen.',
    detailedDescription:
      'SmakSync bygges for norske spisesteder som ønsker å oppdatere priser, utsolgte retter og allergener på sekunder uten nye trykkekostnader. Løsningen lanseres senere for bedrifter, men hele mobil- og kontrollpaneldemoen kan testes allerede nå.',
    features: [
      'Interaktiv live-demo for gjestemeny og kontrollpanel',
      'Støtte for 14 lovpålagte allergener og flere språk',
      'Lanseres senere for bedrifter (uforpliktende påmelding åpen)',
    ],
    url: '/SmakSync/',
    ctaLabel: 'Se live-demo',
    isActive: true,
    statusBadge: 'Kommer senere · Demo åpen',
    statusTone: 'upcoming',
  },
  {
    id: 'review-redirect',
    title: 'ReviewRedirect',
    iconName: 'routing',
    section: 'business',
    category: 'Bedriftsløsning',
    tagline: 'Skybasert ruting for NFC-kort og QR-lenker',
    description:
      'Rask viderekoblingstjeneste som kobler fysiske NFC-brikker mot riktig Google-profil eller landingsside uten å måtte omkode selve kortet.',
    detailedDescription:
      'Dedikert rutingstjeneste brukt i Aabak Studio-økosystemet for å sende kunder direkte videre til Google Reviews eller tilknyttede bedriftssider med minimal lastetid.',
    features: [
      'Lynrask omdirigering fra fysisk NFC-brikke til målside',
      'Sentral oppdatering av lenkemål ved behov',
      'Bygget for driftssikker bruk i butikk og servering',
    ],
    url: '/ReviewRedirect/',
    ctaLabel: 'Åpne tjeneste',
    isActive: true,
    statusBadge: 'Aktiv tjeneste',
    statusTone: 'neutral',
  },
];

export const privateProjects: Project[] = [
  {
    id: 'reiseregning',
    title: 'Reiseregning',
    iconName: 'plane',
    section: 'private',
    category: 'Verktøy',
    tagline: 'Beregning av reiseregninger etter statens satser',
    description:
      'Fyll ut og beregn kjøregodtgjørelse, diett og utlegg raskt med utskriftsklar A4-rapport.',
    detailedDescription:
      'Praktisk verktøy som forenkler utfylling av reiseregninger med oppdaterte satser for kilometergodtgjørelse, diett og enkeltutlegg, ferdig oppsatt for eksport og utskrift.',
    features: [
      'Oppdaterte satser for kjøring og diett',
      'Automatisk summering av utlegg',
      'Utskriftsvennlig oppsett på én A4-side',
    ],
    url: '/reiseregning/',
    isActive: true,
  },
  {
    id: 'skolekalkulator',
    title: 'Skolekalkulator',
    iconName: 'calculator',
    section: 'private',
    category: 'Skole & Utdanning',
    tagline: 'Oversiktlig kalkulator for skole og hverdagsmatte',
    description:
      'Verktøy for raske utregninger, formler og beregninger tilpasset skolearbeid.',
    detailedDescription:
      'Utviklet for elever som trenger raske og oversiktlige beregninger i nettleseren, med formelstøtte, regnehistorikk og tastaturnavigasjon uten forstyrrende elementer.',
    features: [
      'Grunnleggende og utvidede regneoperasjoner',
      'Oversiktlig beregningshistorikk',
      'Rask bruk med tastatur',
    ],
    url: '/KomplettKalk/',
    isActive: true,
  },
  {
    id: 'oppskriftslista',
    title: 'Oppskriftslista',
    iconName: 'book-open',
    section: 'private',
    category: 'Hverdag & Fritid',
    tagline: 'Digital samling av egne matoppskrifter',
    description:
      'Samle, kategoriser og søk i egne oppskrifter på ett sted – helt uten reklame.',
    detailedDescription:
      'En ryddig digital kokebok laget for å ha favorittoppskrifter lett tilgjengelig på mobilen eller PC-en under matlaging, med ingrediensoversikt og porsjonsjustering.',
    features: [
      'Reklamefri lesevisning på kjøkkenet',
      'Ingrediensliste med porsjonsjustering',
      'Enkel kategorisering og raskt søk',
    ],
    url: '/OppskriftsLista/',
    isActive: true,
  },
  {
    id: 'railsync',
    title: 'RailSync',
    iconName: 'train',
    section: 'private',
    category: 'Hverdag & Fritid',
    tagline: 'Togoversikt, reiseplanlegging og ruter',
    description:
      'Webapplikasjon for oversikt over togruter, etapper og reiseplanlegging.',
    detailedDescription:
      'Et eget prosjekt for å samle reiseetapper, togforbindelser og ruteoversikt i et oversiktlig grensesnitt.',
    features: [
      'Strukturert oversikt over etapper og tider',
      'Rask navigasjon mellom reisestrekninger',
      'Tilpasset både mobil og PC',
    ],
    url: '/RailSync/',
    isActive: true,
  },
  {
    id: 'koble',
    title: 'Koble',
    iconName: 'briefcase',
    section: 'private',
    category: 'Hverdag & Fritid',
    tagline: 'Plattform for å koble ungdom med småjobber',
    description:
      'Konsept og nettside for å gjøre det enklere for ungdom å finne deltids- og småjobber lokalt.',
    detailedDescription:
      'Møteplass laget for å senke terskelen mellom ungdom som ønsker arbeidserfaring og lokale oppdragsgivere. Prosjektet er satt på pause og er ikke aktivt for øyeblikket.',
    features: [
      'Tilpasset ungdom under 18 år',
      'Enkel kontakt mellom oppdragsgiver og arbeidssøker',
      'Oversiktlig oppdragsvisning',
    ],
    url: '/Koble/',
    isActive: false,
    statusBadge: 'Satt på pause',
    statusTone: 'inactive',
  },
];

export const projects: Project[] = [...businessProjects, ...privateProjects];
