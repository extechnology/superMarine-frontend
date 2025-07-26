import React, { useEffect, useState, useRef } from "react";
import {  HiX } from "react-icons/hi";
import { TbSpeedboat } from "react-icons/tb";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };
  

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleMobileDropdown = () => setMobileDropdownOpen((prev) => !prev);

  return (
    <header
      className={`fixed montsserat top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto py-3 px-4 md:px-0">
        <Link to={"/"}>
          <h1
            className={`text-5xl tracking-wide bebas-neue font-bold transition-colors ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Super Marine
          </h1>
        </Link>
        {/* <img src="/text-log.png" alt="" className="h-11" /> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul
            className={`flex gap-8 rounded-full font-medium px-8 py-3 transition-all duration-300 ${
              scrolled
                ? "bg-white text-black"
                : "border border-white text-white backdrop-blur-md"
            }`}
          >
            <li className="cursor-pointer content-center">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer content-center">
              <Link to="/about">About Us</Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="relative cursor-pointer content-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={toggleDropdown}
            >
              <span className="flex items-center gap-1 select-none">
                Services ▾
              </span>

              <ul
                className={`absolute top-full left-0 mt-3 w-64 rounded-xl shadow-xl transition-all duration-300 ease-in-out overflow-hidden transform ${
                  dropdownOpen
                    ? "opacity-100 scale-100 translate-y-0 visible"
                    : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
                }`}
              >
                <li
                  className="h-24 relative text-white"
                  style={{
                    backgroundImage: `url('/beautiful.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Link
                    to="/rental_service"
                    className="absolute inset-0 px-5 py-3 bg-black/40 hover:bg-black/60 transition duration-200 flex items-center font-semibold"
                  >
                    Rental Services
                  </Link>
                </li>

                <li
                  className="h-24 relative text-white"
                  style={{
                    backgroundImage: `url('/jet-ski.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Link
                    to="service_and_repair"
                    className="absolute inset-0 px-5 py-3 bg-black/40 hover:bg-black/60 transition duration-200 flex items-center font-semibold"
                  >
                    Service & Repair
                  </Link>
                </li>
              </ul>
            </li>
            <li className="cursor-pointer content-center">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="cursor-pointer content-center">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to={"/rental_service"}>
                <button
                  type="button"
                  className={`px-4 py-1 rounded-full font-semibold border cursor-pointer ${
                    scrolled
                      ? "bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
                      : "bg-white text-blue-700 hover:bg-gray-100 border-white"
                  }`}
                >
                  Book Now
                </button>
              </Link>
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
            <HiX
              className={`w-6 h-6 ${scrolled ? "text-black" : "text-white"}`}
            />
          ) : (
            <TbSpeedboat
              className={`w-9 h-9 ${scrolled ? "text-black" : "text-white"}`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-xl text-white z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 text-lg">
          <Link to="/" onClick={toggleMenu} className="hover:underline">
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu} className="hover:underline">
            About Us
          </Link>

          {/* Optimized Mobile Dropdown */}
          <div className="relative">
            <button
              onClick={toggleMobileDropdown}
              className="flex items-center gap-1 py-2 rounded hover:bg-white/10 transition"
            >
              Services ▾
            </button>

            <ul
              className={`absolute left-1/2 -translate-x-1/2 mt-2 w-56 text-center transition-all duration-300 origin-top overflow-hidden bg-black/50 rounded-lg shadow-lg backdrop-blur-md ${
                mobileDropdownOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <li>
                <Link
                  to="/rental_service"
                  onClick={toggleMenu}
                  className="block px-6 py-3 text-white hover:bg-white/20 transition font-medium"
                >
                  Rental Services
                </Link>
              </li>
              <li>
                <Link
                  to="/service_and_repair"
                  onClick={toggleMenu}
                  className="block px-6 py-3 text-white hover:bg-white/20 transition font-medium"
                >
                  Service & Repair
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/gallery" onClick={toggleMenu} className="hover:underline">
            Gallery
          </Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:underline">
            Contact Us
          </Link>
          <Link
            to={"/rental_service"}
            onClick={toggleMenu}
            className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
