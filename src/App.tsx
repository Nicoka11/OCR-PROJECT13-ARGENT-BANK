import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@src/pages/Home";
import SignIn from "@src/pages/SignIn";
import Layout from "@src/layout/Default";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
