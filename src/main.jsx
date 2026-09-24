import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Github, Mail, Linkedin, FileCode2 } from "lucide-react";
import "./styles.css";

const homeAssets = {
  hero: "https://www.figma.com/api/mcp/asset/1f3504ce-9c8b-4f2a-890a-41113b80e184.png",
  emblem: "https://www.figma.com/api/mcp/asset/4745bb6d-89ca-4503-a211-434b363fc039.png",
};

const projectAssets = {
  hero: "https://www.figma.com/api/mcp/asset/1bb3a3ff-07e3-4ce6-a21b-3581d1998048.png",
  emblem: "https://www.figma.com/api/mcp/asset/915dba6c-4786-495a-8b36-6e17f4aaaf63.png",
  diggers: "https://www.figma.com/api/mcp/asset/ba145b65-07f1-4a9b-b998-c6c480a909de.png",
  diggersImage: "https://www.figma.com/api/mcp/asset/24b8e361-ad7d-4a72-bd4b-81408aeb4253.png",
  alpsImage: "https://www.figma.com/api/mcp/asset/63ef98a0-035a-4dbb-acda-204c073a3d96.png",
  react: "https://www.figma.com/api/mcp/asset/d19f128d-769b-4c5c-b42b-c94057158612.svg",
  node: "https://www.figma.com/api/mcp/asset/425a3323-afe3-4f99-9d35-d85651c758c0.svg",
  next: "https://www.figma.com/api/mcp/asset/4462d0f3-cc43-4f40-ae86-9c9dd403b5e4.svg",
  github: "https://www.figma.com/api/mcp/asset/629c568b-9679-40e4-8bc4-117f8f4ac2eb.svg",
  email: "https://www.figma.com/api/mcp/asset/76a59d0d-ebd8-4f95-8781-90d53427ab7e.svg",
  linkedin: "https://www.figma.com/api/mcp/asset/ec022baa-e500-4eff-af69-3b73b1e9b18f.svg",
  file: "https://www.figma.com/api/mcp/asset/3cc0131d-3fb6-4d32-8fcb-268d2b98574e.svg",
  headerMask: "https://www.figma.com/api/mcp/asset/f3e4c155-379d-4530-853f-38cdb00b393c.svg",
};

