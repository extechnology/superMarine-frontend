import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import useAdventureGallery from "../../hooks/useAdventureGallery";
import Loader from "../../common/Loader";


const GallerySlider = () => {

  const { gallery, loading, error } = useAdventureGallery();
  console.log(gallery,'gallleryh');
  if (loading) return <Loader />;
  if (error)
    return <div className="error-message">⚠️ Error: {error.message}</div>;
  return (
    <div className="bg-black text-white">
      <div className="w-full py-10 max-w-7xl mx-auto reveal">
        <h2
          data-aos="fade-up"
          data-aos-duration="900"
          className="text-2xl md:text-4xl proza-libre-bold font-semibold text-center mb-4"
        >
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
          className="w-full "
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          {gallery.map((img, idx) => (
            <SwiperSlide key={idx} className="px-4 md:px-0">
              <img
                src={img.image}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-60 object-cover rounded-xl shadow-lg "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GallerySlider;
