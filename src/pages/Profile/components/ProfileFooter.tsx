import { TechIcon } from "../../../components/common/TechIcon";
import { profileAssets } from "../../../constants/assets";
import { PageKey } from "../../../types";

interface ProfileFooterProps {
  setActive?: (page: PageKey) => void;
}

export function ProfileFooter({ setActive }: ProfileFooterProps) {
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
        <TechIcon src={profileAssets.file} alt="Code" />
      </a>
      <a
        href="https://github.com/aretwojay"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <TechIcon src={profileAssets.github} alt="GitHub" />
      </a>
      <a href="mailto:rubenmuya9129@gmail.com" aria-label="Email">
        <TechIcon src={profileAssets.email} alt="Email" />
      </a>
      <a
        href="https://linkedin.com/in/rubenmuya"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <TechIcon src={profileAssets.linkedin} alt="LinkedIn" />
      </a>
    </footer>
  );
}
