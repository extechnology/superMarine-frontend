import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import type { Slide } from "../../types";
import useHeroCarousel from "../../hooks/useHeroCarousel";
import Loader from "../../common/Loader";

// Extend Slide type to support mobileImage
interface ResponsiveSlide extends Slide {
  mobileImage: string;
}

const slides: ResponsiveSlide[] = [
  {
    id: 1,
    image: "/hero1.jpg",
    mobileImage: "/hero-mobile1.jpg",
    title: "Ride the Waves, Rule the Dunes!",
    subtitle:
      "Experience the ultimate water adventure with excitement, splashes, and unforgettable memories",
  },
  {
    id: 2,
    image: "/hero2.jpg",
    mobileImage: "/hero-mobile2.jpg",
    title: "Fuel Your Thrill — Jet Ski & Quad Bike Awaits!",
    subtitle:
      "Experience the ultimate water adventure with excitement, splashes, and unforgettable memories",
  },
  {
    id: 3,
    image: "/hero3.jpg",
    mobileImage: "/hero-mobile3.jpg",
    title: "Empowering Your Journey",
    subtitle: "Solutions built for you",
  },
];

const Hero = () => {
  const { hero, loading, error } = useHeroCarousel();
  console.log(hero, "hero");
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Desktop Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center zoom-image transition-transform duration-[5000ms] hidden md:block"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Mobile Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center zoom-image transition-transform duration-[5000ms] md:hidden"
                style={{ backgroundImage: `url(${slide.mobileImage})` }}
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
