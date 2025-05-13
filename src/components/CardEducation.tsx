import Education from "../models/Education_interface.tsx";
  
export default function Cardeducation({ education }: {education: Education}) {

  return (
    <div className="card flex flex-col bg-main-light py-10 mb-8 w-full
    tablet:flex-row tablet:justify-between">
        <div className="tablet:w-2/5">
            <h5 className="text-accent">{education.end_date}</h5>
            <div className="uppercase mt-2">{education.title}</div>
            <div className="mt-3 font-light text-sm">
                <div>{education.provider}</div>
                <div>{education.format}</div>
            </div>
        </div>
        <div className="tablet:w-3/5 tablet:pl-4">
          <div className="mt-3 text-sm">{education.speciality}</div>
          <div className="mt-3 font-light flex flex-row flex-wrap gap-2">

            {Array.isArray(education.topics) && education.topics.map((topic: string, index: number) => (
              <div key={index} className="text-xs font-extralight bg-main border-main-dark border-[1px] px-2 py-1 rounded-full shadow-xl">
                {topic}
              </div>
            ))}
              
          </div>
        </div>

    </div>
  )
}
