import { TechIconProps } from "../../types";

export function TechIcon({ src, alt, className = "tech-icon" }: TechIconProps) {
  return <img className={className} src={src} alt={alt} />;
}
