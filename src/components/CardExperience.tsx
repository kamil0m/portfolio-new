interface Experience {
    id: string;
    start_date: string;
    end_date?: string;
    position: string;
    organization: string;
    location: string;
    responsabilities: string;
  }
  
export default function CardExperience({ experience }: {experience: Experience}) {

  return (
    <div className="card flex flex-col bg-main-light py-10 mb-8
    tablet:flex-row">
        <div>
            <h5 className="text-accent">{experience.start_date} - Add end date</h5>
            <div className="uppercase">{experience.position}</div>
            <div className="mt-4 font-light text-sm">
                <div>{experience.organization}</div>
                <div>{experience.location}</div>
            </div>
        </div>
        <div id={"expContainer" + experience.id} className="mt-6 font-light" dangerouslySetInnerHTML={{ __html: experience.responsibilities }}>
            
        </div>
    </div>
  )
}
