import {
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsPinterest,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black montsserat pt-10 pb-5 text-white px-5 md:px-0">
      <div className="max-w-7xl mx-auto mb-9 hidden md:block h-[.2px] bg-gray-600"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3  space-y-5 md:space-y-0">
        <div>
          <h1 className="text-lg semibold-bold text-yellow-600 pb-4">
            Office Address
          </h1>
          <ul className="space-y-2 text-sm">
            <li>9GC9+X65 - Musaffah - </li>
            <li>M3 - Abu Dhabi - United </li>
            <li>Arab Emirates,</li>
            <li>+971 50 117 4427</li>
            <li>+971 50 959 0553</li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg semibold-bold text-yellow-600 pb-4">
            Quick Links
          </h1>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/rental_service"}>Services</Link>
            </li>
            <li>
              <Link to={"/gallery"}>Gallery</Link>{" "}
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>{" "}
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex gap-10 text-yellow-600 ">
            <li>
              <BsFacebook size={20} />
            </li>
            <li>
              <BsInstagram size={20} />
            </li>
            <li>
              <BsYoutube size={20} />
            </li>
            <li>
              <BsTwitterX size={20} />
            </li>
            <li>
              <BsLinkedin size={20} />
            </li>
            <li>
              <BsPinterest size={20} />
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 h-[.2px] bg-gray-600"></div>
      <div className="max-w-7xl space-y-2 text-center md:text-left md:space-y-0 mx-auto text-xs mt-5 grid grid-cols-1 md:grid-cols-3">
        <div>
          <p>© 2025 Super Marine. All Rights Reserved.</p>
        </div>
        <div>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
