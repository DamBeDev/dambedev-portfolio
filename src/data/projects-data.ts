
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  alt?: string;
  siteLink?: string;
  codeLink?: string;
}

export const getProjects = (t: (key: string) => string): Project[] => [
  {
    id: 7,
    title: t("projectsList.grupoImpresor.title"),
    description: t("projectsList.grupoImpresor.description"),
    image: "@/assets/images/gimpresor-hero-1.png",
    alt: t("projectsList.grupoImpresor.alt")
  },
  {
    id: 6,
    title: t("projectsList.fotoesfera.title"),
    description: t("projectsList.fotoesfera.description"),
    image: "@/assets/images/fotoesfera-landing-1.png",
    alt: t("projectsList.fotoesfera.alt")
  },
  {
    id: 5,
    title: t("projectsList.ecowood.title"),
    description: t("projectsList.ecowood.description"),
    image: "@/assets/images/ecowood-landing-1.png",
    alt: t("projectsList.ecowood.alt")
  },
  {
    id: 4,
    title: t("projectsList.kairos.title"),
    description: t("projectsList.kairos.description"),
    image: "@/assets/images/kairos-landing-1.png",
    alt: t("projectsList.kairos.alt"),
  },
  {
    id: 3,
    title: t("projectsList.gmRunning.title"),
    description: t("projectsList.gmRunning.description"),
    image: "@/assets/images/gm-dashboard-1.png",
    alt: t("projectsList.gmRunning.alt"),
  },
  {
    id: 2,
    title: t("projectsList.lvlogistica.title"),
    description: t("projectsList.lvlogistica.description"),
    image: "@/assets/images/lvlogistica2.png",
    alt: t("projectsList.lvlogistica.alt"),
  },
  {
    id: 1,
    title: t("projectsList.flowper.title"),
    description: t("projectsList.flowper.description"),
    image: "@/assets/images/flowper.png",
    alt: t("projectsList.flowper.alt"),
    siteLink: "https://flowper.tech/",
  },
];