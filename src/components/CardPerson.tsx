import aboutmePhoto from '../assets/KM_aboutme.jpeg'
import { NavLink } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function CardPerson(props: object) {
  return (
    <div className="flex flex-col items-center w-7/10 h-auto bg-main shadow-2xl -translate-y-3/5">
        <div className="w-30 h-30 bg-cover rounded-full mt-7"
        style={{ backgroundImage: `url(${aboutmePhoto})` }}></div>
        <div className="w-30 text-center text-2xl font-semibold mt-4">{props.name}</div>
        <div className="w-20 h-[2px] mt-4 bg-accent"></div>
        <div className="mt-5">
            < NavLink className="inline-flex items-center justify-center min-w-30 h-8 rounded-full bg-accent m-2 border-2 border-accent text-white active:text-black active:bg-main uppercase" to="/">CV</NavLink>
            < NavLink className="inline-flex items-center justify-center min-w-30 h-8 rounded-full bg-main border-black m-2 border active:bg-accent active:border-accent active:text-white uppercase" to="/projects">Projects</NavLink>
        </div>
        <div className="flex flex-row justify-center items-center h-10 w-full bg-main-verylight mt-8 mb-3 shadow-2xl text-xl gap-4">
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
