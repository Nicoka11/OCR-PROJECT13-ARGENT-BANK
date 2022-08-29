import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import authStore from "./store";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={authStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
