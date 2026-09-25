import { FileCode2, Github, Linkedin, Mail } from "lucide-react";
import { PageKey } from "../../types";

export interface FooterProps {
  setActive?: (page: PageKey) => void;
  className?: string;
  variant?: "home" | "projects" | "profile" | "contact";
}

export function Footer({ setActive, className = "", variant }: FooterProps) {
  const variantClasses = [
    "footer",
    variant === "projects" ? "projects-footer" : "",
    variant === "profile" ? "projects-footer" : "",
    variant === "contact" ? "contact-footer projects-footer" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <footer className={variantClasses}>
      <a href="/assets/cv.jpg" target="_blank" rel="noreferrer" aria-label="CV">
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
