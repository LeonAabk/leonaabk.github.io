import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <p>&copy; 2026 Laget av Leon Aabak.</p>
      <div className="footer-links">
        <a href="#prosjekter" className="footer-link">Prosjekter</a>
        <span aria-hidden="true">·</span>
        <a href="#vipps" className="footer-link">Vipps-støtte</a>
        <span aria-hidden="true">·</span>
        <button
          type="button"
          onClick={scrollToTop}
          className="footer-link"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
        >
          <span>Til toppen</span>
          <ArrowUp size={12} />
        </button>
      </div>
    </footer>
  );
}
