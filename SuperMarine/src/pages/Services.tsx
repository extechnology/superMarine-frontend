import type { ServiceData } from "../types";

const sampleServiceData: ServiceData[] = [
  {
    id: 1,
    title: "Jet Ski Services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",

    image: "/jet-ski.jpg",
    price: 100, 
    duration: "1",
    discount: 18, 
  },
  {
    id: 2,
    title: "Marine Motorcycles Rental",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",

    image: "/jet-ski.jpg",
    price: 150,
    duration: "1",
    discount: 10,
  },
  {
    id: 3,
    title: "Marine Motorcycles Repairing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",

    image: "/jet-ski.jpg",
    price: 200,
    duration: "1",
    discount: 31,
  },
  {
    id: 4,
    title: "Water Bikes Repairing and Maintaining",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",

    image: "/jet-ski.jpg",
    price: 180,
    duration: "1",
    discount: 50,
  },
  {
    id: 5,
    title: "Water Bikes Leasing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",

    image: "/jet-ski.jpg",
    price: 120,
    duration: "1",
    discount: 24, // Changed from string "20" to number 20
  },
];

const Services: React.FC = () => {
  return (
    <div className="bg-black">
      {/* Hero Section (unchanged) */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black z-10"></div>
        <img
          src="/about-hero.jpg"
          alt="Services background"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-white proza-libre-bold text-2xl md:text-5xl font-bold">
            Our Services
          </h1>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-10">
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
                  className="w-full h-64 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                  alt={data.title}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 bg-opacity-30 rounded-xl"></div>

                {/* Discount badge - top left */}
                {data.discount && (
                  <div className="absolute top-3 left-3 z-30 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    {data.discount}% OFF
                  </div>
                )}

                {/* Content container - pinned to bottom */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
                  {/* Content that moves up on hover */}
                  <div className="transform relative top-15 transition-transform duration-300 group-hover:-translate-y-10">
                    <h2 className="text-2xl font-bold mb-1 drop-shadow-md">
                      {data.title}
                    </h2>
                    <p className="text-sm mb-3 line-clamp-2 drop-shadow-md">
                      {data.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
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
                          <span className="text-xl font-bold">
                            AED {data.price}
                          </span>
                        )}
                      </div>
                      <span className="text-md">
                        Duration :{" "}
                        <span className="font-bold">{data.duration} hours</span>
                      </span>
                    </div>
                  </div>

                  {/* Booking button - hidden until hover */}
                  <button className="mt-5 bg-white text-black py-2 px-4 rounded-lg font-medium opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 sm:translate-y-5 sm:group-hover:translate-y-0 w-full">
                    Book Now
                  </button>
                </div>
              </div>
            ))}

            {/* Empty divs for centering when odd number of items */}
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

export default Services;
