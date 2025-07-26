import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Address = () => {
  return (
    <div className="bg-black">
      <div className=" text-white py-10 px-4 sm:px-8 reveal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h2
              data-aos="fade-up"
              data-aos-duration="900"
              className="text-2xl sm:text-3xl font-bold mb-2"
            >
              Stay Connected, Ride <br /> Luxuriously
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="1100"
              className="text-gray-300 text-sm"
            >
              Reach out for limited-time offers on our premium adventure
              experiences.
            </p>
          </div>

          {/* Middle Section */}
          <div className="text-white space-y-2">
            <h3
              data-aos="fade-up"
              data-aos-duration="900"
              className="font-bold text-md md:text-lg"
            >
              Office Address :
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="1100"
              className="text-gray-300 text-sm"
            >
              9GC9+X65 - Mussaffah - M3 <br />
              Abu Dhabi - United Arab Emirates
            </p>
            <a
              data-aos="fade-up"
              data-aos-duration="1200"
              href="tel:+971501174427"
              className="inline-block text-sm text-white mt-2 bg-gradient-to-r  transition duration-300"
            >
              📞 +971501174427
            </a>
          </div>

          {/* Right Section (Location Map) */}
          <div className="text-white">
            <h3
              data-aos="fade-up"
              data-aos-duration="900"
              className="font-bold text-md md:text-lg mb-2"
            >
              Location Map :
            </h3>
            <div data-aos="fade-up" data-aos-duration="1100">
              <MapContainer
                center={[24.335974, 54.510278]}
                zoom={15}
                scrollWheelZoom={true}
                className="h-[150px] z-0 w-full rounded-xl"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[24.335974, 54.510278]}>
                  <Popup>Mussaffah - M3, Abu Dhabi, United Arab Emirates</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Address;
