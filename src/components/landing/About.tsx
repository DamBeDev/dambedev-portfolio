import { useTranslation } from "react-i18next";
import { Badge } from "../ui/Badge";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="animate-fade-in scroll-mt-[8rem] mb-8 md:mb-16 px-4 md:px-8 lg:px-16 bg-(--bg-dark) rounded-lg shadow-[0_10px_30px_rgba(46,144,255,0.1)] border border-solid border-(--metallic-blue)">
        <h2>{t("about.title")}</h2>
        <div className="grid grid-cols-[300px,1fr] gap-4 items-center">
          <div>
            <img
              className="w-3xs h-3xs rounded-full shadow-[0_10px_25px_rgba(46,144,255,0.2)] border-2 border-solid border-(--metallic-blue)"
              src="./assets/images/profile_image.png"
            />
          </div>
          <div>
            <h3 className="text-3xl mb-2 bg-linear-[135deg,var(--primary-blue),var(--accent-blue)] bg-clip-text color-transparent">Damian Berrojalvis</h3>
            <p className="mb-2 color-(--text-secondary) text-lg">
              {t("about.shortDescription1")}
            </p>
            <p className="mb-2 color-(--text-secondary) text-lg">
              {t("about.shortDescription2")}
            </p>
            <div className="mt-2 flex gap-2 items-center justify-center">
              <Badge>Django</Badge>
              <Badge>FastAPI</Badge>
              <Badge>Next.js</Badge>
              <Badge>React</Badge>
              <Badge>AWS</Badge>
              <Badge>GCP</Badge>
              <Badge>GitHub</Badge>
            </div>
          </div>
        </div>
      </section>
  )
}