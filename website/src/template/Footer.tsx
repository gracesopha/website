// framer page footer
import React from "react";
import { Link } from "react-router-dom";
import home from "../imgs/home.png"

export function Footer({ title = "" }) {
  return (
    <footer>
      <a
        href="/"
      >
        <img id="homepage" alt="homepage" className="homepage" src={home}/>
      </a>
      <nav>
          <Link to="/">home</Link>
          <Link to="/Contact">contact</Link>
          <Link to="/Projects">projects</Link>
      </nav>
      <p className="footer">© 2023 GRACE SOPHA</p>
    </footer>
  );
}
