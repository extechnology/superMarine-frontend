import useServiceBanner from "../../hooks/useServiceBanner";

const Services: React.FC = () => {
  const { serviceBanner } = useServiceBanner();
  const image = serviceBanner?.[0]?.image;
  return (
    <div className="bg-black">
      {/* Hero Section (unchanged) */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black z-10"></div>
        <img
          src={image}
          alt="Services background"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1
            data-aos="fade-up"
            data-aos-duration="900"
            className="text-white proza-libre-bold w-[100%] px-5 md:px-0 text-center md:w-[50%] text-2xl md:text-5xl font-bold"
          >
            Book an Adventure vehicle & Enjoy the Rides
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
