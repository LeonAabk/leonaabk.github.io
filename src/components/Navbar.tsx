import { useState, useEffect } from 'react';
import { Sun, Moon, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [theme, setTheme] = useState<'system' | 'light' | 'dark'>('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-preference') as 'system' | 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

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

  return (
    <nav className="top-navbar" aria-label="Hovednavigasjon">
      <div className="top-navbar-inner">
        <a href="/" className="brand-wordmark">
          <span className="brand-primary">Aabak Studio</span>
          <span className="brand-divider" aria-hidden="true">/</span>
          <span className="brand-secondary">Leon Aabak</span>
        </a>

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
        </div>
      </div>
    </nav>
  );
}
