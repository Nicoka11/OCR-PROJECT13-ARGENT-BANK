import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@src/pages/Home";
import Login from "@src/pages/Login";
import Layout from "@src/layout/Default";
import User from "@src/pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
