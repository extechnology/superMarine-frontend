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
              <a
                title="facebook"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/supermarine.in/"
              >
                <BsFacebook size={20} />
              </a>
            </li>
            <li>
              <a
                title="instagram"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/supermarine.co/"
              >
                <BsInstagram size={20} />
              </a>
            </li>
            <li>
              <a
                title="youtube"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@supermarinejetski"
              >
                <BsYoutube size={20} />
              </a>
            </li>
            <li>
              <a
                title="twitter"
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/supermarine0553"
              >
                <BsTwitterX size={20} />
              </a>
            </li>
            <li>
              <a
                title="linkedin"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/supermarin"
              >
                <BsLinkedin size={20} />
              </a>
            </li>
            <li>
              <a
                title="pinterest"
                target="_blank"
                rel="noopener noreferrer"
                href="https://in.pinterest.com/supermarinejetski/"
              >
                <BsPinterest size={20} />
              </a>
            </li>
            <li>
              <a
                title="threads"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.threads.com/@supermarine.co"
              >
                <BsFillThreadsFill size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 h-[.2px] bg-gray-600"></div>
      <div className="max-w-7xl space-y-2   md:space-y-0 mx-auto text-xs mt-5 grid grid-cols-1 md:grid-cols-4">
        <div className="text-center md:text-left">
          <p>© 2025 Super Marine. All Rights Reserved.</p>
        </div>
        <div className="text-center ">
          <Link to={"/terms"}>
            <p>Terms & Conditions</p>
          </Link>
        </div>
        <div className="text-center ">
          <Link to={"/privacy"}>
            <p>Privacy Policy</p>
          </Link>
        </div>
        <div className="text-center md:text-right">
          <Link to={"/refund"}>
            <p>Refund Policy</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
