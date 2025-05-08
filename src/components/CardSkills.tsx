import Skills from "../models/Skills_interface.tsx";
  
export default function CardSkill({ skills }: {skills: Skills}) {

    function orderAlphabetically<T extends { name: string }>(skills: T[]): T[] {
        return skills.sort((a, b) => a.name.localeCompare(b.name));
    }

    skills.technical = orderAlphabetically(skills.technical);
    console.log(skills.technical);
    skills.soft = orderAlphabetically(skills.soft);
    skills.languages = orderAlphabetically(skills.languages);

  return (
    <div className="card flex flex-col bg-main-light py-10 mb-8 w-full
    tablet:flex-row tablet:justify-between">

        <div className="mb-4">
            <h5>Technical skills</h5>
            <div className="flex flex-row flex-wrap gap-2 my-2">
                {skills.technical.map((skill, index) => (
                <div key={index} className="text-xs font-extralight bg-main border-main-dark border-[1px] px-2 py-1 rounded-full shadow-xl">
                    {skill.name}
                </div>
                ))}
            </div>
        </div>

        <div className="mb-4">
            <h5>Soft skills</h5>
            <div className="flex flex-row flex-wrap gap-2 my-2">
                {skills.soft.map((skill, index) => (
                <div key={index} className="text-xs font-extralight bg-main border-main-dark border-[1px] px-2 py-1 rounded-full shadow-xl">
                    {skill.name}
                </div>
                ))}
            </div>
        </div>

        <div>
            <h5>Spoken languages</h5>
            <div className="flex flex-row flex-wrap gap-2 my-2">
                {skills.languages.map((language, index) => (
                <div key={index} className="text-xs font-extralight bg-main border-main-dark border-[1px] px-2 py-1 rounded-full shadow-xl">
                    {language.name}
                </div>
                ))}
            </div>
        </div>

    </div>
  )
}
