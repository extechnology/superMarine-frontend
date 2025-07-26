import { useEffect } from "react";
import Address from "../components/home/Address";
import ExperienceNow from "../components/home/ExperienceNow";
import GallerySlider from "../components/home/GallerySlider";
import Hero from "../components/home/Hero";
import HeroForm from "../components/home/HeroForm";
import Numbers from "../components/home/Numbers";
import ThrillMeetTrust from "../components/home/ThrillMeetTrust";
import ScrollReveal from "scrollreveal";

const Home = () => {
  
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "20px",
      origin: "bottom",
      duration: 800,
      delay: 100,
      opacity: 0,
      easing: "ease-in-out",
      reset: false,
      beforeReveal: (el) => {
        if (el instanceof HTMLElement) {
          el.classList.remove("opacity-0", "blur", "translate-y-8");
          el.classList.add("opacity-100", "blur-0", "translate-y-0");
        }
      },
    });
  }, []);


  return (
    <div>
      <Hero />
      <HeroForm />
      <ExperienceNow />
      <ThrillMeetTrust />
      <Numbers />
      <GallerySlider />
      <Address />
    </div>
  );
};
export default Home;
