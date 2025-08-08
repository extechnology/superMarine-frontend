import type { about } from "../../types";
import Loader from "../../common/Loader";
import useAboutHero from "../../hooks/useAboutHero"; // ✅ corrected typo

const AboutHero = () => {
  const { about, loading, error } = useAboutHero();

  if (loading) return <Loader />;
  if (error)
    return <div className="error-message">⚠️ Error: {error.message}</div>;

  if (!Array.isArray(about)) return null; 

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black z-10"></div>

      {about.map((item: about, index: number) => {
        // ✅ Construct full image URL
        const imageUrl = item.image?.startsWith("http")
          ? item.image
          : `${import.meta.env.VITE_API_BASE_URL}${item.image}`;

        return (
          <div key={index} className="relative">
            <img
              src={imageUrl}
              alt={item.title || "no image"}
              className="w-full h-96 object-cover"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="absolute md:left-[8%] md:text-left pl-4 md:pl-0 proza-libre-bold bottom-[22%] flex items-center justify-center text-white md:text-4xl text-2xl font-bold z-20"
            >
              <h1>{item.title}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutHero;
