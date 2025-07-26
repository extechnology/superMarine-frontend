const AboutHero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black"></div>
      <img
        src="/about-hero.jpg"
        alt="no image"
        className="w-full h-96 object-cover"
      />
      <div data-aos="fade-up" data-aos-duration="800" className="absolute md:left-[8%] md:text-left pl-4 md:pl-0 proza-libre-bold bottom-[22%] flex items-center justify-center text-white md:text-4xl text-2xl font-bold">
        Experience the Rush <br /> with SuperJet's Blazing Speed
      </div>
    </div>
  );
};
export default AboutHero;
