import React, { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto py-3 px-6">
        {/* Logo */}
        <h1
          className={`text-2xl font-bold transition-colors ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Super Marine
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul
            className={`flex gap-8 rounded-full   px-8 py-3 transition-all duration-300 ${
              scrolled
                ? "border-gray-300 bg-white text-black"
                : "border border-white text-white backdrop-blur-md "
            }`}
          >
            <li className="cursor-pointer content-center">Home</li>
            <li className="cursor-pointer content-center">About Us</li>
            <li className="cursor-pointer content-center">Services</li>
            <li className="cursor-pointer content-center">Gallery</li>
            <li className="cursor-pointer content-center">Contact Us</li>
            <li>
              <button
                type="button"
                className={`px-4 py-1 rounded-full font-semibold border ${
                  scrolled
                    ? "bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
                    : "bg-white text-blue-700 hover:bg-gray-100 border-white"
                }`}
              >
                Book Now
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden z-50 text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <HiX className={scrolled ? "text-black" : "text-white"} />
          ) : (
            <HiMenu className={scrolled ? "text-black" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 text-xl">
          <a href="#" onClick={toggleMenu}>
            Home
          </a>
          <a href="#" onClick={toggleMenu}>
            About Us
          </a>
          <a href="#" onClick={toggleMenu}>
            Services
          </a>
          <a href="#" onClick={toggleMenu}>
            Gallery
          </a>
          <a href="#" onClick={toggleMenu}>
            Contact Us
          </a>
          <button
            type="button"
            className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
          >
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
