import { TechIcon } from "../../../components/common/TechIcon";
import { projectAssets } from "../../../constants/assets";

interface ProjectCardProps {
  variant?: "diggers" | "alps";
  title: string;
  subtitle: string;
  description: string;
  stack: string;
  duration: string;
  mission: string;
  image: string;
  onOpen: () => void;
}

export function ProjectCard({
  variant = "diggers",
  title,
  subtitle,
  description,
  stack,
  duration,
  mission,
  image,
  onOpen,
}: ProjectCardProps) {
  const isAlps = variant === "alps";

  return (
    <button
      type="button"
      className={`project-card project-card-${variant}`}
      onClick={onOpen}
      aria-label={`Ouvrir ${title}`}
    >
      <div className="project-info">
        <div className="project-icon">
          <img
            src={isAlps ? projectAssets.emblem : projectAssets.diggers}
            alt=""
          />
        </div>
        <div className="project-copy">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <div className="project-techs">
          {isAlps ? (
            <TechIcon src={projectAssets.next} alt="Next.js" />
          ) : (
            <>
              <TechIcon src={projectAssets.react} alt="React" />
              <TechIcon src={projectAssets.node} alt="Node.js" />
            </>
          )}
        </div>
      </div>
      <div className="project-image">
        <img src={image} alt="" />
      </div>
      <div className="project-description">
        <p>{description}</p>
        <p className="project-meta">Stack : {stack}</p>
        <p className="project-meta">Durée : {duration}</p>
        <p className="project-meta">Mission : {mission}</p>
      </div>
    </button>
  );
}
