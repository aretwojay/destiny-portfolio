import { useState } from "react";
import { Header } from "../../components/common/Header";
import { homeAssets } from "../../constants/assets";
import { PageProps } from "../../types";
import { HomeFooter } from "./components/HomeFooter";
import { PlanetStage } from "./components/PlanetStage";

export function HomePage({ active, setActive }: PageProps) {
  const [step] = useState(0);

  return (
    <main className="portfolio-shell">
      <section className="hero" id="home">
        <img
          className="hero-image"
          src={homeAssets.hero}
          alt=""
          aria-hidden="true"
        />
        <div className="hero-vignette" />
        <Header active={active} setActive={setActive} />
        <PlanetStage step={step} />
        <div className="title-block">
          <div className="title-rule">
            <h1>PORTFOLIO</h1>
          </div>
          <div className="description-rule">
            <p>
              Bienvenue sur mon portfolio, explorez mes différents projets à
              travers les planètes
            </p>
          </div>
        </div>
        <HomeFooter setActive={setActive} />
      </section>
    </main>
  );
}
