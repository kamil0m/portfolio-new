import { FaBars } from "react-icons/fa6";
import {
    NavLink
} from 'react-router-dom';


export default function Navbar() {

    const toggleMenu = () => {
        const mobileMenu = document.getElementById('navbar__mobile');
        mobileMenu?.classList.toggle("hidden");
    }


  return (
    <>
        <div>

            <input 
                className="hidden"
                type="checkbox" 
                id="trigger"
                onChange={() => toggleMenu()}
            />
                
            <label className="text-[3em] absolute right-0 top-0 z-11 p-4" htmlFor="trigger" >
                <FaBars />
            </label>

            <nav 
                id="navbar__mobile"
                className="absolute left-0 top-0 w-full bg-main flex flex-col items-center justify-center h-screen z-10 uppercase font-semibold text-2xl"
                onClick={() => toggleMenu()} 
                >

                    <NavLink to="/" className="my-3 aria-[current=page]:text-accent">Home</NavLink>

                    <NavLink to="/aboutme" className="my-3 aria-[current=page]:text-accent">About me</NavLink>

                    <NavLink to="/cv" className="my-3 aria-[current=page]:text-accent">CV</NavLink>

                    <NavLink to="/projects" className="my-3 aria-[current=page]:text-accent">My projects</NavLink>  

                    <NavLink to="/skills" className="my-3 aria-[current=page]:text-accent">My skills</NavLink>     

                    <NavLink className="my-3 aria-[current=page]:text-accent" to="/contact" >Contact</NavLink>
            </nav>

        </div>


    </>
  )
}
