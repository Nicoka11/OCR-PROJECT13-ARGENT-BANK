import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@src/layout/Default";
// Pages
import Home from "@src/pages/Home";
import Login from "@src/pages/Login";
import Profile from "@src/pages/Profile";

import { StaticRoutes } from "@src/constants/constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={StaticRoutes.Login} element={<Login />} />
          <Route path={StaticRoutes.Profile} element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
