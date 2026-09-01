import { Outlet } from "react-router";
import { NavBar, Footer } from "../layouts";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
