import { homeAssets } from "../../../constants/assets";
import { PageKey } from "../../../types";

interface HomeFooterProps {
  setActive?: (page: PageKey) => void;
}

export function HomeFooter({ setActive }: HomeFooterProps) {
  return (
    <footer className="footer">
      <a href="#accueil" aria-label="Code" onClick={(e) => {
        if (setActive) { e.preventDefault(); setActive("ACCUEIL"); }
      }}><img src={homeAssets.file} alt="" /></a>
      <a href="https://github.com/aretwojay" target="_blank" rel="noreferrer" aria-label="GitHub"><img src={homeAssets.github} alt="" /></a>
      <a href="mailto:rubenmuya9129@gmail.com" aria-label="Email"><img src={homeAssets.email} alt="" /></a>
      <a href="https://linkedin.com/in/rubenmuya" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src={homeAssets.linkedin} alt="" /></a>
    </footer>
  );
}
