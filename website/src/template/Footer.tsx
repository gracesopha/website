// framer page footer
import React from "react";
import { Link } from "react-router-dom";

export function Footer({ title = "" }) {
  return (
    <footer>
      <a href="/">♡</a>
      <nav>
          <Link to="/">home</Link>
          <Link to="/Contact">contact</Link>
          <Link to="/Projects">projects</Link>
      </nav>
      <p className="footer">© 2023 GRACE SOPHA</p>
    </footer>
  );
}
