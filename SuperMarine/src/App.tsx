import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Loader from "./common/Loader";
import ScrollToTop from "./common/ScrollToTop";
import WhatsAppButton from "./common/WhatsApp";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PasswordResetRequestPage from "./pages/ResetPassword";
import PaymentCancel from "./pages/PaymentCanel";
import PaymentSuccess from "./pages/PaymentSuccess";
import MyBookings from "./pages/MyBookings";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";
import { Toaster } from "sonner";
import AuthModal from "./components/accounts/AuthModal";
import PasswordResetConfirmPage from "./pages/PasswordResetConfirm";
// import { PaymentElement } from "@stripe/react-stripe-js";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/ContactUs"));
const ServiceAndRepair = lazy(() => import("./pages/Repair"));
const RentalService = lazy(() => import("./pages/RentalService"));
const Gallery = lazy(() => import("./pages/Gallery"));
const BookNow = lazy(() => import("./pages/BookNow"));
const VerifyOtp = lazy(() => import("./components/accounts/VerifyOtp"));

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
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <Toaster theme="dark" position="top-center" richColors />

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
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/reset" element={<PasswordResetRequestPage />} />
            <Route path="/payment/cancel" element={<PaymentCancel />} />
            <Route path="/payment/success" element={<PaymentSuccess />} />
            <Route path="/my_bookings" element={<MyBookings />} />
            <Route
              path="/reset-password/:uidb64/:token"
              element={<PasswordResetConfirmPage />}
            />
          </Routes>
        </Suspense>
        <AuthModal />
        <WhatsAppButton />
        <Footer />
      </GoogleOAuthProvider>
    </Router>
  );
}

export default App;
