import { Project } from '../data/projects';
import { ArrowUpRight, Info, Slash } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const handleInfoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onOpenDetails(project);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (!project.isActive) {
      // If inactive, intercept click to show project details modal rather than failing navigation
      e.preventDefault();
      onOpenDetails(project);
    }
  };

  return (
    <a
      href={project.isActive ? project.url : '#'}
      className={`card ${!project.isActive ? 'card-inactive' : ''}`}
      onClick={handleCardClick}
      title={project.isActive ? `Gå til ${project.title}` : `${project.title} (Ikke aktiv)`}
      aria-disabled={!project.isActive}
    >
      <div>
        <div className="card-top-row">
          <div className="icon-wrapper" aria-hidden="true">
            {project.icon}
          </div>
          <div className="card-actions-row">
            <button
              type="button"
              className="card-info-btn"
              onClick={handleInfoClick}
              title={`Les mer om ${project.title}`}
              aria-label={`Les mer om ${project.title}`}
            >
              <Info size={16} />
            </button>
            {project.isActive ? (
              <div className="card-arrow" aria-hidden="true">
                <ArrowUpRight size={18} />
              </div>
            ) : (
              <div className="card-arrow" style={{ opacity: 0.6 }} aria-hidden="true" title="Ikke aktiv">
                <Slash size={16} />
              </div>
            )}
          </div>
        </div>

        <div className="card-content">
          <div className="card-category-meta">
            <span>{project.category}</span>
            {!project.isActive && (
              <>
                <span aria-hidden="true"> · </span>
                <span className="status-badge-inactive">Ikke aktiv</span>
              </>
            )}
          </div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </div>

      <div className="card-footer-meta">
        {project.isActive ? (
          <>
            <span>Gå til applikasjon</span>
            <span className="card-link-text">
              <span>Åpne</span>
              <ArrowUpRight size={14} />
            </span>
          </>
        ) : (
          <>
            <span style={{ color: 'var(--text-muted)' }}>Status</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600 }}>
              Ikke aktiv
            </span>
          </>
        )}
      </div>
    </a>
  );
}
