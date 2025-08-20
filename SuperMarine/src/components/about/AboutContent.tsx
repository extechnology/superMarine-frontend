import Loader from "../../common/Loader";
import useAboutContent from "../../hooks/useAboutContent";

const AboutContent = () => {
  const { aboutContent, loading, error } = useAboutContent();
  console.log(aboutContent,"about about");
  console.log(aboutContent[0]?.title, "about 2");
  if (loading) return <Loader />;
  if (error)
    return <div className="error-message">⚠️ Error: {error.message}</div>;
  return (
    <div className="bg-black py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-0 ">
        <p
          className="text-white mb-5"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <span className="bg-gray-700 proza-libre-bold px-3 py-1 text-sm rounded-full">
            About Us
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="content-center">
            <h1
              data-aos="fade-up"
              data-aos-duration="900"
              className="md:text-3xl text-2xl  proza-libre-bold font-bold text-white text-start pb-5"
            >
              {aboutContent[0]?.title}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-white md:text-md text-sm text-justify"
            >
              {aboutContent[0]?.description}
            </p>
          </div>
          <div className="content-center">
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={aboutContent[0]?.image}
              alt={aboutContent[0]?.title}
              className="rounded-2xl  w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutContent;
