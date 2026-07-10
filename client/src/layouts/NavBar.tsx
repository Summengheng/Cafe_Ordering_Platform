import React from "react";
import Logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <nav className="h-18 flex flex-row items-center justify-between px-20 w-screen">
      {/* Header */}
      <header className="flex flex-row items-center">
        <img src={Logo} alt="Logo" className="h-20 w-10" />
        <h2 className="pt-1 ps-2 text-xl">BrewCafe</h2>
      </header>

      {/* Nav Items */}
      <ul className="flex flex-row gap-x-5">
        <li className="nav-item">Home</li>
        <li className="nav-item">Menu</li>
        <li className="nav-item">Track Order</li>
        <li className="nav-item">About</li>
      </ul>

      {/* button */}
      <button className="bg-[#FEB72C] rounded cursor-pointer px-3 py-2 text-gray-950 font-bold ">
        Login
      </button>
    </nav>
  );
};

export default NavBar;
