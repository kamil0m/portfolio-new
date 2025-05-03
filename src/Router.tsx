import { MainLayout } from "./layout/MainLayout";
import Home from "./pages/Home";
import Aboutme from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

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
                    <Route path='/aboutme' element={< Aboutme />} />
                    <Route path='/projects' element={< Projects />} />
                    <Route path='/skills' element={< Skills />} />
                    <Route path='/contact' element={< Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}