import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black z-10"></div>

        {/* Background Image */}
        <img
          src="/contact-us.jpg"
          alt="no image"
          className="w-full h-96 object-cover"
        />

        {/* Centered Text */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-white proza-libre-bold text-2xl md:text-5xl font-bold">
            Contact us
          </h1>
        </div>
      </div>
      <h1 className="md:w-[70%] mx-auto px-4 md:px-0 py-5 md:py-0 text-justify  bg-black text-white text-lg">
        For inquiries, bookings, or assistance, feel free to contact Super
        Marine. Our dedicated team is here to ensure a seamless and
        unforgettable experience. Reach out today and embark on your
        extraordinary journey into aquatic luxury.
      </h1>

      <div className="bg-black min-h-screen flex items-center justify-center px-4 pb-10">
        <div className="bg-[#1a1a1a] rounded-3xl w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Left Side - Contact Info */}
          <div className="text-white p-10 content-center space-y-8">
            <div>
              <p
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-sm text-yellow-600 uppercase"
              >
                Location
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="900"
                className="text-lg font-semibold leading-relaxed"
              >
                9GC9+X65 - Musaffah - M3 - <br /> Abu Dhabi - United Arab
                Emirates
              </p>
            </div>

            <div>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-sm text-yellow-600 uppercase"
              >
                Phone Number
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1100"
                className="text-lg font-semibold"
              >
                +971 50 117 4427
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1100"
                className="text-lg font-semibold"
              >
                +971 50 959 0553
              </p>
            </div>

            <div>
              <p
                data-aos="fade-up"
                data-aos-duration="1200"
                className="text-sm text-yellow-600 uppercase"
              >
                Email Address
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="1300"
                className="text-lg font-semibold"
              >
                info@luxuryjetskidubai.com
              </p>
            </div>

            <div>
              <p
                data-aos="fade-up"
                data-aos-duration="1400"
                className="text-lg font-semibold mb-2"
              >
                Follow Our Social Media
              </p>
              <div className="flex items-center space-x-4 text-yellow-600 text-2xl">
                <a
                  title="Instagram"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <FaInstagram />
                </a>
                <a
                  title="fa
                "
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-duration="1600"
                >
                  <FaFacebook />
                </a>
                <a
                  title="tiktok"
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-duration="1700"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="w-full  content-center flex items-center z-1 h-[500px]">
            <MapContainer
              center={[24.335974, 54.510278]}
              zoom={15}
              scrollWheelZoom={true}
              className="h-[500px] z-0 w-full rounded-xl"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[25.1942075, 55.2277503]}>
                <Popup>Jumeirah 1, Dubai</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
