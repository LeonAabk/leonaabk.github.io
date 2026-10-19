import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { ProjectGrid } from './components/ProjectGrid';
import { VippsSection } from './components/VippsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { projects, Project } from './data/projects';

export default function App() {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <>
      <div className="ambient-bg" aria-hidden="true" />
      <Navbar />

      <div className="container">
        <Header />
        <ProjectGrid
          projects={projects}
          onOpenDetails={(project) => setModalProject(project)}
        />
        <VippsSection />
        <ContactSection />
        <Footer />
      </div>

      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </>
  );
}
