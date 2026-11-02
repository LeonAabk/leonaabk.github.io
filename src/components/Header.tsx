import { ArrowUpRight } from 'lucide-react';

export function Header() {
  return (
    <header className="studio-hero">
      <div className="studio-eyebrow">
        <span>Aabak Studio</span>
        <span className="eyebrow-dot" aria-hidden="true" />
        <span>Utviklet av Leon Aabak</span>
      </div>

      <h1 className="studio-headline">
        Kontaktløse NFC-løsninger for bedrifter og egne digitale verktøy.
      </h1>

      <p className="studio-lead">
        Bestill ferdigprogrammerte Google Review NFC-kort direkte i nettbutikken vår, utforsk kommende systemer for serveringssteder, eller bruk mine åpne webprosjekter nedenfor.
      </p>

      <div className="studio-hero-actions">
        <a href="/NfcReview/" className="btn-studio-primary">
          <span>Åpne nettbutikk</span>
          <ArrowUpRight size={16} strokeWidth={2} />
        </a>
        <a href="#prosjekter" className="btn-studio-secondary">
          <span>Private prosjekter</span>
        </a>
        <a href="#kontakt" className="btn-studio-ghost">
          <span>Ta kontakt</span>
        </a>
      </div>
    </header>
  );
}
