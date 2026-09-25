import { TechIcon } from "../../../components/common/TechIcon";
import { contactAssets } from "../../../constants/assets";
import { PageKey } from "../../../types";

interface ContactFooterProps {
  setActive?: (page: PageKey) => void;
}

export function ContactFooter({ setActive }: ContactFooterProps) {
  return (
    <div className="contact-footer projects-footer">
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
        <TechIcon src={contactAssets.file} alt="Code" />
      </a>
      <a
        href="https://github.com/aretwojay"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <TechIcon src={contactAssets.github} alt="GitHub" />
      </a>
      <a href="mailto:rubenmuya9129@gmail.com" aria-label="Email">
        <TechIcon src={contactAssets.email} alt="Email" />
      </a>
      <a
        href="https://linkedin.com/in/rubenmuya"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <TechIcon src={contactAssets.linkedin} alt="LinkedIn" />
      </a>
    </div>
  );
}
