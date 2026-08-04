import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import TrackOrder from "./pages/TrackOrder";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Offers from "./pages/Offers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Main />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="ordering" element={<TrackOrder />} />
        <Route path="menu" element={<Menu />} />
        <Route path="offers" element={<Offers />} />
        {/* <Route path="" element={< />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
