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
                <label className="text-[2em] flex -translate-y-3 tablet:hidden" htmlFor="trigger" >
                <FaBars />
            </label>

            <nav 
                id="navbar__mobile"
                className="
                animate-fade-in-down
                hidden flex flex-col items-center justify-center absolute left-0 top-0 w-full bg-main h-screen z-10 uppercase font-semibold text-2xl
                tablet:static tablet:flex tablet:flex-row tablet:justify-end tablet:h-auto tablet:bg-transparent tablet:w-auto tablet:gap-4 tablet:font-light tablet:text-sm"
                onClick={() => toggleMenu()} 
                >

                    <NavLink to="/" className="my-3 tablet:my-0 aria-[current=page]:text-accent">About me</NavLink>

                    <NavLink to="/cv" className="my-3 tablet:my-0 aria-[current=page]:text-accent">CV</NavLink>

                    <NavLink to="/projects" className="my-3 tablet:my-0 aria-[current=page]:text-accent">My projects</NavLink>   

                    <NavLink className="my-3 tablet:my-0 aria-[current=page]:text-accent" to="/contact" >Contact</NavLink>
            </nav>

        </div>


    </>
  )
}
