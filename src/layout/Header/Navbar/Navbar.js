import { Link, Outlet } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="k-main-nav">
      <ul>
        <li>
          <Link to="/">ACCUEIL</Link>
        </li>
        <li>
          <Link to="/about">A&nbsp;PROPOS</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}
