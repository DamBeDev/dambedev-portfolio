import { type Certification } from "../../data/certifications-data"

export const CertificationCard = (certification: Certification) => {
  return (
    <div 
      className="
        bg-(--bg-card) 
        rounded-lg 
        p-6 
        shadow-[0_4px_6px_rgba(0,0,0,0.1)] 
        border-l-4 
        border-solid 
        border-(--primary-blue)
        hover:shadow-[0_6px_15px_rgba(46,144,255,0.15)]
      "
    >
      <img 
        src={certification.image} 
        alt={certification.alt} 
        className="w-full h-auto rounded-md mb-4 shadow-[0_4px_10px_rgba(46,144,255,0.2)]"
      />
      <h3>{certification.title}</h3>
      <p>{certification.provider}</p>
      <p>{certification.date}</p>
    </div>
  );
};