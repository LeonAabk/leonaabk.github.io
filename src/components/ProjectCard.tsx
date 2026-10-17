import { Project } from '../data/projects';
import { ArrowUpRight, Info } from 'lucide-react';

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

  return (
    <a href={project.url} className="card" title={`Gå til ${project.title}`}>
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
            <div className="card-arrow" aria-hidden="true">
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>

        <div className="card-content">
          <div className="card-category-meta">{project.category}</div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </div>

      <div className="card-footer-meta">
        <span>Gå til applikasjon</span>
        <span className="card-link-text">
          <span>Åpne</span>
          <ArrowUpRight size={14} />
        </span>
      </div>
    </a>
  );
}
