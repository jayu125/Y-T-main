import Header from "./header.js";
import { Link } from "react-router-dom";
const NavMenus = ({ text, to }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <div className="header-content">
        <div className="nav-menu">
          <span className="nav-text">{text}</span>
        </div>
        <div className="for-underline"></div>
      </div>
    </Link>
  );
};

export default NavMenus;
