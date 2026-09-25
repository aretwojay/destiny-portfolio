import { FileCode2, Github, Linkedin, Mail } from "lucide-react";
import { PageKey } from "../../../types";

interface HomeFooterProps {
  setActive?: (page: PageKey) => void;
}

export function HomeFooter({ setActive }: HomeFooterProps) {
  return (
    <footer className="footer">
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
        <FileCode2 size={32} strokeWidth={1.5} />
      </a>
      <a
        href="https://github.com/aretwojay"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <Github size={32} strokeWidth={1.5} />
      </a>
      <a href="mailto:rubenmuya9129@gmail.com" aria-label="Email">
        <Mail size={32} strokeWidth={1.5} />
      </a>
      <a
        href="https://linkedin.com/in/rubenmuya"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin size={32} strokeWidth={1.5} />
      </a>
    </footer>
  );
}
