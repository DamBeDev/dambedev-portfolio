import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen max-h-screen overflow-hidden" id="hero">
      <div
        className="absolute inset-0 w-full z-0"
        style={{
          background: `linear-gradient(rgba(17, 17, 17, 0.3), rgba(17, 17, 17, 0.3)), url('/images/hero_background_2.jfif') no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 md:pt-56 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-[135deg,var(--primary-blue),var(--accent-blue)] bg-clip-text text-transparent">{t("hero.title")}</h1>
        <p className="text-3xl text-(--text-secondary) font-semibold backdrop-blur-md mb-4">{t("hero.description")}</p>
        <a href="#projects" 
          className="
            inline-block 
            px-1.5 
            py-3 
            bg-linear-[135deg,var(--primary-blue),var(--accent-blue)]
            text-white
            rounded-sm
            no-underline
            font-medium
            transition-(--transition)
            border-none
            cursor-pointer
            shadow-[0_2px_10px_rgba(46,144,255,0.2)]
            text-shadow-[1px_1px_2px_black]
            hover:bg-linear-[135deg,var(--hover-blue),var(--primary-blue)]
            hover:shadow-[0_4px_15px_rgba(46,144,255,0.3)]
          "
        >{t("hero.cta")}</a>
      </div>
    </section>     
  )
}

