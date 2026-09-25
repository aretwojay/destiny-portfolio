import { useState } from "react";
import { Footer } from "../../components/common/Footer";
import { Header } from "../../components/common/Header";
import { PageProps } from "../../types";
import { PlanetStage } from "./components/PlanetStage";

export function HomePage({ active, setActive }: PageProps) {
  const [step, setStep] = useState(0);

  return (
    <main className="portfolio-shell">
      <section className="hero" id="home">
        <img
          className="hero-image"
          src={"/assets/background.png"}
          alt=""
          aria-hidden="true"
        />
        <div className="hero-vignette" />
        <Header active={active} setActive={setActive} />
        <PlanetStage step={step} setStep={setStep} />
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
        <Footer setActive={setActive} variant="home" />
      </section>
    </main>
  );
}
