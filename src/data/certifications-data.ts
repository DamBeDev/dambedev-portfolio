
export type Certification = {
  id: number;
  title: string;
  provider: string;
  date: string;
  image: string;
  alt?: string;
}

export const getCertifications = (t: (key: string) => string): Certification[] => [
  {
    id: 9,
    title: t("certificationsList.awsCloudFormationStarted.title"),
    provider: t("certificationsList.awsCloudFormationStarted.provider"),
    date: t("certificationsList.awsCloudFormationStarted.date"),
    image: "./assets/certificates/AWS_CloudFormation_Getting_Started.png",
    alt: t("certificationsList.awsCloudFormationStarted.alt")
  },
  {
    id: 8,
    title: t("certificationsList.googleProjectManagement.title"),
    provider: t("certificationsList.googleProjectManagement.provider"),
    date: t("certificationsList.googleProjectManagement.date"),
    image: "./assets/certificates/Google_Project_Management.png",
    alt: t("certificationsList.googleProjectManagement.alt")
  },
  {
    id: 7,
    title: t("certificationsList.pythonOOPAlura.title"),
    provider: t("certificationsList.pythonOOPAlura.provider"),
    date: t("certificationsList.pythonOOPAlura.date"),
    image: "./assets/certificates/Alura_Python_POO.png",
    alt: t("certificationsList.pythonOOPAlura.alt")
  },
  {
    id: 6,
    title: t("certificationsList.openlabHackathon.title"),
    provider: t("certificationsList.openlabHackathon.provider"),
    date: t("certificationsList.openlabHackathon.date"),
    image: "./assets/certificates/Damian Berrojalvis - Hackathon OpenLab.png",
    alt: t("certificationsList.openlabHackathon.alt")
  },
  {
    id: 5,
    title: t("certificationsList.wakiHackathon.title"),
    provider: t("certificationsList.wakiHackathon.provider"),
    date: t("certificationsList.wakiHackathon.date"),
    image: "./assets/certificates/Damian Berrojalvis - Hackathon WAKI.png",
    alt: t("certificationsList.wakiHackathon.alt")
  },
  {
    id: 4,
    title: t("certificationsList.justinaHackathon.title"),
    provider: t("certificationsList.justinaHackathon.provider"),
    date: t("certificationsList.justinaHackathon.date"),
    image: "./assets/certificates/Damian Berrojalvis - Hackathon Justina.png",
    alt: t("certificationsList.justinaHackathon.alt")
  },
  {
    id: 3,
    title: t("certificationsList.unamAndroidAppDev.title"),
    provider: t("certificationsList.unamAndroidAppDev.provider"),
    date: t("certificationsList.unamAndroidAppDev.date"),
    image: "./assets/certificates/Certificado_Introducción_Desarrollo_Aplicaciones_Android.png",
    alt: t("certificationsList.unamAndroidAppDev.alt")
  },
  {
    id: 2,
    title: t("certificationsList.unamIntermediatePython.title"),
    provider: t("certificationsList.unamIntermediatePython.provider"),
    date: t("certificationsList.unamIntermediatePython.date"),
    image: "./assets/certificates/Certificado_Python_Intermedio_Desarrollo_Aplicaciones.png",
    alt: t("certificationsList.unamIntermediatePython.alt")
  },
  {
    id: 1,
    title: t("certificationsList.intiIntroductionToProgramming.title"),
    provider: t("certificationsList.intiIntroductionToProgramming.provider"),
    date: t("certificationsList.intiIntroductionToProgramming.date"),
    image: "./assets/certificates/Certificado_Introducción_Programación.png",
    alt: t("certificationsList.intiIntroductionToProgramming.alt")
  }
];