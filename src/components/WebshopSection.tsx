import { ArrowUpRight, Info, Check } from 'lucide-react';
import { Project, businessProjects } from '../data/projects';
import { ProjectIcon } from './ProjectIcon';

interface WebshopSectionProps {
  onOpenDetails: (project: Project) => void;
}

export function WebshopSection({ onOpenDetails }: WebshopSectionProps) {
  const featuredShop = businessProjects[0];
  const companionProjects = businessProjects.slice(1);

  return (
    <section id="nettbutikk" className="page-section" aria-labelledby="nettbutikk-heading">
      <div className="section-header-row">
        <div className="section-title-group">
          <span className="section-index">01</span>
          <div>
            <h2 id="nettbutikk-heading" className="section-heading">Nettbutikk & Bedrift</h2>
            <p className="section-subtitle">
              Fysiske NFC-kort klare for bestilling i dag, samt tilhørende bedriftsløsninger.
            </p>
          </div>
        </div>
        <span className="section-meta-label">Aabakstudio UB · Org.nr: 938 823 014</span>
      </div>

      {/* Featured Webshop Showcase */}
      <div className="webshop-showcase">
        <div className="webshop-showcase-content">
          <div className="webshop-status-row">
            <span className="status-pill status-pill-available">
              <span className="status-dot" aria-hidden="true" />
              <span>På lager · Bestill direkte</span>
            </span>
            <span className="webshop-ub-note">Ungdomsbedrift (UB)</span>
          </div>

          <h3 className="webshop-title">
            NFC Review — Google-anmeldelseskort
          </h3>

          <p className="webshop-description">
            Flate, kontaktløse NFC-kort med kraftig 3M™-bakside som festes rett ved kassen eller på disken. Kunden holder telefonen inntil kortet og sendes direkte til bedriftens anmeldelsesside på Google — uten app eller månedlige kostnader.
          </p>

          <ul className="webshop-highlights" aria-label="Nøkkelpunkter">
            <li>
              <Check size={15} strokeWidth={2.2} className="webshop-check" />
              <span>Ferdig programmert mot din Google Bedriftsprofil før utsending</span>
            </li>
            <li>
              <Check size={15} strokeWidth={2.2} className="webshop-check" />
              <span>Fungerer på både iPhone og Android ved enkel berøring</span>
            </li>
            <li>
              <Check size={15} strokeWidth={2.2} className="webshop-check" />
              <span>Alle priser er inkl. mva. · Fri frakt med Posten over 500 kr</span>
            </li>
          </ul>

          <div className="webshop-pricing-strip" aria-label="Prisoversikt">
            <div className="pricing-tier">
              <span className="pricing-tier-label">Enkeltkort (1 stk.)</span>
              <span className="pricing-tier-value">349 kr</span>
            </div>
            <div className="pricing-tier pricing-tier-featured">
              <span className="pricing-tier-label">Synlighetspakken (3 stk.)</span>
              <span className="pricing-tier-value">890 kr <small>· Fri frakt</small></span>
            </div>
            <div className="pricing-tier">
              <span className="pricing-tier-label">Bedriftspakke (5 stk.)</span>
              <span className="pricing-tier-value">1 290 kr <small>· Fri frakt</small></span>
            </div>
          </div>

          <div className="webshop-actions">
            <a href={featuredShop.url} className="btn-studio-primary">
              <span>Gå til nettbutikken</span>
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>
            <button
              type="button"
              className="btn-studio-secondary"
              onClick={() => onOpenDetails(featuredShop)}
            >
              <Info size={15} strokeWidth={1.8} />
              <span>Mer informasjon</span>
            </button>
          </div>
        </div>

        <a
          href={featuredShop.url}
          className="webshop-visual-panel"
          aria-label="Åpne NFC Review nettbutikk"
        >
          <div className="webshop-photo-stage">
            <img
              src="/google-card.png"
              alt="Fysisk Google Review NFC-kort med 3M-klistremerke på baksiden"
              className="webshop-card-photo"
              loading="eager"
            />
          </div>
          <div className="webshop-visual-caption">
            <span>NTAG NFC-brikke · 3M™-bakside</span>
            <span className="mono-caption">0 kr/mnd</span>
          </div>
        </a>
      </div>

      {/* Companion Business Cards (SmakSync + ReviewRedirect) */}
      <div className="companion-grid">
        {companionProjects.map((project) => (
          <div key={project.id} className="companion-card">
            <div>
              <div className="companion-top-row">
                <div className="project-icon-box" aria-hidden="true">
                  <ProjectIcon name={project.iconName} size={18} />
                </div>

                <div className="companion-badges">
                  {project.statusBadge && (
                    <span
                      className={`status-pill ${
                        project.statusTone === 'upcoming'
                          ? 'status-pill-upcoming'
                          : 'status-pill-neutral'
                      }`}
                    >
                      {project.statusBadge}
                    </span>
                  )}
                  <button
                    type="button"
                    className="card-info-btn"
                    onClick={() => onOpenDetails(project)}
                    title={`Les mer om ${project.title}`}
                    aria-label={`Les mer om ${project.title}`}
                  >
                    <Info size={15} strokeWidth={1.8} />
                  </button>
                </div>
              </div>

              <h3 className="companion-title">{project.title}</h3>
              <p className="companion-description">{project.description}</p>
            </div>

            <div className="companion-footer">
              <span className="companion-category">{project.tagline}</span>
              <a href={project.url} className="companion-link">
                <span>{project.ctaLabel || 'Åpne'}</span>
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
