import { MainLayout } from "./layout/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Cv from "./pages/Cv";
import StylesTester from "./pages/StylesTester";

import {
    BrowserRouter,
    Routes,
    Route
 } from "react-router-dom"
 
export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< MainLayout />}>
                    <Route path='/' element={< Home />} />
                    <Route path='/cv' element={< Cv />} />
                    <Route path='/projects' element={< Projects />} />
                    <Route path='/skills' element={< Skills />} />
                    <Route path='/contact' element={< Contact />} />
                    <Route path='/styles' element={< StylesTester />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}