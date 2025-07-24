import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import type { Slide } from "../../types";

const slides: Slide[] = [
  {
    id: 1,
    image: "/hero-carousel1.jpg",
    title: "Discover New Horizons",
    subtitle: "Explore the world with confidence",
    buttonText: "Get Started",
  },
  {
    id: 2,
    image: "/hero-carousel2.jpg",
    title: "Innovation in Motion",
    subtitle: "Shaping the future together",
    buttonText: "Learn More",
  },
  {
    id: 3,
    image: "/hero-carousel1.jpg",
    title: "Empowering Your Journey",
    subtitle: "Solutions built for you",
    buttonText: "Contact Us",
  },
];

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        effect="fade"
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image with Zoom Animation */}
              <div
                className="absolute inset-0 bg-cover bg-center zoom-image transition-transform duration-[5000ms]"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black z-10"></div>

              {/* Content */}
              <div className="relative z-20 flex flex-col justify-center items-center text-white text-center px-4 h-full">
                <h2 className="text-4xl proza-libre-bold md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-black transition">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
