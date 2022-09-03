import { LocalStorageKeys, StaticRoutes } from "@src/constants/constants";
import { authStore } from "@src/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const authRedirection = () => {
  const fromLocalStorage = !!localStorage.getItem(LocalStorageKeys.AuthToken);
  const isConnected = !!authStore.getState().auth.token || fromLocalStorage;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isConnected) {
      navigate(StaticRoutes.Login);
    }
  });
};

export default authRedirection;
