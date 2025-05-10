import aboutmePhoto from '../assets/KM_aboutme.jpeg'
import { NavLink } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function CardPerson(props: object) {
  return (
    <div className="card flex flex-col items-center w-[340px] h-auto bg-main 
    tablet:top-200 tablet:translate-x-1/2 tablet:p-0">
      <div className="flex flex-col items-center w-40">
        <div className="w-full aspect-square bg-cover rounded-full mt-10"
        style={{ backgroundImage: `url(${aboutmePhoto})` }}></div>
        <div className="w-full text-center text-2xl font-semibold mt-6">{props.name}</div>
        <div className="w-3/5 h-[3px] mt-6 bg-accent"></div>
      </div>

      {/* For mobile view only */}
      <div className="flex mt-10 gap-6 tablet:hidden">
        < NavLink className="button button-accent" to="/">CV</NavLink>
        < NavLink className="button button-transparent" to="/projects">Projects</NavLink>
      </div>

      {/* For desktop view only */}
      <div className="hidden font-light uppercase tracking-[0.25em] mt-9 text-xl tablet:flex ">
        <span>Web developer</span>
      </div>

      <div className="flex flex-row justify-center items-center h-11 w-full bg-main-verylight mt-10 mb-5 shadow-2xl text-xl gap-6
      tablet:mt-15 tablet:mb-0">
        <a target="_blank" href="https://github.com/kamil0m">
          <FaGithub />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/kamil0m/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}
