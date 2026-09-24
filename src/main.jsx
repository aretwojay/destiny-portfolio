import React, { useRef, useState } from "react";
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
  { key: "earth", label: "EARTH", image: assets.earth },
  { key: "mars", label: "MARS", image: assets.mars },
  { key: "venus", label: "VENUS", image: assets.venus },
  { key: "moon", label: "MOON", image: assets.moon },
];

function App() {
  const [active, setActive] = useState("ACCUEIL");
  const [step, setStep] = useState(0);
  const drag = useRef({ active: false, startX: 0, startY: 0, moved: false });

  const startDrag = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.preventDefault();
    drag.current = { active: true, startX: event.clientX, startY: event.clientY, moved: false };
    event.currentTarget.setPointerCapture?.(event.pointerId);
    document.body.classList.add("is-dragging");
  };

  const finishDrag = (event) => {
    if (!drag.current.active) return;
    const dx = event.clientX - drag.current.startX;
    const dy = event.clientY - drag.current.startY;
    drag.current.active = false;
    document.body.classList.remove("is-dragging");

    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
    drag.current.moved = true;
    setStep((current) => current + (dx < 0 ? 1 : -1));
  };

  const cancelDrag = () => {
    drag.current.active = false;
    document.body.classList.remove("is-dragging");
  };

  const clickPlanet = (label) => {
    if (drag.current.moved) {
      drag.current.moved = false;
      return;
    }
    setActive(label);
  };

  return (
    <main className="portfolio-shell">
      <section className="hero" id="home">
        <img className="hero-image" src={assets.hero} alt="" aria-hidden="true" />
        <div className="hero-vignette" />

        <header className="header">
          <div className="header-mask" />
          <div className="identity">
            <div className="emblem-wrap"><img src={assets.emblem} alt="" /></div>
            <div className="identity-copy">
              <div className="name">Ruben KABANGA MUYA</div>
              <div className="status">// MOIS 5 JOUR 16 / NIVEAU 22 /</div>
            </div>
          </div>
          <nav className="navbar" aria-label="Navigation principale">
            {["ACCUEIL", "PROFIL", "PROJETS", "CONTACT"].map((label) => (
              <button key={label} className={`nav-link ${active === label ? "active" : ""}`} onClick={() => setActive(label)}>
                {label}
              </button>
            ))}
          </nav>
        </header>

        <div className="planet-stage" aria-label="Planètes interactives">
          {planets.map((planet, index) => (
            <button
              key={planet.key}
              type="button"
              className={`planet planet-position-${index}`}
              onPointerDown={startDrag}
              onPointerUp={finishDrag}
              onPointerCancel={cancelDrag}
              onClick={() => clickPlanet(planet.label)}
              aria-label={planet.label}
            >
              <span className="planet-halo" />
              <img src={planet.image} alt="" draggable="false" />
            </button>
          ))}
        </div>

        <div className="title-block">
          <div className="title-rule"><h1>PORTFOLIO</h1></div>
          <div className="description-rule">
            <p>Bienvenue sur mon portfolio, explorez mes différents projets à travers les planètes</p>
          </div>
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

createRoot(document.getElementById("root")).render(<App />);
