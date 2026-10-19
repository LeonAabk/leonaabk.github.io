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
    { label: 'Bedrift & Salg', value: 'Bedrift & Salg' },
    { label: 'Verktøy', value: 'Verktøy' },
    { label: 'Hverdag & Utdanning', value: 'Hverdag & Utdanning' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category match
      let matchesCategory = true;
      if (selectedFilter === 'Bedrift & Salg') {
        matchesCategory = project.category === 'Bedrift & Salg';
      } else if (selectedFilter === 'Verktøy') {
        matchesCategory = project.category === 'Verktøy';
      } else if (selectedFilter === 'Hverdag & Utdanning') {
        matchesCategory = project.category === 'Hverdag & Samfunn' || project.category === 'Utdanning';
      }

      // Search match
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
    <section id="prosjekter" aria-label="Prosjektoversikt">
      {/* Interactive Toolbar */}
      <div className="toolbar-container">
        {/* Filter Tabs */}
        <div className="filter-tabs" role="tablist" aria-label="Filtrer prosjekter etter kategori">
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

        {/* Live Search Bar */}
        <div className="search-input-wrapper">
          <Search size={16} className="search-icon" aria-hidden="true" />
          <input
            type="text"
            className="search-input"
            placeholder="Søk i prosjekter..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Søk i prosjekter"
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

      {/* Grid of Projects */}
      <main className="grid" aria-label="Prosjekter">
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
            <p>Ingen prosjekter samsvarte med «{searchQuery}»</p>
            <button
              type="button"
              className="empty-state-reset-btn"
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('Alle');
              }}
            >
              Nullstill søk og filter
            </button>
          </div>
        )}
      </main>
    </section>
  );
}
