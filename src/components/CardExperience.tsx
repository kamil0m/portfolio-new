import Experience from "../models/Experience_interface.tsx";
  
export default function CardExperience({ experience }: {experience: Experience}) {

  return (
    <div className="card flex flex-col bg-main-light py-10 mb-8
    tablet:flex-row tablet:justify-between">
        <div className="tablet:w-2/5">
            <h5 className="text-accent">{experience.start_date} — {experience.end_date ? experience.end_date : "Present"}</h5>
            <div className="uppercase mt-2">{experience.position}</div>
            <div className="mt-3 font-light text-sm">
                <div>{experience.organization}</div>
                <div>{experience.location}</div>
            </div>
        </div>
        <div className="mt-3 font-light tablet:w-3/5 tablet:pl-4" dangerouslySetInnerHTML={{ __html: experience.responsibilities }}>
            
        </div>
    </div>
  )
}
