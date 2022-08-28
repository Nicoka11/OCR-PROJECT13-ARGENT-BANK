import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "@src/pages/Home";
import SignIn from "@src/pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
