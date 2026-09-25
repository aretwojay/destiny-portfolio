interface PlanetStageProps {
  step?: number;
}

export function PlanetStage({ step = 0 }: PlanetStageProps) {
  return (
    <div
      className="planet-stage"
      data-step={step}
      aria-label="Planètes interactives"
    />
  );
}
