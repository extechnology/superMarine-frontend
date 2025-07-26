import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Loader from "./common/Loader";
import ScrollToTop from "./common/ScrollToTop";
import WhatsAppButton from "./common/WhatsApp";
import AOS from "aos";
import Lenis from "@studio-freight/lenis";
import "aos/dist/aos.css";
import "./App.css";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/ContactUs"));
const ServiceAndRepair = lazy(() => import("./pages/Repair"));
const RentalService = lazy(() => import("./pages/RentalService"));
const Gallery = lazy(() => import("./pages/Gallery"));
const BookNow = lazy(() => import("./pages/BookNow"));

function App() {


  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
    });
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rental_service" element={<RentalService />} />
          <Route path="/service_and_repair" element={<ServiceAndRepair />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book_now/:id" element={<BookNow />} />
        </Routes>
      </Suspense>
      <WhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;
