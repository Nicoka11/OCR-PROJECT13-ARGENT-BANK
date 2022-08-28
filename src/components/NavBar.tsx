import { useLocation } from "react-router-dom";
const NavBar = () => {
  const pathname = useLocation().pathname;
  const isDisconnected = pathname === "/" || pathname === "/signin";

  return (
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
        {isDisconnected ? (
          <a className="main-nav-item" href="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        ) : (
          <>
            <a className="main-nav-item" href="/user">
              <i className="fa fa-user-circle"></i>
              Tony
            </a>
            <a className="main-nav-item" href="/">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
