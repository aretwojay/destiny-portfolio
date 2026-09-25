import { profileAssets } from "../../../constants/assets";
import { SkillItem } from "../../../types";

export function SkillCard({ name, icon, banner, level, locked }: SkillItem) {
  return (
    <div className={`skill-card ${locked ? "skill-card-locked" : ""}`}>
      <div className="skill-banner">
        <img src={banner} alt="" />
        {icon && <img className="skill-symbol" src={icon} alt="" />}
        {!icon && !locked && <span className="skill-name">{name}</span>}
        {locked && (
          <img
            className="skill-lock"
            src={profileAssets.lockIcon}
            alt="Verrouillé"
          />
        )}
      </div>
      <div className="skill-level">
        {!locked && <span style={{ width: `${level}%` }} />}
      </div>
    </div>
  );
}
