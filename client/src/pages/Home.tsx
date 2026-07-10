import { Outlet } from "react-router";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
