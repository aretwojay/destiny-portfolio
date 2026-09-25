export type PageKey = "ACCUEIL" | "PROFIL" | "PROJETS" | "CONTACT";

export interface HeaderProps {
  active: PageKey;
  setActive: (page: PageKey) => void;
  projects?: boolean;
}

export interface TechIconProps {
  src: string;
  alt: string;
  className?: string;
}

export interface ProjectItem {
  id: string;
  variant: "diggers" | "alps";
  title: string;
  subtitle: string;
  description: string;
  stack: string;
  duration: string;
  mission: string;
  image: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  banner: string;
  level: number;
  locked: boolean;
}

export interface PageProps {
  active: PageKey;
  setActive: (page: PageKey) => void;
}
