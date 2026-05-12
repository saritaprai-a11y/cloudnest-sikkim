import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-section">
        <div className="logo">CloudNest Sikkim</div>
        <span className="tagline">
          Himalayan Homestays
        </span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/homestays">Homestays</Link></li>
        <li><Link to="/experiences">Experiences</Link></li>
        <li><Link to="/culture">Culture</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

    </nav>
  );
}

export default Navbar;