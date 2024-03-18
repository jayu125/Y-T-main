import NavMenus from "./navMenus";
import HeaderStyle from "./Header.css";

function Header() {
  return (
    <nav>
      <div className="header" role="banner">
        <div className="header-logo-div">
          <div className="header-logo">(logo)</div>
        </div>
        <div className="header-line"></div>
        <div className="header-menus">
          <div className="header-index">
            <NavMenus text="Home" to="/" />
            <NavMenus text="About" to="/about" />
            {/* <NavMenus text="Menu 3" />
            <NavMenus text="Menu 4" /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
