export interface Project {
  id: string;
  title: string;
  icon: string;
  category: 'Bedrift & Salg' | 'Verktøy' | 'Utdanning' | 'Hverdag & Samfunn';
  tagline: string;
  description: string;
  detailedDescription: string;
  features: string[];
  url: string;
  isActive: boolean;
  statusNote?: string;
}

export type CategoryFilter = 'Alle' | 'Bedrift & Salg' | 'Verktøy' | 'Hverdag & Utdanning';

export const projects: Project[] = [
  {
    id: 'nfc-review',
    title: 'NfcReview',
    icon: '📈',
    category: 'Bedrift & Salg',
    tagline: 'Nettbutikk for kontaktløse Google Review NFC-kort (med 3M-feste)',
    description: 'Kontaktløse Google Review NFC-kort med 3M-bakside (fra 399 kr inkl. mva.). Menykort kommer senere.',
    detailedDescription: 'Vår nettbutikk (NFC Review UB) for flate, kontaktløse Google Review NFC-kort med kraftig 3M-feste. Gjør det lynraskt for kunder å legge igjen 5-stjerners Google-anmeldelser uten app eller månedlige gebyrer. Menykort og digitale menyer lanseres senere for bedrifter via SmakSync.',
    features: ['Flate Google Review NFC-kort m/ 3M-bakside', 'Priser inkl. mva. og null månedsgebyr', 'Ferdig programmert av vår ungdomsbedrift (UB)'],
    url: '/NfcReview/',
    isActive: true,
  },
  {
    id: 'review-redirect',
    title: 'ReviewRedirect',
    icon: '⭐',
    category: 'Bedrift & Salg',
    tagline: 'Smart viderekobling for kundeanmeldelser og NFC',
    description: 'Viderekobling for kundeanmeldelser. Ruter kunder direkte til anmeldelsessiden via NFC eller QR.',
    detailedDescription: 'En dedikert omdirigeringstjeneste designet for NFC-kort og QR-koder. Sørger for at kunder lynraskt sendes videre til Google Reviews, Trustpilot eller andre anmeldelsesplattformer for enkel og effektiv innsamling av omtaler.',
    features: ['Optimalisert for NFC-brikker og QR-koder', 'Direkte ruting til Google Reviews og plattformer', 'Lynrask lastetid og enkel ruting'],
    url: '/ReviewRedirect/',
    isActive: true,
  },
  {
    id: 'smaksync',
    title: 'SmakSync',
    icon: '🔰',
    category: 'Bedrift & Salg',
    tagline: 'Digitale menyer og NFC-menykort for bedrifter (Kommer senere · Demo åpen)',
    description: 'Kommende plattform for digitale menyer og NFC-menykort for bedrifter. Test live-demo og meld interesse.',
    detailedDescription: 'Kommende B2B-plattform for restauranter og kafeer som ønsker sanntids menystyring, allergenfiltrering og kontaktløse NFC-bordkort. Tilbudet lanseres senere for bedrifter – interaktiv live-demo og uforpliktende interesseliste er åpen allerede nå.',
    features: ['Interaktiv live-demo åpen nå', 'Sanntids menystyring & 14 allergener', 'Kommer senere for bedrifter (meld interesse)'],
    url: '/SmakSync/',
    isActive: true,
  },
  {
    id: 'railsync',
    title: 'RailSync',
    icon: '🚆',
    category: 'Bedrift & Salg',
    tagline: 'Jernbanestyring, avviksoppfølging og logistikk',
    description: 'System for jernbanestyring, togavvik og logistikk. En del av Sync-økosystemet',
    detailedDescription: 'En effektiv løsning for oversikt over jernbanetrafikk, avviksoppfølging og logistikkstyring. RailSync forenkler koordinering og gir sanntidsoversikt for operatører og brukere.',
    features: ['Sanntids jernbaneoversikt', 'Avvikshandtering og logistikk', 'Sømløs Sync-integrasjon'],
    url: '/RailSync/',
    isActive: true,
  },
  {
    id: 'reiseregning',
    title: 'Reiseregning',
    icon: '✈️',
    category: 'Verktøy',
    tagline: 'Beregning av reiseregninger etter gjeldende satser',
    description: 'Fyll ut og beregn reiseregninger kjapt og enkelt etter gjeldende satser.',
    detailedDescription: 'Et intuitivt verktøy som tar bort hodepinen fra diett, kilometergodtgjørelse og utlegg. Basert på oppdaterte statlige satser med automatisk summering og eksportklart oppsett.',
    features: ['Statens satser for diett & km', 'Automatisk kalkulering', 'Brukervennlig og rask registrering'],
    url: '/reiseregning/',
    isActive: true,
  },
  {
    id: 'skolekalkulator',
    title: 'Skolekalkulator',
    icon: '🧮',
    category: 'Utdanning',
    tagline: 'Omfattende kalkulator for matte og beregninger',
    description: 'Et godt verktøy for å regne ut alt av av matte, og støtter på andre aktuelle beregninger.',
    detailedDescription: 'Utviklet for elever og studenter som trenger raske og nøyaktige beregninger. Tilbyr både enkle regneoperasjoner, formler og hverdagsberegninger i et ryddig grensesnitt.',
    features: ['Grunnleggende & avanserte formler', 'Formelhistorikk', 'Rask tastaturnavigasjon'],
    url: '/KomplettKalk/',
    isActive: true,
  },
  {
    id: 'koble',
    title: 'Koble',
    icon: '📲',
    category: 'Hverdag & Samfunn',
    tagline: 'Koble arbeidsgivere til ungdom',
    description: 'Nettside for å koble arbeidsgiver til ungdom. Laget for ungdom, av ungdom',
    detailedDescription: 'En innovativ møteplass som senker terskelen for unge som søker deltidsjobb eller sommerjobb, og gir lokale bedrifter enkel tilgang til motivert ungdomskraft. Prosjektet er for øyeblikket ikke aktivt.',
    features: ['Tilpasset ungdom under 18', 'Direkte kontakt med arbeidsgivere', 'Enkel profil og søknadsprosess'],
    url: '/Koble/',
    isActive: false,
    statusNote: 'Ikke aktiv',
  },
  {
    id: 'oppskriftslista',
    title: 'Oppskriftslista',
    icon: '🍽️',
    category: 'Hverdag & Samfunn',
    tagline: 'Samle alle oppskriftene dine på ett sted',
    description: 'Nettside for å samle alle oppskriftene dine enkelt på ett sted',
    detailedDescription: 'Den digitale kokeboken du alltid har savnet. Lagre, organiser og søk gjennom dine personlige favorittoppskrifter uten reklame eller forstyrrende elementer.',
    features: ['Ren og reklamefri visning', 'Ingrediensliste og porsjonsjustering', 'Rask kategorisering og søk'],
    url: '/OppskriftsLista/',
    isActive: true,
  },
];
