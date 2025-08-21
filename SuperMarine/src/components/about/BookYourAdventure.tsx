import { Link } from "react-router";
import useBookAdventure from "../../hooks/useBookAdventure";
import Loader from "../../common/Loader";

const BookYourAdventure = () => {
  const { bookAdventure, loading, error } = useBookAdventure();
  const data =
    Array.isArray(bookAdventure) && bookAdventure.length > 0
      ? bookAdventure[0]
      : null;

  if (loading) {
    Loader;
  }

  if (error) {
    return <div className="error-message">⚠️ Error: {error.message}</div>;
  }
  return (
    <div className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <h1
          data-aos="fade-up"
          data-aos-duration="1100"
          className="md:text-3xl text-2xl font-bold text-center proza-libre-bold"
        >
          Book Your Adventure
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1200"
          className="md:text-lg text-sm text-center mt-4"
        >
          {data?.subtitle}
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5"
          data-aos="fade-up"
          data-aos-duration="1300"
        >
          {/* Card 1 */}
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={data?.image}
              alt="Jet Ski Adventure"
              className="rounded-2xl transform transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex items-center justify-center">
              <Link
                to="/rental_service"
                className="text-white proza-libre-bold text-xl font-semibold bg-black/50 px-5 py-2 rounded-full hover:bg-black/70 transition"
              >
                Book Your Ride
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={data?.image2}
              alt="Jet Ski Adventure"
              className="rounded-2xl transform transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex items-center justify-center">
              <Link
                to="/service_and_repair"
                className="text-white proza-libre-bold text-xl font-semibold bg-black/50 px-5 py-2 rounded-full hover:bg-black/70 transition"
              >
                Book Your Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookYourAdventure;
