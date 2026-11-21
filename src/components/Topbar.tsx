import { useTranslation } from "react-i18next";
import { NavItem } from "./ui/NavItem"
import { NavLogo } from "./NavLogo"
import LanguageSwitcher from "./LanguageSwitcher";

export const Topbar = () => {
  const { t } = useTranslation();

  return (
    <header 
      className="
        flex 
        justify-between 
        items-center 
        px-4 
        py-6 
        bg-[#121212] 
        bg-opacity-80 
        backdrop-blur-xs 
        sticky 
        top-0 
        z-50 
        border-b-2 
        border-b-(--metallic-blue) 
        border-solid 
        shadow-md
      "
      >
      <NavLogo />
      <nav className="flex gap-6 py-1">
        <NavItem text={t("navbar.about")} href="#about" />
        <NavItem text={t("navbar.projects")} href="#projects" />
        <NavItem text={t("navbar.certifications")} href="#certifications" />
        <NavItem text={t("navbar.contact")} href="#contact" />
        <LanguageSwitcher />
      </nav>
    </header>
  )
}