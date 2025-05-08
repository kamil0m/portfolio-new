import MainBackground from "../components/MainBackground"
import CardExperience from "../components/CardExperience"
import CardEducation from "../components/CardEducation"
import CardSkills from "../components/CardSkills"
import cvData from "../assets/cv_data.json"

export default function Cv() {
  return (
    <div className="relative flex flex-col grow">
      < MainBackground />
      <div className="tablet:max-w-3/5 tablet:mx-auto">
        <h2 className="pt-10 w-full text-center">CV</h2>
        <div className="px-6 pt-10">

          <section>
            <div className="flex flex-row justify-between items-center pb-6">
              <h4 className="">Experience</h4>
              <div className="button button-accent text-sm">Download CV</div>
            </div>

            {cvData.experience.map((experience) => (
            <CardExperience key={experience.id} experience={experience}/>
            ))}

          </section>

          <section className="pb-6">
            <h4 className="pt-10 pb-6">Education</h4>

            {cvData.education.map((education) => (
              <CardEducation key={education.id} education={education}/>
            ))}

          </section>

          <section className="pb-6">
            <h4 className="pt-10 pb-6">Skills</h4>
            <CardSkills skills={cvData.skills} />
          </section>

          <section className="pb-6">
            <h4 className="pt-10 pb-6">Hobbies</h4>
            <div className="card flex flex-col bg-main-light py-10 mb-8 w-full
            tablet:flex-row tablet:justify-between">
              <h5 className="mb-2">What I do when the code compiles (on the first try)</h5>
              {cvData.hobbies.map((hobby, index) => (
                <p key={index}>
                  {hobby.name}
                </p>
              ))}
            </div>
          </section>

        </div>
      </div> 
    </div>
  )
}
