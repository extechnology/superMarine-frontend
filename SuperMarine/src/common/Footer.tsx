import {
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsPinterest,
} from "react-icons/bs";
import { BsFillThreadsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black montsserat pt-10 pb-5 text-white px-5 md:px-10">
      {/* Top Divider */}
      <div className="max-w-7xl mx-auto mb-9 hidden md:block h-[0.5px] bg-gray-600"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Address */}
        <div>
          <h1 className="text-lg font-semibold text-yellow-600 pb-4">
            Office Address
          </h1>
          <ul className="space-y-2 text-sm">
            <li>9GC9+X65 - Musaffah -</li>
            <li>M3 - Abu Dhabi - United</li>
            <li>Arab Emirates,</li>
            <li>+971 50 117 4427</li>
            <li>+971 50 959 0553</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-lg font-semibold text-yellow-600 pb-4">
            Quick Links
          </h1>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/rental_service">Services</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex sm:justify-start md:justify-end justify-center">
          <ul className="flex flex-wrap gap-6 text-yellow-600">
            <li>
              <a
                href="https://www.facebook.com/supermarine.in/"
                target="_blank"
                rel="noopener noreferrer"
                title="facebook"
              >
                <BsFacebook size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/supermarine.co/"
                target="_blank"
                rel="noopener noreferrer"
                title="instagram"
              >
                <BsInstagram size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@supermarinejetski"
                target="_blank"
                rel="noopener noreferrer"
                title="youtube"
              >
                <BsYoutube size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/supermarine0553"
                target="_blank"
                rel="noopener noreferrer"
                title="twitter"
              >
                <BsTwitterX size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/supermarin"
                target="_blank"
                rel="noopener noreferrer"
                title="linkedin"
              >
                <BsLinkedin size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://in.pinterest.com/supermarinejetski/"
                target="_blank"
                rel="noopener noreferrer"
                title="pinterest"
              >
                <BsPinterest size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://www.threads.com/@supermarine.co"
                target="_blank"
                rel="noopener noreferrer"
                title="threads"
              >
                <BsFillThreadsFill size={22} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="max-w-7xl mx-auto mt-6 h-[0.5px] bg-gray-600"></div>

      {/* Bottom Links */}
      <div className="max-w-7xl mx-auto mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-center md:text-left">
        <p className="sm:col-span-2 md:col-span-1">
          © 2025 Super Marine. All Rights Reserved.
        </p>
        <Link to="/terms">Terms & Conditions</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/refund" className="md:text-right">
          Refund Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
