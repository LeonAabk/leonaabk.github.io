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
}

export type CategoryFilter = 'Alle' | 'Bedrift & Salg' | 'Verktøy' | 'Hverdag & Utdanning';

export const projects: Project[] = [
  {
    id: 'nfc-review',
    title: 'NfcReview',
    icon: '📈',
    category: 'Bedrift & Salg',
    tagline: 'Webshop for NfcReview cards og Meny kort',
    description: 'Webshop for NfcReview cards og Meny kort. Koblet med MenySync',
    detailedDescription: 'En komplett webshop og integrasjonsløsning for smarte NFC-kort tilpasset restaurant- og servicebransjen. Gjør det lynraskt for gjester å legge igjen anmeldelser via kontaktløs teknologi, sømløst koblet med MenySync.',
    features: ['Kontaktløs NFC-anmeldelse', 'Sømløs MenySync-kobling', 'Kortadministrasjon for butikk & servering'],
    url: '/NfcReview/',
  },
  {
    id: 'smaksync',
    title: 'SmakSync',
    icon: '🔰',
    category: 'Bedrift & Salg',
    tagline: 'Hovedside for MenySync og restaurantadministrasjon',
    description: 'Hovedside for MenySync. Resturantadministrasjon, Kontaktskjema og Produkter',
    detailedDescription: 'Hovedplattformen for serveringssteder som ønsker samlet styring av sine menyer, henvendelser og produktkataloger. Inkluderer moderne administrasjonsgrensesnitt og automatiserte kontaktflyter.',
    features: ['Sanntids menystyring', 'Kontaktskjema & henvendelser', 'Produktkatalog & prisoversikt'],
    url: '/SmakSync/',
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
  },
  {
    id: 'koble',
    title: 'Koble',
    icon: '📲',
    category: 'Hverdag & Samfunn',
    tagline: 'Koble arbeidsgivere til ungdom',
    description: 'Nettside for å koble arbeidsgiver til ungdom. Laget for ungdom, av ungdom',
    detailedDescription: 'En innovativ møteplass som senker terskelen for unge som søker deltidsjobb eller sommerjobb, og gir lokale bedrifter enkel tilgang til motivert ungdomskraft.',
    features: ['Tilpasset ungdom under 18', 'Direkte kontakt med arbeidsgivere', 'Enkel profil og søknadsprosess'],
    url: '/Koble/',
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
  },
];
