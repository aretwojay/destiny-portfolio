import { homeAssets, projectAssets } from "../../constants/assets";
import { HeaderProps, PageKey } from "../../types";

export function Header({ active, setActive, projects = false }: HeaderProps) {
  const navItems: PageKey[] = ["ACCUEIL", "PROFIL", "PROJETS", "CONTACT"];

  return (
    <header className={`header ${projects ? "projects-header" : ""}`}>
      <div
        className="header-mask"
        style={{
          maskImage: `url("${projects ? projectAssets.headerMask : homeAssets.headerMask}")`,
          WebkitMaskImage: `url("${projects ? projectAssets.headerMask : homeAssets.headerMask}")`,
        }}
      />
      <div className="identity">
        <div className="emblem-wrap">
          <img src={"/assets/emblem-1.svg"} alt="Logo" />
        </div>
        <div className="identity-copy">
          <div className="name">Ruben KABANGA MUYA</div>
          <div className="status">
            // MOIS {new Date().getMonth() + 1} JOUR {new Date().getDate()} /
            NIVEAU {new Date().getFullYear() - 2004} /
          </div>
        </div>
      </div>
      <nav className="navbar" aria-label="Navigation principale">
        {navItems.map((label) => (
          <button
            key={label}
            className={`nav-link ${active === label ? "active" : ""}`}
            onClick={() => {
              setActive(label);
              window.location.hash = label.toLowerCase();
            }}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
