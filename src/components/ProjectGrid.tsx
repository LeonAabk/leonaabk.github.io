import { useState, useMemo } from 'react';
import { Project, CategoryFilter } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Search, X } from 'lucide-react';

interface ProjectGridProps {
  projects: Project[];
  onOpenDetails: (project: Project) => void;
}

export function ProjectGrid({ projects, onOpenDetails }: ProjectGridProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>('Alle');

  const filterTabs: { label: string; value: CategoryFilter }[] = [
    { label: `Alle (${projects.length})`, value: 'Alle' },
    { label: 'Verktøy & Skole', value: 'Verktøy & Skole' },
    { label: 'Hverdag & Fritid', value: 'Hverdag & Fritid' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      let matchesCategory = true;
      if (selectedFilter === 'Verktøy & Skole') {
        matchesCategory =
          project.category === 'Verktøy' || project.category === 'Skole & Utdanning';
      } else if (selectedFilter === 'Hverdag & Fritid') {
        matchesCategory = project.category === 'Hverdag & Fritid';
      }

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedFilter, searchQuery]);

  return (
    <section id="prosjekter" className="page-section" aria-labelledby="prosjekter-heading">
      <div className="section-header-row">
        <div className="section-title-group">
          <span className="section-index">02</span>
          <div>
            <h2 id="prosjekter-heading" className="section-heading">Private prosjekter</h2>
            <p className="section-subtitle">
              Egne webapplikasjoner, kalkulatorer og hverdagsverktøy — åpne og uten reklame.
            </p>
          </div>
        </div>
      </div>

      <div className="toolbar-container">
        <div className="filter-tabs" role="tablist" aria-label="Filtrer private prosjekter">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={selectedFilter === tab.value}
              className={`filter-tab ${selectedFilter === tab.value ? 'active' : ''}`}
              onClick={() => setSelectedFilter(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="search-input-wrapper">
          <Search size={15} className="search-icon" aria-hidden="true" />
          <input
            type="text"
            className="search-input"
            placeholder="Søk i prosjekter..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Søk i private prosjekter"
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => setSearchQuery('')}
              title="Tøm søk"
              aria-label="Tøm søk"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      <div className="grid" role="list" aria-label="Private prosjekter">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={onOpenDetails}
            />
          ))
        ) : (
          <div className="empty-state">
            <p>Ingen prosjekter matchet «{searchQuery}».</p>
            <button
              type="button"
              className="btn-studio-secondary"
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('Alle');
              }}
            >
              Nullstill filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
