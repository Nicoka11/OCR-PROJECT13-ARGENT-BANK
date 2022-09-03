import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider, { authStore } from "./store";
import App from "./App";
import "./index.css";
import { LocalStorageKeys } from "./constants/constants";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

window.onbeforeunload = () => {
  const rememberUser = localStorage.getItem(LocalStorageKeys.RememberUser);
  if (!rememberUser) localStorage.removeItem(LocalStorageKeys.AuthToken);
};
