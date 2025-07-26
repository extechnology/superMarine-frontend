
const GalleryData = [
  {
    id: 1,
    image: "/about-hero.jpg",
    title: "Yamaha Jet Ski",
    description: "Agressive Jet Ski",
  },
  {
    id: 2,
    image: "/chair-lift.jpg",
    title: "Ducati Jet Ski",
    description: "Agressive Jet Ski",
  },
  {
    id: 3,
    image: "/underwater.jpg",
    title: "Rolls Royce Jet Ski",
    description: "Agressive Jet Ski",
  },
  {
    id: 4,
    image: "/beautiful.jpg",
    title: "Suzuki Jet Ski",
    description: "Agressive Jet Ski",
  },
  {
    id: 5,
    image: "/sea.jpg",
    title: "Honda Jet Ski",
    description: "Agressive Jet Ski",
  },
  {
    id: 6,
    image: "/hero-carousel1.jpg",
    title: "Lamborghini Jet Ski",
    description: "Agressive Jet Ski",
  },
  {
    id: 7,
    image: "/jet-ski.jpg",
    title: "Lamborghini Jet Ski",
    description: "Agressive Jet Ski",
  },
  {
    id: 8,
    image: "/hero-carousel2.jpg",
    title: "Lamborghini Jet Ski",
    description: "Agressive Jet Ski",
  },
];

const Gallery = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative group">
        {/* Overlay with subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black z-10 transition-all duration-700 group-hover:opacity-90"></div>

        {/* Background Image with parallax effect */}
        <div className="w-full h-96 overflow-hidden">
          <img
            src="/about-hero.jpg"
            alt="Gallery hero"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>

        {/* Centered Text with animation */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-white proza-libre-bold text-2xl md:text-5xl font-bold transform transition-all duration-500 group-hover:scale-110">
            Gallery
          </h1>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-black py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GalleryData.map((data) => (
              <div
                key={data.id}
                className="relative break-inside-avoid group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 mb-4"
              >
                {/* Image with zoom and parallax effect */}
                <div className="overflow-hidden">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Animated Title Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h2 className="proza-libre-bold text-white text-xl md:text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {data.title}
                  </h2>
                  <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                    {data.description || "View more details"}
                  </p>
                  <button className="mt-3 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all delay-150 duration-500 hover:bg-white/20 border border-white/20">
                    View Image
                  </button>
                </div>

                {/* Corner Decoration (optional) */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
