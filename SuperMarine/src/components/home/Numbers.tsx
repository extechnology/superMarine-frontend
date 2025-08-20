import useNumbers from "../../hooks/useNumbers";
import Loader from "../../common/Loader";

const Numbers = () => {
  const { numbers, loading, error } = useNumbers();
  console.log(numbers, "numbers");
  const image = numbers?.image;
  console.log(image, "image");
  if (loading) return <Loader />;
  if (error)
    return <div className="error-message">⚠️ Error: {error.message}</div>;
  if (!numbers) return null;

  // ✅ Stats directly from API (no number parsing)
  const stats = [
    { title: "Experienced", value: numbers.experience },
    { title: "Rides", value: numbers.total_rides },
    { title: "Happy Customers", value: numbers.happy_customers },
  ];

  return (
    <div className="bg-black">
      <div
        data-aos="fade-up"
        data-aos-duration="900"
        style={{ backgroundImage: `url(${image})` }}
        className="relative py-10 bg-cover text-white bg-center text-center grid grid-cols-1 md:grid-cols-3 space-y-8 md:space-y-0 w-full mx-auto"
      >
        {/* Overlay */}
        <div className="absolute m-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 inset-0"></div>

        {/* Stats */}
        {stats.map((stat, idx) => (
          <div key={idx} className="text-xl md:text-2xl z-10 font-bold">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-2xl md:text-3xl font-extrabold"
            >
              {stat.value}
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1100"
              className="text-lg font-semibold mt-1"
            >
              {stat.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
