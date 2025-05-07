import {
    Outlet
 } from 'react-router-dom';
 import Header from '../components/Header';
 import Footer from '../components/Footer';

export function MainLayout() {
    return (
        <div className="flex flex-col min-h-dvh w-full selection:bg-green-400">

            <Header/>
            <Outlet/>
            <Footer/>

        </div>
    )
}