import MainBackground from "../components/MainBackground"
import CardProject from "../components/CardProject"
import projectsData from "../assets/projects.json"

export default function Projects() {
  return (
    <div className="relative flex flex-col grow">
      < MainBackground />
      <section className="py-14 text-center mx-6 tablet:max-w-3/5 tablet:mx-auto">

        <h2 className="w-full text-center">Projects</h2>
        <h3 className="m-6">A glimpse into what I’ve been building — real-world applications, experiments, and creative ideas turned into code. Each project helped me grow as a developer.</h3>
        <div className="flex flex-col items-center gap-16">
          {projectsData.map((project) => (
            <CardProject key={project.id} project={project}/>
          ))}
        </div>

      
      </section>
    </div>
    
  )
}
