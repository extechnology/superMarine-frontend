import Address from "../components/home/Address";
import ExperienceNow from "../components/home/ExperienceNow";
import GallerySlider from "../components/home/GallerySlider";
import Hero from "../components/home/Hero";
import HeroForm from "../components/home/HeroForm";
import Numbers from "../components/home/Numbers";
import ThrillMeetTrust from "../components/home/ThrillMeetTrust";

const Home = () => {
  return (
    <div>
      <Hero />
      <HeroForm/>
      <ExperienceNow/>
      <ThrillMeetTrust/>
      <Numbers/>
      <GallerySlider/>
      <Address/>
    </div>
  );
};
export default Home;
