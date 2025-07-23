import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const images = [
  "/hero-carousel2.jpg",
  "/hero-carousel2.jpg",
  "/hero-carousel2.jpg",
  "/hero-carousel2.jpg",
];

const GallerySlider = () => {
  return (
    <div className="bg-black text-white">
      <div className="w-full py-10 max-w-7xl mx-auto ">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
          Our Adventures Gallery
        </h2>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-60 object-cover rounded-xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GallerySlider;
