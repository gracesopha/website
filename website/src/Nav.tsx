// navigation routes for the website
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Contact } from "./Contact";
import { Projects } from "./Projects";


export const Nav = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects" element={<Projects />} />
        </Routes>
    );
};

export default Nav;

