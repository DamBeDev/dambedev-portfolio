import { useTranslation } from "react-i18next";
import { CertificationCard } from "../ui/CertificationCard"
import { getCertifications } from "@/data/certifications-data";

export const Certifications = () => {
  const { t } = useTranslation();
  const certifications = getCertifications(t);

  return (
    <section
      id="certifications"
      className="
        animate-fade-in 
        scroll-mt-[8rem] 
        w-4/5
        mb-8 md:mb-16 
        px-4 md:px-8 lg:px-16 
        bg-(--bg-dark) 
        rounded-lg 
        shadow-[0_10px_30px_rgba(46,144,255,0.1)] 
        border 
        border-solid 
        border-(--metallic-blue)
      "
    >
      <h2>Certifications</h2>
      <div className="grid template-columns-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
        {certifications.map((certification) => (
          <CertificationCard key={certification.id} {...certification} />
        ))}
      </div>
    </section>
  );
};
