import Project from "../models/Project_interface";
import { FaGithub } from "react-icons/fa";
  
export default function CardProject({ project }: {project: Project}) {

  return (
    <div className="card flex flex-col w-full p-0 title-project
    tablet:flex-row tablet:justify-between">

      <div className="relative bg-main-verylight p-6 tablet:w-2/5">

        <a target="_blank" href={`${project.urlGithub}`} className="absolute top-6 right-6 text-accent text-2xl">
          <FaGithub />
        </a>
        <h5 className="text-accent text-xl">{project.name}</h5>
        <p className="mt-3 font-light text-sm text-start">{project.description}</p>
      
        <div className="flex flex-row flex-wrap gap-2 my-2">

          {project.technologiesUsed.map((technology) => (
            <div key={technology.id} className="text-xs font-extralight bg-main border-main-dark border-[1px] px-2 py-1 rounded-full shadow-xl">
              {technology.name}
            </div>
          ))}

        </div>

      </div>

      <div className="bg-[url({project.image})] bg-cover aspect-3/2 tablet:w-3/5"
      style={{ backgroundImage: `url(${project.image})` }}></div>

    </div>
  )
}
