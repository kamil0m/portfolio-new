import MainBackground from "../components/MainBackground"
import CardProject from "../components/CardProject"
import projectsData from "../assets/projects.json"

export default function Projects() {
  return (
    <div className="relative flex flex-col grow">
      < MainBackground />
      <section className="px-6 pt-10 text-center tablet:max-w-3/5 tablet:mx-auto">
        <h2 className="pt-10 w-full text-center">Projects</h2>
        <p className="m-6">A glimpse into what I’ve been building — real-world applications, experiments, and creative ideas turned into code. Each project helped me grow as a developer.</p>
        {projectsData.map((project) => (
          <CardProject key={project.id} project={project}/>
        ))}

        
      </section>
    </div>
    
  )
}
