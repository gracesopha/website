// navigation routes for the website
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { Projects } from "./Projects";
import { Hawkstagram } from "./Hawkstagram";


export const Nav = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Hawkstagram" element={<Hawkstagram />} />
        </Routes>
    );
};

export default Nav;

