import { TechIcon } from "../../../components/common/TechIcon";
import { projectAssets } from "../../../constants/assets";
import { PageKey } from "../../../types";

interface ProjectsFooterProps {
  setActive?: (page: PageKey) => void;
}

export function ProjectsFooter({ setActive }: ProjectsFooterProps) {
  return (
    <footer className="projects-footer">
      <a
        href="#accueil"
        aria-label="Code"
        onClick={(e) => {
          if (setActive) {
            e.preventDefault();
            setActive("ACCUEIL");
            window.location.hash = "accueil";
          }
        }}
      >
        <TechIcon src={projectAssets.file} alt="Code" />
      </a>
      <a
        href="https://github.com/aretwojay"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <TechIcon src={projectAssets.github} alt="GitHub" />
      </a>
      <a href="mailto:rubenmuya9129@gmail.com" aria-label="Email">
        <TechIcon src={projectAssets.email} alt="Email" />
      </a>
      <a
        href="https://linkedin.com/in/rubenmuya"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <TechIcon src={projectAssets.linkedin} alt="LinkedIn" />
      </a>
    </footer>
  );
}
