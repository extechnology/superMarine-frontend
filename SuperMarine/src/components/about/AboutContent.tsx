const AboutContent = () => {
  return (
    <div className="bg-black py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-0 ">
        <p className="text-white mb-5">
          <span className="bg-gray-700 proza-libre-bold px-3 py-1 rounded-full">
            About Us
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div>
            <h1 className="text-3xl proza-libre-bold font-bold text-white text-start pb-5">
              Ride the Waves with Unmatched Power
            </h1>
            <p className="text-white text-md text-justify">
              SUPER MARINE MOTOR CYCLES & JET SKI L.L.C. is a trusted name with
              over 15 years of experience in Abu Dhabi, specializing in the
              rental and maintenance of high-performance Jet Skis, Standing Jet
              Skis, Quad Bikes, and Buggies. Renowned for reliability,
              professionalism, and premium service, the company caters to
              thrill-seekers, tourists, and adventure lovers with a passion for
              water and off-road experiences. Their fleet features top-tier,
              well-maintained vehicles, ensuring both safety and excitement. In
              addition to rentals, we offer expert repair and maintenance
              services backed by a skilled technical team. SUPER MARINE has
              built a strong reputation by delivering unforgettable adventures
              and dependable support. Whether you're racing across waves or
              conquering desert trails, the company guarantees an exhilarating,
              secure ride every time. With a legacy of excellence, SUPER MARINE
              continues to be the preferred choice for adventure rentals and
              mechanical expertise across Abu Dhabi and beyond.
            </p>
          </div>
          <div className="content-center">
            <img
              src="/jet-ski.jpg"
              alt="Jet Ski Adventure"
              className="rounded-2xl  w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutContent;
