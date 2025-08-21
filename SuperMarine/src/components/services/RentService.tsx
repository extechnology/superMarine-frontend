import useRentalBanner from "../../hooks/useRentalBanner";

const RentService = () => {

  const { rentalBanner } = useRentalBanner();
  const image = rentalBanner?.[0]?.image;
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
            className="text-white px-5 md:px-0 text-center  proza-libre-bold text-2xl w-[100%] md:w-[50%] md:text-5xl font-bold"
          >
            Keep the Service on time,  Explore the Comfort
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RentService;
