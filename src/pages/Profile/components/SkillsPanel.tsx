import { profileAssets } from "../../../constants/assets";
import { skillsData } from "../data/skillsData";
import { SkillCard } from "./SkillCard";

export function SkillsPanel() {
  return (
    <div className="skills-panel">
      <div className="skills-title">
        <div className="skills-title-icon">
          <img src={profileAssets.skillsIcon} alt="" />
        </div>
        <h2>COMPÉTENCES</h2>
      </div>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            banner={skill.banner}
            level={skill.level}
            locked={skill.locked}
          />
        ))}
      </div>
    </div>
  );
}
