const Data = [
  {
    id: 1,
    image: "/hero-carousel1.jpg",
    title: "Yamaha Jet Ski",
    description: "Agressive Jet Ski",
    price: "300 AED",
  },
  {
    id: 2,
    image: "/hero-carousel1.jpg",
    title: "Rolls Royce Boat",
    description: "Quiet Comfortable Boat",
    price: "350 AED",
  },
  {
    id: 3,
    image: "/hero-carousel1.jpg",
    title: "Ducati Jet Ski",
    description: "Sporty Jet Ski",
    price: "400 AED",
  },
  {
    id: 4,
    image: "/hero-carousel1.jpg",
    title: "Lamborghini Boat",
    description: "Seaways Rocket",
    price: "450 AED",
  },
];
const ExperienceNow = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto pb-12 pt-12">
        <h1 className="text-center md:text-lg text-sm ">
          <span className="backdrop-blur-2xl text-white bg-gray-800  px-5 py-3 rounded-full">
            Experience Now
          </span>
        </h1>
        <h1 className="text-center md:text-4xl text-2xl proza-libre-bold text-white  font-bold py-8 px-4 md:px-0">
          Adventure Starts Where the Road Ends
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Data.map((data) => (
            <div
              key={data.id}
              className="relative group overflow-hidden rounded-3xl px-4 md:px-0"
            >
              <img
                src={data.image}
                alt="no image"
                className="rounded-3xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90 rounded-3xl transition-opacity duration-300 md:group-hover:opacity-100 md:opacity-0"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 text-white transition-all duration-500 md:opacity-0 md:group-hover:opacity-100">
                <div className="flex px-3 md:px-0  justify-between items-start sm:items-end w-full gap-4">
                  <div>
                    <h1 className="text-lg sm:text-3xl experience font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-sm sm:text-base">{data.description}</p>
                  </div>
                  <div >
                    <p className="text-md experience sm:text-2xl font-bold">
                      {data.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ExperienceNow;
