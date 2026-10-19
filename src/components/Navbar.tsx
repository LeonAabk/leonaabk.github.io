import { useState, useEffect } from 'react';
import { Sun, Moon, Heart } from 'lucide-react';

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
        {/* Zone 1: Brand wordmark */}
        <a href="/" className="brand-wordmark">
          <span>Leon Aabak</span>
          <span className="brand-badge">Prosjekter</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <div className="nav-links">
          <a href="#prosjekter" className="nav-link">Prosjekter</a>
          <a href="#vipps" className="nav-link">Støtt med Vipps</a>
          <a href="#kontakt" className="nav-link">Kontakt</a>
        </div>

        {/* Zone 3: Actions */}
        <div className="top-actions">
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-theme-toggle"
            title={`Tema: ${theme === 'light' ? 'Lyst' : theme === 'dark' ? 'Mørkt' : 'System'}. Klikk for å bytte.`}
            aria-label="Bytt tema"
          >
            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a href="#vipps" className="btn-nav-support">
            <Heart size={14} fill="currentColor" />
            <span>Vipps</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
