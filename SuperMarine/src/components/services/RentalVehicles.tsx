import { Link } from "react-router";
import useVehicle from "../../hooks/useVehicle";
import Loader from "../../common/Loader";
import type { Vehicle } from "@/types";
import useService from "../../hooks/useService";
import type { Service } from "../../types";

// 👇 Define the Vehicle type matching your API response

const RentalVehicles: React.FC = () => {
  const { vehicle, loading, error } = useVehicle();
    const { service } = useService();
  
  console.log(vehicle, "vehicle");

  if (loading) return <Loader />;
  if (error)
    return (
      <div className="error-message">⚠️ Error: {(error as Error).message}</div>
    );

  // 👇 Function to open WhatsApp
  const handleEnquire = (title: string) => {
    const phoneNumber = "971509590553"; // ✅ replace with your UAE number (without +)
    const message = `Hello, I want to enquire about *${title}*. Please provide me with more details.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  // helper to format duration "01:30:00" → "1 hr 30 min"
  const formatDuration = (duration: string): string => {
    // Handle day + time (e.g., "1 00:00:00")
    const [dayPart, timePart] = duration.includes(" ")
      ? duration.split(" ")
      : [null, duration];

    const [hh, mm, ss] = timePart.split(":").map(Number);
    const parts: string[] = [];

    if (dayPart) {
      const days = Number(dayPart);
      if (days === 1 && hh === 0 && mm === 0 && ss === 0) {
        return "One day"; // ✅ special case
      }
      parts.push(`${days} day${days > 1 ? "s" : ""}`);
    }

    if (hh) parts.push(`${hh} hr${hh > 1 ? "s" : ""}`);
    if (mm) parts.push(`${mm} min`);
    if (!hh && !mm && ss) parts.push(`${ss} sec`);

    return parts.join(" ") || duration;
  };

  return (
    <div>
      <div className="py-10">
        <h1
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-center md:text-4xl text-2xl proza-libre-bold text-white font-bold pb-5"
        >
          Available Vehicles
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl gap-5 px-4 md:px-0 w-full">
            {vehicle.map((data: Vehicle) => {
              const finalPrice = parseFloat(data.price); // 👈 this is already discounted price from API
              const originalPrice = data.discount
                ? (finalPrice / (1 - data.discount / 100)).toFixed(2) // 👈 back-calc original
                : null;

              return (
                <div
                  key={data.id}
                  className="flex flex-col h-full relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Image with overlay */}
                  <img
                    src={`https://server.supermarinerental.com${data.image}`}
                    className="w-full h-64 object-cover rounded-t-xl transform group-hover:scale-105 transition-transform duration-300"
                    alt={data.name}
                  />


                  {/* Content container */}
                  <div className="z-20  justify-end p-3 bg-white relative text-black">
                    <div className="transform relative bg-white rounded-md p-3 transition-transform duration-300 group-hover:-translate-y-10">
                      <div className="flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                        <h2
                          data-aos="fade-up"
                          data-aos-duration="800"
                          className="md:text-2xl text-lg font-bold drop-shadow-md"
                        >
                          {data.name}
                        </h2>
                        <p
                          data-aos="fade-up"
                          data-aos-duration="900"
                          className="text-sm sm:text-md font-semibold"
                        >
                          Max Person : {data.capacity || 1}
                        </p>
                      </div>
                      <p
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="text-sm mt-2 md:mb-3 line-clamp-2 drop-shadow-md"
                      >
                        {data.description}
                      </p>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 gap-2 sm:gap-0">
                        <div
                          data-aos="fade-up"
                          data-aos-duration="1100"
                          className="flex items-center gap-2"
                        >
                          <span className="text-xl font-bold">
                            <span className="pr-1 text-sm">AED</span>
                            {finalPrice.toFixed(2)}
                          </span>
                          {originalPrice && (
                            <span className="text-sm line-through opacity-75">
                              AED {originalPrice}
                            </span>
                          )}
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1200">
                          <span className="text-sm sm:text-md">
                            Time :{" "}
                            <span className="font-bold">
                              {formatDuration(data.duration)}
                            </span>
                          </span>
                        </div>
                      </div>

                      <div
                        data-aos="fade-up"
                        data-aos-duration="1300"
                        className="flex flex-col sm:flex-row justify-between mt-5 gap-3 sm:gap-4"
                      >
                        {/* Book Now */}
                        <Link
                          to={`/book_now/${data.unique_id}`}
                          state={{
                            id:data.unique_id,
                            title: data.name,
                            image: data.image,
                            price: data.price,
                            duration: data.duration,
                            capacity: data.capacity,
                            discount: data.discount,
                          }}
                          className="bg-[#D4AF37] text-black hover:bg-[#bfa135] py-2 px-4 rounded-lg font-medium opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 sm:translate-y-5 sm:group-hover:translate-y-0 w-full text-center"
                        >
                          Book Now
                        </Link>

                        {/* Enquire Now via WhatsApp */}
                        <button
                          onClick={() => handleEnquire(data.name)}
                          className="bg-black text-[#D4AF37] border border-[#D4AF37] hover:bg-[#1a1a1a] py-2 px-4 rounded-lg font-medium opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 sm:translate-y-5 sm:group-hover:translate-y-0 w-full"
                        >
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Fix layout if odd number */}
            {vehicle.length % 3 === 2 && (
              <>
                <div className="hidden md:block" aria-hidden="true"></div>
                <div className="hidden md:block" aria-hidden="true"></div>
              </>
            )}
          </div>
        </div>
        <section className="pt-12">
          <h1 className="text-center md:text-4xl text-2xl proza-libre-bold text-white  font-bold py-8 px-4 md:px-0">
            Our Dedicated Services
          </h1>
          <div className="max-w-7xl mx-auto px-3 md:px-0">
            <div className="space-y-12">
              {service && Array.isArray(service)
                ? service.slice(0, 1).map((data: Service) => {
                    const pointsArray: string[] =
                      typeof data.points === "string"
                        ? (data.points as string)
                            .split("#")
                            .map((p: string) => p.replace(/\r?\n/g, "").trim())
                            .filter(Boolean)
                        : [];
                    return (
                      <div
                        key={data.id}
                        data-aos="fade-up"
                        data-aos-duration="1300"
                        className={`group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-amber-400/20 ${
                          data.id % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-90 group-hover:from-amber-500/10 group-hover:to-amber-600/10 transition-all duration-500"></div>

                        <div
                          className={`relative flex flex-col items-center gap-8 p-8 z-10 ${
                            data.id % 2 === 0
                              ? "md:flex-row-reverse"
                              : "md:flex-row"
                          }`}
                        >
                          {/* Image */}
                          <div className="w-full md:w-2/5 transform transition-all duration-500 group-hover:scale-105">
                            <img
                              src={`https://server.supermarinerental.com${data.image}`}
                              alt={data.title}
                              className="w-full object-cover rounded-xl shadow-lg border-2 border-gray-700 group-hover:border-amber-400 transition-all duration-500"
                              data-aos="fade-up"
                              data-aos-duration="1400"
                            />
                          </div>

                          {/* Content */}
                          <div className="w-full md:w-3/5 text-white space-y-5">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                                <span className="text-black font-bold">
                                  {data.id}
                                </span>
                              </div>
                              <h2
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300"
                              >
                                {data.title}
                              </h2>
                            </div>

                            <p
                              data-aos="fade-up"
                              data-aos-duration="1600"
                              className="text-gray-300 md:text-md text-sm leading-relaxed"
                            >
                              {data.description}
                            </p>

                            {/* Points */}
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 list-none">
                              {pointsArray.map(
                                (point: string, index: number) => (
                                  <li
                                    key={index}
                                    className="flex items-start"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                  >
                                    <svg
                                      className="h-5 w-5 text-amber-400 mt-0.5 mr-2 flex-shrink-0"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                    <span className="text-gray-300 text-sm">
                                      {point}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>

                            {/* Button */}
                            <div data-aos="fade-up" data-aos-duration="1700">
                              <Link
                              to={'/service_and_repair'}
                                className="inline-flex items-center text-md mt-4 px-6 py-3 bg-transparent border-2 border-amber-400 text-amber-400 font-semibold rounded-full hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 group"
                              >
                                Go to Services
                                <svg
                                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                  ></path>
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RentalVehicles;
