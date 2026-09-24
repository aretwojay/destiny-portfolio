import React, { useEffect, useRef, useState } from "react";
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
  const [rotation, setRotation] = useState(0);
  const rotationRef = useRef(0);
  const dragRef = useRef({ active: false, x: 0, lastX: 0, velocity: 0, moved: false });
  const frameRef = useRef(null);

  const nav = ["ACCUEIL", "PROFIL", "PROJETS", "CONTACT"];

  const startPlanetDrag = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture?.(event.pointerId);
    dragRef.current = {
      active: true,
      x: event.clientX,
      lastX: event.clientX,
      velocity: 0,
      moved: false,
    };
    document.body.classList.add("is-dragging");
  };

  const movePlanetDrag = (event) => {
    const drag = dragRef.current;
    if (!drag.active) return;

    const delta = event.clientX - drag.lastX;
    if (Math.abs(event.clientX - drag.x) > 4) drag.moved = true;
    drag.lastX = event.clientX;
    drag.velocity = delta * 0.42;

    rotationRef.current += delta * 0.42;
    setRotation(rotationRef.current);
  };

  const endPlanetDrag = () => {
    const drag = dragRef.current;
    if (!drag.active) return;

    drag.active = false;
    document.body.classList.remove("is-dragging");

    // Give the solar system a small amount of momentum after the drag.
    let velocity = drag.velocity;
    const coast = () => {
      velocity *= 0.94;
      if (Math.abs(velocity) < 0.03) {
        frameRef.current = null;
        return;
      }
      rotationRef.current += velocity;
      setRotation(rotationRef.current);
      frameRef.current = requestAnimationFrame(coast);
    };

    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(coast);
  };

  useEffect(() => {
    window.addEventListener("pointermove", movePlanetDrag);
    window.addEventListener("pointerup", endPlanetDrag);
    window.addEventListener("pointercancel", endPlanetDrag);

    return () => {
      window.removeEventListener("pointermove", movePlanetDrag);
      window.removeEventListener("pointerup", endPlanetDrag);
      window.removeEventListener("pointercancel", endPlanetDrag);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

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

        <div\n          className="planet-section"\n          aria-label="Planètes"\n          style={{ transform: `rotate(${rotation}deg)` }}\n        >
          {planets.map((planet) => (
            <button
              key={planet.key}
              type="button"
              className={`planet ${planet.className}`}
              onPointerDown={startPlanetDrag}
              onClick={(event) => {
                if (dragRef.current.moved) {
                  event.preventDefault();
                  dragRef.current.moved = false;
                  return;
                }
                setActive(planet.key.toUpperCase());
              }}
              aria-label={`${planet.label}. Faites glisser pour faire pivoter les planètes.`}
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
