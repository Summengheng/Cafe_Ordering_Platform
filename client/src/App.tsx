import { Route, Routes } from "react-router";

import {
  Home,
  Restaurants,
  TrackOrder,
  Menu,
  Main,
  Offers,
} from "./pages/index";

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
