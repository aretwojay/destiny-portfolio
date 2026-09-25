import { useState } from "react";
import { Footer } from "../../components/common/Footer";
import { Header } from "../../components/common/Header";
import { PageProps } from "../../types";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectModal } from "./components/ProjectModal";
import { projectsList } from "./data/projectsData";

export function ProjectsPage({ active, setActive }: PageProps) {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const closeProject = () => setOpenProject(null);

  return (
    <main className="projects-page">
      <section className="projects-shell">
        <div className="projects-background" />
        <Header active={active} setActive={setActive} projects />

        <section className="projects-content">
          <div className="projects-title">
            <h1>PROJETS</h1>
          </div>

          <div className="projects-grid">
            {(projectsList || []).map((project) => (
              <ProjectCard
                key={project.id}
                variant={project.variant}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                stack={project.stack}
                duration={project.duration}
                mission={project.mission}
                image={project.image}
                onOpen={() => setOpenProject(project.id)}
              />
            ))}
          </div>
        </section>

        <Footer setActive={setActive} variant="projects" />
        {openProject === "diggers" && <ProjectModal onClose={closeProject} />}
      </section>
    </main>
  );
}
