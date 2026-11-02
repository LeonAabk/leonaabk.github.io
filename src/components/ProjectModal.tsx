import { useEffect } from 'react';
import { Project } from '../data/projects';
import { X, ArrowUpRight, Check } from 'lucide-react';
import { ProjectIcon } from './ProjectIcon';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Lukk vindu"
        >
          <X size={17} strokeWidth={1.8} />
        </button>

        <div className="modal-header-section">
          <div className="modal-icon-box" aria-hidden="true">
            <ProjectIcon name={project.iconName} size={22} />
          </div>
          <div>
            <div className="card-category-meta">
              <span>{project.category}</span>
              {project.statusBadge && <span> · {project.statusBadge}</span>}
            </div>
            <h3 id="modal-title" className="modal-title">{project.title}</h3>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
        </div>

        <div className="modal-body">
          {!project.isActive && (
            <div className="modal-inactive-notice">
              Dette prosjektet er satt på pause og er ikke åpent for øyeblikket.
            </div>
          )}

          <p className="modal-description">{project.detailedDescription}</p>

          <div className="modal-features-title">Oversikt</div>
          <ul className="modal-features-list">
            {project.features.map((feature, idx) => (
              <li key={idx} className="modal-feature-item">
                <Check size={15} strokeWidth={2.2} className="modal-feature-check" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-studio-secondary" onClick={onClose}>
            Lukk
          </button>
          {project.isActive ? (
            <a
              href={project.url}
              className="btn-studio-primary"
              onClick={onClose}
            >
              <span>{project.ctaLabel || `Åpne ${project.title}`}</span>
              <ArrowUpRight size={15} strokeWidth={2} />
            </a>
          ) : (
            <button
              type="button"
              className="btn-studio-primary"
              disabled
              style={{ opacity: 0.45, cursor: 'not-allowed' }}
            >
              <span>Ikke tilgjengelig</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
