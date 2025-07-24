const AboutHero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black"></div>
      <img
        src="/about-hero.jpg"
        alt="no image"
        className="w-full h-96 object-cover"
      />
      <div className="absolute left-[8%] md:text-center md:left-0 proza-libre-bold bottom-[22%] flex items-center justify-center text-white text-4xl font-bold">
        Experience the Rush <br /> with SuperJet's Blazing Speed
      </div>
    </div>
  );
};
export default AboutHero;
