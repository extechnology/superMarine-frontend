import type { ServiceData } from "../../types";

const sampleServiceData: ServiceData[] = [
  {
    id: 1,
    title: "Jet Ski ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",

    image: "/jet-ski.jpg",
    price: 100,
    duration: "1",
    discount: 18,
  },
  {
    id: 2,
    title: "Standing Jet Ski ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",

    image: "/jet-ski.jpg",
    price: 150,
    duration: "1",
    discount: 10,
  },
  {
    id: 3,
    title: "Speed Boat",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",

    image: "/jet-ski.jpg",
    price: 200,
    duration: "1",
    discount: 31,
  },
  {
    id: 4,
    title: "Quad Bikes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",

    image: "/jet-ski.jpg",
    price: 180,
    duration: "1",
    discount: 50,
  },
  {
    id: 5,
    title: "Buggy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",

    image: "/jet-ski.jpg",
    price: 120,
    duration: "1",
    discount: 24,
  },
  {
    id: 6,
    title: "Marine Cars",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",

    image: "/jet-ski.jpg",
    price: 120,
    duration: "1",
    discount: 24,
  },
  {
    id: 6,
    title: "Yachts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",

    image: "/jet-ski.jpg",
    price: 120,
    duration: "1",
    discount: 24,
  },
];

const RentalVehicles = () => {
  return (
    <div>
      <div className="py-10">
        <h1 className="text-center md:text-4xl text-2xl proza-libre-bold text-white font-bold pb-5">
          Rental Vehicles
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

                {/* Discount badge - top left */}
                {/* {data.discount && (
                  <div className=" top-3 left-3 z-30 bg-red-500 text-white px-3 py-1 rounded-full md:text-sm text-xs font-bold animate-pulse">
                    {data.discount}% OFF
                  </div>
                )} */}

                {/* Content container - pinned to bottom */}
                <div className=" inset-0 z-20 flex flex-col justify-end p-3 bg-white  relative text-black">
                  {/* Content that moves up on hover */}
                  <div className="transform relative hover:bg-white p-3 transition-transform duration-300 group-hover:-translate-y-10">
                    <div className="flex justify-between items-center">
                      <h2 className="md:text-2xl text-lg font-bold mb-1 drop-shadow-md">
                        {data.title}
                      </h2>
                      <p className="text-center text-md font-semibold">
                        Max Person : 3
                      </p>
                    </div>
                    <p className="text-sm md:mb-3 line-clamp-2 drop-shadow-md">
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
                          <span className="md:text-xl text:sm font-bold">
                            AED {data.price}
                          </span>
                        )}
                      </div>
                      <span className="text-md">
                        Time :{" "}
                        <span className="font-bold">{data.duration} hr</span>
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <button className="mt-5 bg-amber-400 text-white py-2 px-4 rounded-lg font-medium opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 sm:translate-y-5 sm:group-hover:translate-y-0 w-full">
                        Book Now
                      </button>
                      <button className="mt-5 bg-green-500 text-white py-2 px-4 rounded-lg font-medium opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 sm:translate-y-5 sm:group-hover:translate-y-0 w-full">
                        Enquire Now
                      </button>
                    </div>
                  </div>

                  {/* Booking button - hidden until hover */}
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
export default RentalVehicles;
