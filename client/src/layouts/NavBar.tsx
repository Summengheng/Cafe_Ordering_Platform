import { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router";
import { IconMenu2, IconX } from "@tabler/icons-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/Menu", label: "Browse Menu" },
    { to: "/offers", label: "Special Offers" },
    { to: "/restaurants", label: "Restaurants" },
    { to: "/ordering", label: "Track Order" },
    { to: "/", label: "About" },
  ];

  return (
    <nav className="relative flex flex-row items-center justify-between px-4 md:px-10 lg:px-20 h-16 md:h-18">
      {/* Header */}
      <header className="flex flex-row items-center">
        <img src={Logo} alt="Logo" className="h-14 w-8 md:h-20 md:w-10" />
        <h2 className="pt-1 ps-2 text-lg md:text-xl">BrewCafe</h2>
      </header>

      {/* Nav Items - desktop */}
      <ul className="hidden lg:flex flex-row gap-x-5">
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} className="nav-item">
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Login button - desktop */}
      <button className="hidden lg:block bg-[#FEB72C] rounded cursor-pointer px-3 py-2 text-gray-950 font-bold">
        Login
      </button>

      {/* Hamburger toggle - mobile/tablet */}
      <button
        className="lg:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
      </button>

      {/* Mobile/tablet dropdown menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0C0C12] flex flex-col items-center gap-y-4 py-6 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-item"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="bg-[#FEB72C] rounded cursor-pointer px-4 py-2 text-gray-950 font-bold">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
