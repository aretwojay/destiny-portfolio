import { useRef, useState, type PointerEvent } from "react";
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
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const drag = useRef({
    active: false,
    startX: 0,
    startY: 0,
    moved: false,
    triggered: false,
  });

  const animatingRef = useRef(false);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    // Prevent starting a new drag while rotation animation is in progress
    if (animatingRef.current) return;

    drag.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      moved: false,
      triggered: false,
    };
    event.currentTarget.setPointerCapture?.(event.pointerId);
    document.body.classList.add("is-dragging");
    setIsDragging(true);
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    // Once triggered for this drag gesture, STOP and do not fire again
    if (drag.current.triggered) return;

    const dx = event.clientX - drag.current.startX;
    const dy = event.clientY - drag.current.startY;

    if (Math.abs(dx) > 3) {
      drag.current.moved = true;
    }

    const TRIGGER_THRESHOLD = 20;

    if (Math.abs(dx) >= TRIGGER_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      // Trigger ONE rotation animation for this drag gesture
      drag.current.triggered = true;
      animatingRef.current = true;
      setDragOffset(0);

      const direction = dx < 0 ? 1 : -1;
      setStep((current) => current + direction);

      // Lock until the rotation animation completes (~850ms)
      setTimeout(() => {
        animatingRef.current = false;
      }, 850);
      return;
    }

    // Micro visual drag before triggering
    setDragOffset(dx * 0.4);
  };

  const onPointerUp = () => {
    if (!drag.current.active) return;
    drag.current.active = false;
    document.body.classList.remove("is-dragging");
    setIsDragging(false);
    setDragOffset(0);
  };

  const onPlanetClick = (index: number) => {
    if (drag.current.moved || animatingRef.current) return;
    const currentPos = (((index - step) % 4) + 4) % 4;
    if (currentPos === 2) return;

    animatingRef.current = true;
    if (currentPos === 0) setStep((s) => s + 2);
    else if (currentPos === 1) setStep((s) => s - 1);
    else if (currentPos === 3) setStep((s) => s + 1);

    setTimeout(() => {
      animatingRef.current = false;
    }, 850);
  };

  return (
    <div
      className={`planet-stage ${isDragging ? "drag-active" : ""}`}
      aria-label="Planètes interactives"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {planets.map(([key, label, image], index) => {
        const position = positions[(((index - step) % 4) + 4) % 4];
        return (
          <button
            key={key}
            type="button"
            className={`planet ${position.className}`}
            onClick={() => onPlanetClick(index)}
            aria-label={`${label}. Faites glisser pour déplacer les planètes.`}
            style={
              dragOffset !== 0
                ? {
                    transform: `translate3d(${dragOffset}px, 0, 0)`,
                    transition: isDragging
                      ? "transform 50ms linear"
                      : undefined,
                  }
                : undefined
            }
          >
            <span className="planet-halo" />
            <img src={image} alt="" draggable={false} />
          </button>
        );
      })}
    </div>
  );
}
