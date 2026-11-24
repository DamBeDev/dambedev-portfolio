export type projectImage = {
  id: number;
  src: string;
}

export type Project = {
  id: number;
  title: string;
  description: string;
  images: projectImage[];
  alt?: string;
  siteLink?: string;
  codeLink?: string;
  important?: boolean;
}

export const getProjects = (t: (key: string) => string): Project[] => [
  {
    id: 7,
    title: t("projectsList.grupoImpresor.title"),
    description: t("projectsList.grupoImpresor.description"),
    images: [
      {
        id: 1,
        src: "@/assets/images/gimpresor-hero-1.png"
      },
      {
        id: 2,
        src: "@/assets/images/gimpresor-hero-2.png"
      },
      {
        id: 3,
        src: "@/assets/images/gimpresor-hero-3.png"
      },
      {
        id: 4,
        src: "@/assets/images/gimpresor-portfolio-1.png"
      },
      {
        id: 5,
        src: "@/assets/images/gimpresor-portfolio-2.png"
      }
    ],
    alt: t("projectsList.grupoImpresor.alt"),
    important: true,
  },
  {
    id: 6,
    title: t("projectsList.fotoesfera.title"),
    description: t("projectsList.fotoesfera.description"),
    images: [
      {
        id: 1,
        src: "@/assets/images/fotoesfera-landing-1.png"
      },
      {
        id: 2,
        src: "@/assets/images/fotoesfera-campaign-1.png"
      },
      {
        id: 3,
        src: "@/assets/images/fotoesfera-pricing-1.png"
      },
      {
        id: 4,
        src: "@/assets/images/fotoesfera-signin-1.png"
      },
      {
        id: 5,
        src: "@/assets/images/fotoesfera-dashboard-1.png"
      },
      {
        id: 6,
        src: "@/assets/images/fotoesfera-studio-1.png"
      },
      {
        id: 7,
        src: "@/assets/images/fotoesfera-billing-1.png"
      }
    ],
    alt: t("projectsList.fotoesfera.alt"),
    siteLink: "https://fotoesfera3d.com/",
    important: true,
  },
  {
    id: 5,
    title: t("projectsList.ecowood.title"),
    description: t("projectsList.ecowood.description"),
    images: [
      {
        id: 1,
        src: "@/assets/images/ecowood-landing-1.png"
      },
      {
        id: 2,
        src: "@/assets/images/ecowood-landing-2.png"
      },
      {
        id: 3,
        src: "@/assets/images/ecowood-projects-1.png"
      },
      {
        id: 4,
        src: "@/assets/images/ecowood-services-1.png"
      }
    ],
    alt: t("projectsList.ecowood.alt"),
    important: true,
  },
  {
    id: 4,
    title: t("projectsList.kairos.title"),
    description: t("projectsList.kairos.description"),
    images: [
      {
        id: 1,
        src: "@/assets/images/kairos-landing-1.png"
      },
      {
        id: 2,
        src: "@/assets/images/kairos-landing-2.png"
      },
      {
        id: 3,
        src: "@/assets/images/kairos-landing-3.png"
      },
      {
        id: 4,
        src: "@/assets/images/kairos-landing-4.png"
      },
      {
        id: 5,
        src: "@/assets/images/kairos-login-1.png"
      },
      {
        id: 6,
        src: "@/assets/images/kairos-dashboard-1.png"
      },
      {
        id: 7,
        src: "@/assets/images/kairos-experiences-1.png"
      },
      {
        id: 8,
        src: "@/assets/images/kairos-new-experience-1.png"
      },
      {
        id: 9,
        src: "@/assets/images/kairos-calendar-1.png"
      },
      {
        id: 10,
        src: "@/assets/images/kairos-calendar-2.png"
      },
      {
        id: 11,
        src: "@/assets/images/kairos-reserves-1.png"
      }
    ],
    alt: t("projectsList.kairos.alt"),
    siteLink: "https://www.kairospatagonia.com/",
    important: true,
  },
  {
    id: 3,
    title: t("projectsList.gmRunning.title"),
    description: t("projectsList.gmRunning.description"),
    images: [
      {
        id: 1,
        src: "@/assets/images/gm-dashboard-1.png"
      },
      {
        id: 2,
        src: "@/assets/images/gm-myraces-1.png"
      }
    ],
    alt: t("projectsList.gmRunning.alt"),
  },
  {
    id: 2,
    title: t("projectsList.lvlogistica.title"),
    description: t("projectsList.lvlogistica.description"),
    images: [
      {
        id: 1,
        src: "@/assets/images/lvlogistica.png"
      },
      {
        id: 2,
        src: "@/assets/images/lvlogistica2.png"
      }
    ],
    alt: t("projectsList.lvlogistica.alt"),
  },
  {
    id: 1,
    title: t("projectsList.flowper.title"),
    description: t("projectsList.flowper.description"),
    images: [
      {
        id: 1,
        src: "@/assets/images/flowper.png"
      }
    ],
    alt: t("projectsList.flowper.alt"),
    siteLink: "https://flowper.tech/",
  },
];