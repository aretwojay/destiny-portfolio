import { useRef } from "react";
import { homeAssets } from "../../../constants/assets";

interface PlanetStageProps {
  step?: number;
  setStep: (value: number | ((current: number) => number)) => void;
}

const positions = [
  { className: "planet-position-0" },
  { className: "planet-position-1" },
  { className: "planet-position-2" },
  { className: "planet-position-3" },
];

const planets = [
  ["earth", "EARTH", homeAssets.earth],
  ["mars", "MARS", homeAssets.mars],
  ["venus", "VENUS", homeAssets.venus],
  ["moon", "MOON", homeAssets.moon],
] as const;

export function PlanetStage({ step = 0, setStep }: PlanetStageProps) {
  const drag = useRef({ active: false, startX: 0 });

  const start = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    drag.current = { active: true, startX: event.clientX };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const end = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (!drag.current.active) return;
    const delta = event.clientX - drag.current.startX;
    drag.current.active = false;
    if (Math.abs(delta) < 45) return;
    setStep((current) => current + (delta < 0 ? 1 : -1));
  };

  return (
    <div className="planet-stage" aria-label="Planètes interactives">
      {planets.map(([key, label, image], index) => {
        const position = positions[((index - step) % 4 + 4) % 4];
        return (
          <button
            key={key}
            type="button"
            className={`planet ${position.className}`}
            onPointerDown={start}
            onPointerUp={end}
            onPointerCancel={() => { drag.current.active = false; }}
            aria-label={`${label}. Faites glisser pour déplacer les planètes.`}
          >
            <img src={image} alt="" draggable={false} />
          </button>
        );
      })}
    </div>
  );
}
