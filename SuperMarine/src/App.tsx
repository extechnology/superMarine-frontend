import "./App.css";
import { lazy,Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Loader from "./common/Loader";
import ScrollToTop from "./common/ScrollToTop";
import WhatsAppButton from "./common/WhatsApp";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/ContactUs"));
const Service = lazy(() => import("./pages/Services"));
const Gallery = lazy(() => import("./pages/Gallery"));
const BookNow = lazy(() => import("./pages/BookNow"));

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book-now" element={<BookNow />} />
        </Routes>
      </Suspense>
      <WhatsAppButton/>
      <Footer />
    </Router>
  );
}

export default App;
