import { Project } from '../data/projects';
import { ArrowUpRight, Info } from 'lucide-react';
import { ProjectIcon } from './ProjectIcon';

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
      e.preventDefault();
      onOpenDetails(project);
    }
  };

  return (
    <a
      href={project.isActive ? project.url : '#'}
      className={`card ${!project.isActive ? 'card-inactive' : ''}`}
      onClick={handleCardClick}
      title={project.isActive ? `Åpne ${project.title}` : `${project.title} (${project.statusBadge || 'Satt på pause'})`}
      aria-disabled={!project.isActive}
    >
      <div>
        <div className="card-top-row">
          <div className="project-icon-box" aria-hidden="true">
            <ProjectIcon name={project.iconName} size={18} />
          </div>

          <div className="card-actions-row">
            <button
              type="button"
              className="card-info-btn"
              onClick={handleInfoClick}
              title={`Detaljer om ${project.title}`}
              aria-label={`Detaljer om ${project.title}`}
            >
              <Info size={15} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div className="card-content">
          <div className="card-category-meta">
            <span>{project.category}</span>
            {!project.isActive && (
              <>
                <span aria-hidden="true"> · </span>
                <span className="status-badge-inactive">{project.statusBadge || 'Ikke aktiv'}</span>
              </>
            )}
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>

      <div className="card-footer-meta">
        {project.isActive ? (
          <>
            <span>Webapplikasjon</span>
            <span className="card-link-text">
              <span>Åpne</span>
              <ArrowUpRight size={14} strokeWidth={2} />
            </span>
          </>
        ) : (
          <>
            <span>Status</span>
            <span className="card-paused-text">{project.statusBadge || 'Satt på pause'}</span>
          </>
        )}
      </div>
    </a>
  );
}
