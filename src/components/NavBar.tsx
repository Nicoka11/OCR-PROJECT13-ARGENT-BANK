import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => (
  <nav className="main-nav">
    <a className="main-nav-logo" href="/">
      <img
        className="main-nav-logo-image"
        src="/argentBankLogo.png"
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </a>
    <div>
      <a className="main-nav-item" href="/signin">
        <FontAwesomeIcon icon={faCircleUser} />
        Sign In
      </a>
    </div>
  </nav>
);

export default NavBar;
