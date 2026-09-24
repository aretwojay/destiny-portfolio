import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Github, Mail, Linkedin, FileCode2 } from "lucide-react";
import "./styles.css";

const assets = {
  hero: "https://www.figma.com/api/mcp/asset/1f3504ce-9c8b-4f2a-890a-41113b80e184.png",
  emblem: "https://www.figma.com/api/mcp/asset/4745bb6d-89ca-4503-a211-434b363fc039.png",
  earth: "https://www.figma.com/api/mcp/asset/acdcb568-0ebb-470b-b9d1-06bbcc3cdc7d.png",
  mars: "https://www.figma.com/api/mcp/asset/3cda58e2-7d3b-4304-a473-991eb2c33c9a.png",
  venus: "https://www.figma.com/api/mcp/asset/277c6dc3-6a67-456a-a80e-67997b4c5118.png",
  moon: "https://www.figma.com/api/mcp/asset/269d809e-99a6-4826-b206-7d8bc564bbab.png",
};

const planets = [
  { key: "earth", label: "EARTH", className: "planet-earth", image: assets.earth, href: null },
  { key: "mars", label: "MARS", className: "planet-mars", image: assets.mars, href: null },
  { key: "venus", label: "VENUS", className: "planet-venus", image: assets.venus, href: null },
  { key: "moon", label: "MOON", className: "planet-moon", image: assets.moon, href: null },
];

function App() {
  const [active, setActive] = useState("ACCUEIL");

  const nav = ["ACCUEIL", "PROFIL", "PROJETS", "CONTACT"];

  return (
    <main className="portfolio-shell">
      <section className="hero" id="home">
        <img className="hero-image" src={assets.hero} alt="" aria-hidden="true" />
        <div className="hero-vignette" />

        <header className="header">
          <div className="header-mask" />
          <div className="identity">
            <div className="emblem-wrap">
              <img src={assets.emblem} alt="" />
            </div>
            <div className="identity-copy">
              <div className="name">Ruben KABANGA MUYA</div>
              <div className="status">// MOIS 5 JOUR 16 / NIVEAU 22 /</div>
            </div>
          </div>

          <nav className="navbar" aria-label="Navigation principale">
            {nav.map((label) => (
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

        <div className="planet-section" aria-label="Planètes">
          {planets.map((planet) => (
            <button
              key={planet.key}
              type="button"
              className={`planet ${planet.className}`}
              onClick={() => setActive(planet.key.toUpperCase())}
              aria-label={planet.label}
            >
              <span className="planet-halo" />
              <img src={planet.image} alt="" />
            </button>
          ))}
        </div>

        <div className="title-block">
          <div className="title-rule">
            <h1>PORTFOLIO</h1>
          </div>
          <div className="description-rule">
            <p>Bienvenue sur mon portfolio, explorez mes différents projets à travers les planètes</p>
          </div>
        </div>

        <footer className="footer">
          <a href="#home" aria-label="Code">
            <FileCode2 size={32} strokeWidth={1.5} />
          </a>
          <a href="https://github.com/aretwojay" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={32} strokeWidth={1.5} />
          </a>
          <a href="mailto:rubenmuya9129@gmail.com" aria-label="Email">
            <Mail size={32} strokeWidth={1.5} />
          </a>
          <a href="https://linkedin.com/in/rubenmuya" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={32} strokeWidth={1.5} />
          </a>
        </footer>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
