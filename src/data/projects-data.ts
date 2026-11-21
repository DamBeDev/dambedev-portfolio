
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
    id: 1,
    title: t("projectsList.flowper.title"),
    description: t("projectsList.flowper.description"),
    image: "@/assets/images/flowper.png",
    alt: t("projectsList.flowper.alt"),
    siteLink: "https://flowper.tech/",
  },
  {
    id: 2,
    title: t("projectsList.lvlogistica.title"),
    description: t("projectsList.lvlogistica.description"),
    image: "@/assets/images/lvlogistica2.png",
    alt: t("projectsList.lvlogistica.alt"),
  }
];