function Header({ active, setActive, projects = false }) {
  return (
    <header className={`header ${projects ? "projects-header" : ""}`}>
      <div className="header-mask" style={{ maskImage: `url("${projectAssets.headerMask}")` }} />
      <div className="identity">
        <div className="emblem-wrap">
          <img src={projects ? projectAssets.emblem : homeAssets.emblem} alt="" />
        </div>
        <div className="identity-copy">
          <div className="name">Ruben KABANGA MUYA</div>
          <div className="status">// MOIS 5 JOUR 16 / NIVEAU 22 /</div>
        </div>
      </div>
      <nav className="navbar" aria-label="Navigation principale">
        {["ACCUEIL", "PROFIL", "PROJETS", "CONTACT"].map((label) => (
          <button
            key={label}
            className={`nav-link ${active === label ? "active" : ""}`}
            onClick={() => setActive(label)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}

const techIcon = (src, alt) => <img className="tech-icon" src={src} alt={alt} />;

function ProjectCard({ variant = "diggers", title, subtitle, description, stack, duration, mission, image, onOpen }) {
  const isAlps = variant === "alps";
  return (
    <button type="button" className={`project-card project-card-${variant}`} onClick={onOpen} aria-label={`Ouvrir ${title}`}>
      <div className="project-info">
        <div className="project-icon"><img src={isAlps ? projectAssets.emblem : projectAssets.diggers} alt="" /></div>
        <div className="project-copy"><h3>{title}</h3><p>{subtitle}</p></div>
        <div className="project-techs">
          {isAlps ? techIcon(projectAssets.next, "Next.js") : <>{techIcon(projectAssets.react, "React")}{techIcon(projectAssets.node, "Node.js")}</>}
        </div>
      </div>
      <div className="project-image"><img src={image} alt="" /></div>
      <div className="project-description">
        <p>{description}</p>
        <p className="project-meta">Stack : {stack}</p>
        <p className="project-meta">Durée : {duration}</p>
        <p className="project-meta">Mission : {mission}</p>
      </div>
    </button>
  );
}

function ProjectModal({ onClose }) {
  return (
    <div className="project-modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <div className="modal-info">
          <div className="project-icon"><img src={projectAssets.diggers} alt="" /></div>
          <div className="project-copy"><h3 id="project-modal-title">Diggers Factory</h3><p>Alternance (2026)</p></div>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Fermer">×</button>
        </div>
        <div className="modal-images">
          <div className="modal-image-main"><img src={projectAssets.diggersImage} alt="Interface Diggers Factory" /></div>
          <div className="modal-image-column">
            <img src="https://www.figma.com/api/mcp/asset/d548887d-eef1-417d-8c3c-2cc386f40b70.png" alt="Écran Diggers Factory" />
            <img src="https://www.figma.com/api/mcp/asset/cbfba6c4-36cc-428e-9bae-d316f6d823b4.png" alt="Capture Diggers Factory" />
          </div>
        </div>
        <div className="project-modal-description">
          <p>Diggers Factory crée une meilleure façon pour les artistes et les fans de profiter de la musique physique.</p>
          <p className="project-meta">Stack : React.JS/Node.JS</p>
          <p className="project-meta">Durée : 10 mois (en cours)</p>
          <p className="project-meta">Poste : Testeur QA</p>
          <p className="project-meta modal-role">
            • Écrire, maintenir et améliorer les tests End-to-End couvrant les parcours critiques du produit.<br />
            • Réaliser des tests fonctionnels rapides lors des déploiements en staging.<br />
            • Contribuer à la qualité du code via les tests unitaires.<br />
            • Identifier, reproduire et remonter les anomalies.<br />
            • Collaborer avec les développeurs sur les scénarios et workflows.<br />
            • Documenter les scénarios de test et les workflows automatisés.<br />
            • Participer ponctuellement au développement.
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectsPage({ active, setActive }) {
  const [openProject, setOpenProject] = useState(null);
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
            <ProjectCard
              onOpen={() => setOpenProject("diggers")}
              title="Diggers Factory"
              subtitle="Alternance (2026)"
              description="Diggers Factory crée une meilleure façon pour les artistes et les fans de profiter de la musique physique."
              stack="React.JS/Node.JS"
              duration="10 mois (en cours)"
              mission="Poste : Testeur QA"
              image={projectAssets.diggersImage}
            />
            <ProjectCard
              onOpen={() => setOpenProject("alps")}
              variant="alps"
              title="Alps-direct"
              subtitle="Site-web (2025)"
              description="Service de transfert privé vers les stations de ski françaises, comme notamment Flaine, Avoriaz, Samoens, Morillon, Les Carroz, Les Gets, Megève et bien d'autres."
              stack="Next.js/Prisma/Supabase"
              duration="4 mois (terminé)"
              mission="Refonte du site internet"
              image={projectAssets.alpsImage}
            />
          </div>
        </section>

        <footer className="projects-footer">
          <a href="#home" aria-label="Code">{techIcon(projectAssets.file, "Code")}</a>
          <a href="https://github.com/aretwojay" target="_blank" rel="noreferrer" aria-label="GitHub">{techIcon(projectAssets.github, "GitHub")}</a>
          <a href="mailto:rubenmuya9129@gmail.com" aria-label="Email">{techIcon(projectAssets.email, "Email")}</a>
          <a href="https://linkedin.com/in/rubenmuya" target="_blank" rel="noreferrer" aria-label="LinkedIn">{techIcon(projectAssets.linkedin, "LinkedIn")}</a>
        </footer>
        {openProject === "diggers" && <ProjectModal onClose={closeProject} />}
        </section>
    </main>
  );
}

function HomePage({ active, setActive }) {
  const [step, setStep] = useState(0);
  return (
    <main className="portfolio-shell">
      <section className="hero" id="home">
        <img className="hero-image" src={homeAssets.hero} alt="" aria-hidden="true" />
        <div className="hero-vignette" />
        <Header active={active} setActive={setActive} />
        <div className="planet-stage" data-step={step} aria-label="Planètes interactives" />
        <div className="title-block">
          <div className="title-rule"><h1>PORTFOLIO</h1></div>
          <div className="description-rule"><p>Bienvenue sur mon portfolio, explorez mes différents projets à travers les planètes</p></div>
        </div>
        <footer className="footer">
          <a href="#home" aria-label="Code"><FileCode2 size={32} strokeWidth={1.5} /></a>
          <a href="https://github.com/aretwojay" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={32} strokeWidth={1.5} /></a>
          <a href="mailto:rubenmuya9129@gmail.com" aria-label="Email"><Mail size={32} strokeWidth={1.5} /></a>
          <a href="https://linkedin.com/in/rubenmuya" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={32} strokeWidth={1.5} /></a>
        </footer>
      </section>
    </main>
  );
}

function App() {
  const [active, setActive] = useState("PROJETS");
  return active === "PROJETS"
    ? <ProjectsPage active={active} setActive={setActive} />
    : <HomePage active={active} setActive={setActive} />;
}

createRoot(document.getElementById("root")).render(<App />);
