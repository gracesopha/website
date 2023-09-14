// framer page footer
import { Link } from "react-router-dom";

export function Footer({ title = "" }) {
  return (
    <footer>
      <a
        href="https://www.framer.com/docs/scroll-animations/"
        target="_blank"
        rel="noreferrer"
      >
        <code>{title}</code>
      </a>
      <nav>
          <Link to="/">home</Link>
          <Link to="/Contact">contact</Link>
          <Link to="/Projects">projects</Link>
        </nav>
    </footer>
  );
}
