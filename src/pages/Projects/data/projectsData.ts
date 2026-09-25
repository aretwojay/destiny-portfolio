import { projectAssets } from "../../../constants/assets";
import { ProjectItem } from "../../../types";

export const projectsList: ProjectItem[] = [
  {
    id: "diggers",
    variant: "diggers",
    title: "Diggers Factory",
    subtitle: "Alternance (2026)",
    description:
      "Diggers Factory crée une meilleure façon pour les artistes et les fans de profiter de la musique physique.",
    stack: "React.JS/Node.JS",
    duration: "10 mois (en cours)",
    mission: "Poste : Testeur QA",
    image: projectAssets.diggersImage,
  },
  {
    id: "alps",
    variant: "alps",
    title: "Alps-direct",
    subtitle: "Site-web (2025)",
    description:
      "Service de transfert privé vers les stations de ski françaises, comme notamment Flaine, Avoriaz, Samoens, Morillon, Les Carroz, Les Gets, Megève et bien d'autres.",
    stack: "Next.js/Prisma/Supabase",
    duration: "4 mois (terminé)",
    mission: "Refonte du site internet",
    image: projectAssets.alpsImage,
  },
];

export default projectsList;
