import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black z-10"></div>

        {/* Background Image */}
        <img
          src="/about-hero.jpg"
          alt="no image"
          className="w-full h-96 object-cover"
        />

        {/* Centered Text */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-5xl font-bold">
            Contact us
          </h1>
        </div>
      </div>
        <h1 className="w-[70%] mx-auto bg-black text-white text-lg">
          For inquiries, bookings, or assistance, feel free to contact Luxury
          Charters. Our dedicated team is here to ensure a seamless and
          unforgettable experience. Reach out today and embark on your
          extraordinary journey into aquatic luxury.
        </h1>

      <div className="bg-black min-h-screen flex items-center justify-center px-4 pb-10">
        <div className="bg-[#1a1a1a] rounded-3xl w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Left Side - Contact Info */}
          <div className="text-white p-10 space-y-8">
            <div>
              <p className="text-sm text-yellow-600 uppercase">Location</p>
              <p className="text-lg font-semibold leading-relaxed">
                Jumeirah, Harbor 1, Dubai, <br /> United Arab Emirates
              </p>
            </div>

            <div>
              <p className="text-sm text-yellow-600 uppercase">Phone Number</p>
              <p className="text-lg font-semibold">+971 56 217 1574</p>
            </div>

            <div>
              <p className="text-sm text-yellow-600 uppercase">Email Address</p>
              <p className="text-lg font-semibold">
                info@luxuryjetskidubai.com
              </p>
            </div>

            <div>
              <p className="text-lg font-semibold mb-2">
                Follow Our Social Media
              </p>
              <div className="flex items-center space-x-4 text-yellow-600 text-2xl">
                <a
                  title="Instagram"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  title="fa
                "
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  title="tiktok"
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="w-full h-[500px]">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.5364097650254!2d55.227750375189586!3d25.194207531760572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4345fc013e27%3A0x8f17c5c948882232!2sJumeirah%201%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1721727623026!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="border-none"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
