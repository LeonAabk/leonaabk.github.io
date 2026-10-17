import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="hero-header">
      <div className="hero-kicker">
        <span>Web-applikasjoner & Verktøy</span>
      </div>
      <h1>Velkommen til mine nettsider</h1>
      <p>Her har jeg samlet mine web-applikasjoner og prosjekter.</p>

      <div className="hero-meta-summary">
        <span>6 aktive prosjekter</span>
        <span aria-hidden="true">·</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
          <Sparkles size={14} style={{ color: 'var(--accent-color)' }} />
          <span>Direkte tilgang</span>
        </span>
        <span aria-hidden="true">·</span>
        <span>Utviklet av Leon Aabak</span>
      </div>
    </header>
  );
}
