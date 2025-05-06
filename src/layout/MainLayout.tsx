import {
    Outlet
 } from 'react-router-dom';
 import Logo from '../components/Logo';
 import Navbar from '../components/Navbar';

export function MainLayout() {
    return (
        <>
            <div className="p-4 bg-main-verylight">

                <div className="flex flex-row justify-between h-24 items-center">

                    <Logo />

                    <Navbar />

                </div>

            </div>
            <Outlet/>
        </>
    )
}