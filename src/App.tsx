import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { WebshopSection } from './components/WebshopSection';
import { ProjectGrid } from './components/ProjectGrid';
import { ContactSection } from './components/ContactSection';
import { VippsSection } from './components/VippsSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { privateProjects, Project } from './data/projects';

export default function App() {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <>
      <Navbar />

      <main className="container">
        <Header />
        <WebshopSection onOpenDetails={(project) => setModalProject(project)} />
        <ProjectGrid
          projects={privateProjects}
          onOpenDetails={(project) => setModalProject(project)}
        />
        <ContactSection />
        <VippsSection />
        <Footer />
      </main>

      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </>
  );
}
