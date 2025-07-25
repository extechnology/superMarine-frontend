import { Link } from "react-router";

const SampleServiceData = [
  {
    id: 1,
    title: "Yamaha Jest Ski 100CC",
    image: "/jet-ski.jpg",
    accommodation: "2",
    price: 100,
    duration: "1",
    discount: 18,
  },
  {
    id: 2,
    title: "Yamaha Jest Ski 100CC",
    image: "/jet-ski.jpg",
    accommodation: "2",
    price: 100,
    duration: "1",
    discount: 18,
  },
  {
    id: 3,
    title: "Yamaha Jest Ski 100CC",
    image: "/jet-ski.jpg",
    accommodation: "2",
    price: 100,
    duration: "1",
    discount: 18,
  },
];

const ServiceAndRepair = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-center md:text-4xl text-2xl proza-libre-bold font-bold py-5">
          Service And Repair
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
          {SampleServiceData.map((data) => (
            <div
              key={data.id}
              className="bg-white relative text-black rounded-xl"
            >
              <img src={data.image} alt="" className=" rounded-t-lg" />
              <h2 className="absolute inset-0 transform -translate-x-[20%] pt-4 font-bold text-center text-lg-center">
                <span className="bg-amber-400 px-2 py-1 rounded-full">
                  {data.title}
                </span>
              </h2>
                {/* Max Accommodation */}
                <p className="text-center flex justify-center gap-5 font-medium text-gray-700">
                  <span className="text-sm uppercase content-center tracking-wider text-gray-500 block mb-1">
                    Max Accommodation
                  </span>
                  <span className="text-xl font-serif text-amber-600 pb-2">
                    {data.accommodation}
                  </span>
                </p>

                {/* Price & Duration */}
                <div className="flex justify-between items-center border-t border-b border-gray-200 py-2 px-2">
                  <div className="text-center flex gap-5">
                    <span className="text-xs uppercase content-center tracking-wider text-gray-500 block">
                      Price :
                    </span>
                    <span className="font-medium text-gray-800">
                      AED {data.price}
                    </span>
                  </div>
                  <div className="text-center flex gap-5">
                    <span className="text-xs uppercase content-center tracking-wider text-gray-500 block">
                      Duration :
                    </span>
                    <span className="font-medium text-gray-800">
                      {data.duration} hr
                    </span>
                  </div>
                </div>

                {/* Book Now Button */}
                <Link
                  to="/"
                  className="block w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-6  transition-all duration-300 text-center uppercase tracking-wider text-sm shadow-md hover:shadow-lg"
                >
                  Book Now
                </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceAndRepair;
