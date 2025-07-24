const GalleryData = [
  {id:1,
    image:"/hero-carousel1.jpg",
    title:"Yamaha Jet Ski",
  },
  {id:2,
    image:"/hero-carousel1.jpg",
    title:"Ducati Jet Ski",
  },
  {id:3,
    image:"/hero-carousel1.jpg",
    title:"Rolls Royce Jet Ski",
  },
  {id:4,
    image:"/hero-carousel1.jpg",
    title:"Suzuki Jet Ski",
  },
  {id:5,
    image:"/hero-carousel1.jpg",
    title:"Honda Jet Ski",
  },
  {id:6,
    image:"/hero-carousel1.jpg",
    title:"Lamborghini Jet Ski",
  },
]

const Gallery = () => {
  return (
    <div>
      <div className="relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black z-10"></div>

        {/* Background Image */}
        <img
          src="/about-hero.jpg"
          alt="no image"
          className="w-full h-96 object-cover"
        />

        {/* Centered Text */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-white proza-libre-bold text-2xl md:text-5xl font-bold">
            Gallery
          </h1>
        </div>
      </div>

      <div className="bg-black py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-5 px-4 md:px-0">
          {GalleryData.map((data) => (
            <div key={data.id} className="relative">
              <img src={data.image} alt={data.title} className="rounded-2xl" />
              <h1 className="absolute proza-libre-bold bottom-5 text-lg text-center font-semibold w-full bg-black/50 py-1 text-white ">
                {data.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Gallery