import Footer from "@src/components/Footer";
import NavBar from "@src/components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
