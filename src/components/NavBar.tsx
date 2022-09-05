import { LocalStorageKeys, StaticRoutes } from "@src/constants/constants";
import { UserProfileBody } from "@src/services/argentBank.interface";
import { authStore } from "@src/store";
import { resetToken } from "@src/store/authReducer";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const isDisconnected =
    pathname === StaticRoutes.Landing || pathname === StaticRoutes.Login;
  const [name, setName] = useState("");
  useEffect(() => {
    if (!isDisconnected) {
      const profile: UserProfileBody = JSON.parse(
        localStorage.getItem(LocalStorageKeys.UserProfile) as string
      );
      setName(profile.firstName);
    }
  }, [isDisconnected]);

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
              {name}
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
