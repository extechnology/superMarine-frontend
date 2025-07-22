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
    <div>
      <div className="max-w-7xl mx-auto pb-8">
        <h1 className="text-center text-xl  ">
          <span className="backdrop-blur-lg bg-black/20 px-5 py-3 rounded-full">
            Experience Now
          </span>
        </h1>
        <h1 className="text-center text-3xl font-bold py-5">
          Experience Our Finest Yachts and JetSkies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Data.map((data) => (
            <div
              key={data.id}
              className="relative group overflow-hidden rounded-3xl"
            >
              <img
                src={data.image}
                alt="no image"
                className="rounded-3xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90 rounded-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 text-white transition-all duration-500 opacity-0 group-hover:opacity-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl experience font-semibold">
                      {data.title}
                    </h1>
                    <p className="text-sm sm:text-base">{data.description}</p>
                  </div>
                  <div>
                    <p className="text-lg experience-price sm:text-2xl font-bold">
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
