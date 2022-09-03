import { LocalStorageKeys, StaticRoutes } from "@src/constants/constants";
import { authStore } from "@src/store";
import { resetToken } from "@src/store/authReducer";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const isDisconnected = pathname === "/" || pathname === "/signin";

  const onSignOut = () => {
    localStorage.removeItem(LocalStorageKeys.AuthToken);
    localStorage.removeItem(LocalStorageKeys.RememberUser);
    navigate(StaticRoutes.Landing);
    authStore.dispatch(resetToken());
  };

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
            <button className="main-nav-item" onClick={onSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
