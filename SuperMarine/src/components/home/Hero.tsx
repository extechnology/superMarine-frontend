import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Loader from "../../common/Loader";
import useHeroCarousel from "../../hooks/useHeroCarousel";
import type { heroCarousel } from "../../types";

const Hero = () => {
  const { hero, loading, error } = useHeroCarousel();
  const BASE_URL = "https://server.supermarinerental.com";


  if (loading) return <Loader />;
  if (error)
    return <div className="error-message">⚠️ Error: {error.message}</div>;

  return (
    <div className="w-full h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        effect="fade"
        className="w-full h-full"
      >
        {hero?.map((slide: heroCarousel) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Desktop Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center zoom-image transition-transform duration-[5000ms] hidden md:block"
                style={{ backgroundImage: `url(${BASE_URL}${slide.image})` }}
              ></div>

              {/* Mobile Background Image (fallback to desktop if null) */}
              <div
                className="absolute inset-0 bg-cover bg-center zoom-image transition-transform duration-[5000ms] md:hidden"
                style={{
                  backgroundImage: `url(${BASE_URL}${
                    slide.mobileImage ? slide.mobileImage : slide.image
                  })`,
                }}
              ></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black z-10"></div>

              {/* Content */}
              <div className="relative z-20 flex flex-col justify-center items-center text-white text-center px-4 h-full">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="text-3xl md:text-5xl font-bold mb-4 proza-libre-bold"
                >
                  {slide.title}
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="900"
                  className="text-base md:text-xl mb-6"
                >
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
