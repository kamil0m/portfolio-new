import MainBackground from "../components/MainBackground"
import CardExperience from "../components/CardExperience"
import cvData from "../assets/cv_data.json"

export default function Cv() {
  return (
    <div className="relative flex flex-col grow">
        < MainBackground />
        <h2 className="pt-10 w-full text-center">CV</h2>
        <div className="px-6 pt-10">
            <div className="flex flex-row justify-between items-center pb-6">
                <h4 className="">Experience</h4>
                <div className="button button-accent text-sm">Download CV</div>
            </div>
            {cvData.experience.map((experience) => (
                <CardExperience key={experience.id} experience={experience}/>
            ))}
        </div>
    </div>
  )
}
