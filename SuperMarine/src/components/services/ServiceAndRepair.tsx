import { Link } from "react-router";

const SampleServiceData = [
  {
    id: 1,
    title: "Yamaha Jest Ski 100CC",
    image: "/jet-ski.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",
  },
  {
    id: 2,
    title: "Yamaha Jest Ski 100CC",
    image: "/jet-ski.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",
  },
  {
    id: 3,
    title: "Yamaha Jest Ski 100CC",
    image: "/jet-ski.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, neque",
  },
];

const ServiceAndRepair = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-center md:text-4xl text-2xl proza-libre-bold font-bold py-5">
          Service And Repair
        </h1>
        <div className="space-y-10 px-4 md:px-0">
          {SampleServiceData.map((data) => (
            <div
              key={data.id}
              className={`flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl ${
                data.id % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>

              <div className="w-full md:w-1/2 text-white space-y-4">
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <p className="text-sm md:text-base text-gray-300">
                  {data.description}
                </p>
                <Link
                  to="/services"
                  className="inline-block mt-2 text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4"
                >
                  Enquire Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceAndRepair;
