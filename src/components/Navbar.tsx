import { useState, useEffect } from 'react';
import { Sun, Moon, ArrowUpRight, Menu, X } from 'lucide-react';

export function Navbar() {
  const [theme, setTheme] = useState<'system' | 'light' | 'dark'>('system');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-preference') as 'system' | 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const applyTheme = (newTheme: 'system' | 'light' | 'dark') => {
    if (newTheme === 'system') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme-preference', nextTheme);
    applyTheme(nextTheme);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="top-navbar" aria-label="Hovednavigasjon">
      <div className="top-navbar-inner">
        <a href="/" className="brand-wordmark" onClick={handleLinkClick}>
          <span className="brand-primary">Aabak Studio</span>
          <span className="brand-divider" aria-hidden="true">/</span>
          <span className="brand-secondary">Leon Aabak</span>
        </a>

        {/* Desktop nav links */}
        <div className="nav-links">
          <a href="#nettbutikk" className="nav-link">Nettbutikk</a>
          <a href="#prosjekter" className="nav-link">Private prosjekter</a>
          <a href="#kontakt" className="nav-link">Kontakt</a>
          <a href="#vipps" className="nav-link">Støtt med Vipps</a>
        </div>

        <div className="top-actions">
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-theme-toggle"
            title={`Tema: ${theme === 'light' ? 'Lyst' : theme === 'dark' ? 'Mørkt' : 'System'}. Klikk for å bytte.`}
            aria-label="Bytt fargetema"
          >
            {theme === 'dark' ? <Moon size={16} strokeWidth={1.75} /> : <Sun size={16} strokeWidth={1.75} />}
          </button>

          <a href="/NfcReview/" className="btn-nav-shop">
            <span>Nettbutikk</span>
            <ArrowUpRight size={15} strokeWidth={2} />
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            className="btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Lukk meny' : 'Åpne navigasjonsmeny'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
          <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)} />
          <div className="mobile-nav-content">
            <div className="mobile-nav-section-title">Navigasjon</div>
            <div className="mobile-nav-items">
              <a href="#nettbutikk" className="mobile-nav-item" onClick={handleLinkClick}>
                <span className="mobile-nav-num">01</span>
                <span className="mobile-nav-text">Nettbutikk & Bedrift</span>
                <span className="mobile-nav-arrow" aria-hidden="true">→</span>
              </a>
              <a href="#prosjekter" className="mobile-nav-item" onClick={handleLinkClick}>
                <span className="mobile-nav-num">02</span>
                <span className="mobile-nav-text">Private prosjekter</span>
                <span className="mobile-nav-arrow" aria-hidden="true">→</span>
              </a>
              <a href="#kontakt" className="mobile-nav-item" onClick={handleLinkClick}>
                <span className="mobile-nav-num">03</span>
                <span className="mobile-nav-text">Kontakt meg</span>
                <span className="mobile-nav-arrow" aria-hidden="true">→</span>
              </a>
              <a href="#vipps" className="mobile-nav-item" onClick={handleLinkClick}>
                <span className="mobile-nav-num">04</span>
                <span className="mobile-nav-text">Støtt med Vipps</span>
                <span className="mobile-nav-arrow" aria-hidden="true">→</span>
              </a>
            </div>

            <div className="mobile-nav-footer">
              <a href="/NfcReview/" className="btn-mobile-shop-cta" onClick={handleLinkClick}>
                <span>Åpne NFC Review Nettbutikk</span>
                <ArrowUpRight size={16} strokeWidth={2} />
              </a>
              <div className="mobile-nav-footnote">
                aabakstudio.com · Leon Aabak
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
