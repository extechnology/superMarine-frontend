import {
  BsFacebook,
  BsYoutube,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsPinterest,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black pt-10 pb-5 text-white px-5 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 ">
        <div>
          <h1 className="text-2xl semibold-bold pb-4">Office Address</h1>
          <ul className="space-y-2">
            <li>9GC9+X65 - Musaffah - </li>
            <li>M3 - Abu Dhabi - United </li>
            <li>Arab Emirates,</li>
            <li>+971501174427 </li>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl semibold-bold pb-4">Quick Links</h1>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Gallery </li>
            <li>Contact </li>
          </ul>
        </div>

        <div>
          <ul className="flex gap-10">
            <li>
              <BsFacebook size={20} color="white" />
            </li>
            <li>
              <BsInstagram size={20} color="white" />
            </li>
            <li>
              <BsYoutube size={20} color="white" />
            </li>
            <li>
              <BsTwitterX size={20} color="white" />
            </li>
            <li>
              <BsLinkedin size={20} color="white" />
            </li>
            <li>
              <BsPinterest size={20} color="white" />
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 h-[.2px] bg-gray-600"></div>
      <div className="max-w-7xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-3">
        <div>
          <p>© 2023 Super Marine. All Rights Reserved.</p>
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
