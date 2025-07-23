import ExperienceNow from "../components/home/ExperienceNow";
import GallerySlider from "../components/home/GallerySlider";
import Hero from "../components/home/Hero";
import HeroForm from "../components/home/HeroForm";
import Numbers from "../components/home/Numbers";

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroForm/>
      <ExperienceNow/>
      <Numbers/>
      <GallerySlider/>
    </div>
  );
};
export default Home;
