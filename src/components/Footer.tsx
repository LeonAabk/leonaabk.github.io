import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-left">
        <span className="footer-brand">Aabak Studio</span>
        <span className="footer-sep" aria-hidden="true">·</span>
        <span>Aabakstudio Ungdomsbedrift (Org.nr: 938 823 014)</span>
        <span className="footer-sep" aria-hidden="true">·</span>
        <span>&copy; {new Date().getFullYear()} Leon Aabak</span>
      </div>

      <div className="footer-links">
        <a href="#nettbutikk" className="footer-link">Nettbutikk</a>
        <a href="#prosjekter" className="footer-link">Prosjekter</a>
        <a href="#kontakt" className="footer-link">Kontakt</a>
        <a href="#vipps" className="footer-link">Vipps</a>
        <button
          type="button"
          onClick={scrollToTop}
          className="footer-top-btn"
        >
          <span>Til toppen</span>
          <ArrowUp size={13} strokeWidth={2} />
        </button>
      </div>
    </footer>
  );
}
