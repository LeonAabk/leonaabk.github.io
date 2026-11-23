import { ArrowRight, Briefcase, LayoutGrid } from 'lucide-react';

export function Header() {
  return (
    <header className="studio-hero">
      <div className="studio-eyebrow">
        <span>Aabak Studio</span>
        <span className="eyebrow-dot" aria-hidden="true" />
        <span>Utviklet av Leon Aabak</span>
      </div>

      <h1 className="studio-headline">
        Digitale verktøy for hverdagen — og løsninger for bedrifter.
      </h1>

      <p className="studio-lead">
        Aabak Studio er der jeg lager webapplikasjoner. Her finner du gratis verktøy uten reklame, og produkter for bedrifter som NFC-kort for Google-anmeldelser og digitale menyer.
      </p>

      <div className="hero-paths">
        <a href="#prosjekter" className="hero-path">
          <span className="hero-path-icon" aria-hidden="true">
            <LayoutGrid size={18} strokeWidth={1.8} />
          </span>
          <span className="hero-path-body">
            <span className="hero-path-title">Prosjekter</span>
            <span className="hero-path-text">
              RailSync, Reiseregning, Skolekalkulator og flere gratis verktøy.
            </span>
          </span>
          <ArrowRight size={16} strokeWidth={2} className="hero-path-arrow" aria-hidden="true" />
        </a>

        <a href="#nettbutikk" className="hero-path">
          <span className="hero-path-icon" aria-hidden="true">
            <Briefcase size={18} strokeWidth={1.8} />
          </span>
          <span className="hero-path-body">
            <span className="hero-path-title">For bedrifter</span>
            <span className="hero-path-text">
              NFC-kort for Google-anmeldelser, SmakSync og ReviewRedirect.
            </span>
          </span>
          <ArrowRight size={16} strokeWidth={2} className="hero-path-arrow" aria-hidden="true" />
        </a>
      </div>

      <a href="#kontakt" className="hero-contact-link">
        Spørsmål eller samarbeid? Ta kontakt
      </a>
    </header>
  );
}
