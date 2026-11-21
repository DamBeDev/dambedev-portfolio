import { useTranslation } from "react-i18next";
import { ProjectCard } from '../ui/ProjectCard'
import { getProjects } from "@/data/projects-data";


export const Projects = () => {
  const { t } = useTranslation();
  const projects = getProjects(t);
  
  return (
    <section id="projects" className="animate-fade-in scroll-mt-[8rem] mb-8 md:mb-16 px-4 md:px-8 lg:px-16 bg-(--bg-dark) rounded-lg shadow-[0_10px_30px_rgba(46,144,255,0.1)] border border-solid border-(--metallic-blue)">
      <h2>Projects</h2>
      <div className="grid template-columns-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}