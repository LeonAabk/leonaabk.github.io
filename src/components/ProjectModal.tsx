import { useEffect } from 'react';
import { Project } from '../data/projects';
import { X, ExternalLink, Check } from 'lucide-react';

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
            <div className="card-category-meta">{project.category}</div>
            <h3 id="modal-title" className="modal-title">{project.title}</h3>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
        </div>

        <div className="modal-body">
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
          <a
            href={project.url}
            className="btn-primary"
            onClick={onClose}
          >
            <span>Åpne {project.title}</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
