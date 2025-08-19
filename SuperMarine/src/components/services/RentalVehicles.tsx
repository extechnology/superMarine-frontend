import { Link } from "react-router";
import type { ServiceData } from "../../types";
import useVehicle from "../../hooks/useVehicle";
import Loader from "../../common/Loader";

const sampleServiceData: ServiceData[] = [
  {
    id: 1,
    title: "Jet Ski ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",
    image: "/jet_ski.jpg",
    price: 100,
    duration: "1",
    discount: 18,
  },
  {
    id: 2,
    title: "Standing Jet Ski ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",
    image: "/standing-jet-ski.jpg",
    price: 150,
    duration: "1",
    discount: 10,
  },
  {
    id: 3,
    title: "Speed Boat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",
    image: "/speed-boat.jpg",
    price: 200,
    duration: "1",
    discount: 31,
  },
  {
    id: 4,
    title: "Quad Bikes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",
    image: "/quad-bikes.jpg",
    price: 180,
    duration: "1",
    discount: 50,
  },
  {
    id: 5,
    title: "Buggy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",
    image: "/buggy.jpg",
    price: 120,
    duration: "1",
    discount: 24,
  },
  {
    id: 6,
    title: "Marine Cars",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",
    image: "/marine-cars.jpg",
    price: 120,
    duration: "1",
    discount: 24,
  },
  {
    id: 7,
    title: "Yachts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",
    image: "/yachts.jpg",
    price: 120,
    duration: "1",
    discount: 24,
  },
];

const RentalVehicles = () => {
  const { vehicle, loading, error } = useVehicle();
  console.log(vehicle, "vehicle");

  if (loading) return <Loader />;
  if (error)
    return <div className="error-message">⚠️ Error: {error.message}</div>;

  // 👇 Function to open WhatsApp
  const handleEnquire = (title: string) => {
    const phoneNumber = "971500000000"; // ✅ replace with your UAE number (without +)
    const message = `Hello, I want to enquire about *${title}*. Please provide me with more details.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
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
            {sampleServiceData.map((data) => (
              <div
                key={data.id}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full"
              >
                {/* Image with overlay */}
                <img
                  src={data.image}
                  className="w-full h-64 object-cover rounded-t-xl transform group-hover:scale-105 transition-transform duration-300"
                  alt={data.title}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 bg-opacity-30 rounded-xl"></div>

                {/* Content container */}
                <div className="inset-0 z-20 flex flex-col justify-end p-3 bg-white relative text-black">
                  <div className="transform relative bg-white rounded-md p-3 transition-transform duration-300 group-hover:-translate-y-10">
                    <div className="flex justify-between items-center">
                      <h2
                        data-aos="fade-up"
                        data-aos-duration="800"
                        className="md:text-2xl text-lg font-bold mb-1 drop-shadow-md"
                      >
                        {data.title}
                      </h2>
                      <p
                        data-aos="fade-up"
                        data-aos-duration="900"
                        className="text-center text-md font-semibold"
                      >
                        Max Person : 3
                      </p>
                    </div>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      className="text-sm md:mb-3 line-clamp-2 drop-shadow-md"
                    >
                      {data.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div
                        data-aos="fade-up"
                        data-aos-duration="1100"
                        className="flex items-center gap-2"
                      >
                        {data.discount ? (
                          <>
                            <span className="text-xl font-bold">
                              <span className="pr-1 text-sm">AED</span>
                              {(data.price * (1 - data.discount / 100)).toFixed(
                                2
                              )}
                            </span>
                            <span className="text-sm line-through opacity-75">
                              AED {data.price}
                            </span>
                          </>
                        ) : (
                          <span className="md:text-xl text:sm font-bold">
                            AED {data.price}
                          </span>
                        )}
                      </div>
                      <div data-aos="fade-up" data-aos-duration="1200">
                        <span className="text-md">
                          Time :{" "}
                          <span className="font-bold">{data.duration} hr</span>
                        </span>
                      </div>
                    </div>

                    <div
                      data-aos="fade-up"
                      data-aos-duration="1300"
                      className="flex justify-between gap-4"
                    >
                      {/* Book Now */}
                      <Link
                        to={`/book_now/${data.id}`}
                        state={{
                          title: data.title,
                          image: data.image,
                          price: data.price,
                          duration: data.duration,
                        }}
                        className="mt-5 bg-[#D4AF37] text-black hover:bg-[#bfa135] py-2 px-4 rounded-lg font-medium opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 sm:translate-y-5 sm:group-hover:translate-y-0 w-full"
                      >
                        <button>Book Now</button>
                      </Link>

                      {/* Enquire Now via WhatsApp */}
                      <button
                        onClick={() => handleEnquire(data.title)}
                        className="mt-5 bg-black text-[#D4AF37] border border-[#D4AF37] hover:bg-[#1a1a1a] py-2 px-4 rounded-lg font-medium opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 sm:translate-y-5 sm:group-hover:translate-y-0 w-full"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Fix layout if odd number */}
            {sampleServiceData.length % 3 === 2 && (
              <>
                <div className="hidden md:block" aria-hidden="true"></div>
                <div className="hidden md:block" aria-hidden="true"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalVehicles;
