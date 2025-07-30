import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import type { Slide } from "../../types";

const slides: Slide[] = [
  {
    id: 1,
    image: "/hero1.jpg",
    title: "Ride the Waves, Rule the Dunes!",
    subtitle:
      "Experience the ultimate water adventure with excitement, splashes, and unforgettable memories",
  },
  {
    id: 2,
    image: "/hero2.jpg",
    title: "Fuel Your Thrill — Jet Ski & Quad Bike Awaits!",
    subtitle:
      "Experience the ultimate water adventure with excitement, splashes, and unforgettable memories",
  },
  {
    id: 3,
    image: "/hero3.jpg",
    title: "Empowering Your Journey",
    subtitle: "Solutions built for you",
  },
];

const Hero = () => {
  return (
    <div className="w-full h-[90vh] ">
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
                <h2
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="text-4xl proza-libre-bold md:text-5xl font-bold mb-4"
                >
                  {slide.title}
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="900"
                  className="text-lg md:text-xl mb-6"
                >
                  {slide.subtitle}
                </p>
                {/* <div
                  className="flex gap-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <Link to={"/contact"}>
                    <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-black transition">
                      Contact Us
                    </button>
                  </Link>
                  <button className="px-6 py-3  border bg-white text-black rounded-lg shadow-lg hover:text-white hover:border-white hover:bg-transparent transition">
                    Enquire Now
                  </button>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
