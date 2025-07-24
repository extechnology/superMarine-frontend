import React, { useEffect, useState, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // const handleMouseEnter = () => {
  //   if (timeoutRef.current) clearTimeout(timeoutRef.current);
  //   setDropdownOpen(true);
  // };

  // const handleMouseLeave = () => {
  //   timeoutRef.current = setTimeout(() => {
  //     setDropdownOpen(false);
  //   }, 200);
  // };

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
  // const toggleDropdown = () => setDropdownOpen((prev) => !prev);
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
            className={`flex gap-8 rounded-full px-8 py-3 transition-all duration-300 ${
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
            <li className="cursor-pointer content-center">
              <Link to={"/service"}>Services</Link>
            </li>

            {/* Services Dropdown */}
            {/* <li
              className="relative cursor-pointer content-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={toggleDropdown}
            >
              <span className="flex items-center gap-1 select-none">
                Services ▾
              </span>

              <ul
                className={`absolute top-full left-0 mt-3 w-52 bg-white text-gray-800 rounded-xl shadow-xl transition-all duration-300 ease-in-out overflow-hidden transform ${
                  dropdownOpen
                    ? "opacity-100 scale-100 translate-y-0 visible"
                    : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"
                }`}
              >
                <li className="px-5 py-2  hover:bg-gray-100 transition-colors duration-200">
                  <Link to="/service/repair"> Jet Ski Service</Link>
                </li>
                <li className="px-5 py-2  hover:bg-gray-100 transition-colors duration-200">
                  <Link to="/service/maintenance">
                    {" "}
                    Marine Motorcycles Rental
                  </Link>
                </li>
                <li className="px-5 py-2  hover:bg-gray-100 transition-colors duration-200">
                  <Link to="/service/customization">
                    {" "}
                    Marine Motorcycles Repairing
                  </Link>
                </li>
                <li className="px-5 py-2  hover:bg-gray-100 transition-colors duration-200">
                  <Link to="/service/customization">
                    {" "}
                    Water Bikes Repairing and Maintaining
                  </Link>
                </li>
                <li className="px-5 py-2  hover:bg-gray-100 transition-colors duration-200">
                  <Link to="/service/customization"> Water Bikes Leasing</Link>
                </li>
              </ul>
            </li> */}
            <li className="cursor-pointer content-center">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="cursor-pointer content-center">
              <Link to="/contact">Contact Us</Link>
            </li>
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
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>

          {/* Mobile Dropdown */}
          <div className="relative">
            <button
              onClick={toggleMobileDropdown}
              className="flex items-center gap-1 focus:outline-none"
            >
              Services ▾
            </button>
            {mobileDropdownOpen && (
              <ul className="mt-2 bg-gray-100 rounded shadow-inner text-center">
                <li className="py-2 px-4 hover:bg-gray-200">
                  <Link to="/service/repair" onClick={toggleMenu}>
                    Repair
                  </Link>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <Link to="/service/maintenance" onClick={toggleMenu}>
                    Maintenance
                  </Link>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <Link to="/service/customization" onClick={toggleMenu}>
                    Customization
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link to="/gallery" onClick={toggleMenu}>
            Gallery
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact Us
          </Link>
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
