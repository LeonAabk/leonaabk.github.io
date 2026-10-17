import { useEffect } from 'react';
import { Project } from '../data/projects';
import { X, ExternalLink, Check, AlertCircle } from 'lucide-react';

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
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Lukk forhåndsvisning"
        >
          <X size={18} />
        </button>

        <div className="modal-header-section">
          <div className="modal-icon" aria-hidden="true">
            {project.icon}
          </div>
          <div>
            <div className="card-category-meta">
              <span>{project.category}</span>
              {!project.isActive && <span> · Ikke aktiv</span>}
            </div>
            <h3 id="modal-title" className="modal-title">{project.title}</h3>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
        </div>

        <div className="modal-body">
          {!project.isActive && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                background: 'rgba(239, 68, 68, 0.08)',
                color: '#dc2626',
                fontSize: '0.875rem',
                marginBottom: '1rem',
                border: '1px solid rgba(239, 68, 68, 0.2)',
              }}
            >
              <AlertCircle size={18} style={{ flexShrink: 0 }} />
              <span>Dette prosjektet er for øyeblikket ikke aktivt.</span>
            </div>
          )}

          <p className="modal-description">{project.detailedDescription}</p>

          <div className="modal-features-title">Viktige funksjoner</div>
          <ul className="modal-features-list">
            {project.features.map((feature, idx) => (
              <li key={idx} className="modal-feature-item">
                <Check size={16} className="modal-feature-check" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn-secondary" onClick={onClose}>
            Lukk
          </button>
          {project.isActive ? (
            <a
              href={project.url}
              className="btn-primary"
              onClick={onClose}
            >
              <span>Åpne {project.title}</span>
              <ExternalLink size={16} />
            </a>
          ) : (
            <button
              type="button"
              className="btn-primary"
              disabled
              style={{ opacity: 0.5, cursor: 'not-allowed' }}
              title="Prosjektet er ikke tilgjengelig"
            >
              <span>Ikke tilgjengelig</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
