import Hobby from "../models/Hobby_interface"

export default function CardHobbies({hobbies}: {hobbies: Hobby[]}) {
  return (
    <div className="card flex flex-col bg-main-light py-10 mb-8 w-full">
              <h5 className="mb-2">What I do when the code compiles (on the first try)</h5>
              {hobbies.map((hobby, index) => (
                <p key={index}>
                  {hobby.name}
                </p>
              ))}
            </div>
  )
}
