import {
    NavLink,
    Outlet
 } from 'react-router-dom';

export function MainLayout() {
    return (
        <>
            <nav className='navbar' >
                <NavLink to="/" className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'}>Home</NavLink>

                <NavLink to="/aboutme" className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'}>About me</NavLink>

                <NavLink to="/cv" className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'}>CV</NavLink>

                <NavLink to="/projects" className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'}>My projects</NavLink>  

                <NavLink to="/skills" className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'}>My skills</NavLink>     

                <NavLink className={({ isActive }) => isActive ? 'navbar__element tab-current' : 'navbar__element'} to="/contact" >Contact</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}