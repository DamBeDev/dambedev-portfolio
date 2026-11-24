import { cn } from "cn"
import { type Project } from '../../data/projects-data'

export const ProjectCard = (project: Project) => {
  return (
    <div className="bg-(--bg-card) rounded-lg p-6 shadow-[0_4px_6px_rgba(0,0,0,0.2)] border border-solid border-(--metallic-blue)">
      <img src={project.images[0].src} alt={project.alt} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="display-flex gap-4">
        <a 
          href={project.siteLink ?? "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          className={cn(
            "no-underline font-bold bg-linear-[135deg,var(--primary-blue),var(--accent-blue)] bg-clip-text text-transparent",
            !project.siteLink && "pointer-events-none opacity-40 cursor-not-allowed"
          )}
        >
          Site
        </a>
        <a 
          href={project.codeLink ?? "#"} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={cn(
            "no-underline font-bold bg-linear-[135deg,var(--primary-blue),var(--accent-blue)] bg-clip-text text-transparent",
            !project.codeLink && "pointer-events-none opacity-40 cursor-not-allowed"
          )}
        >
          Code
        </a>
      </div>
    </div>
  )
}