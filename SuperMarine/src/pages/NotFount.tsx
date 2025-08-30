import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Dark 404 Page — single-file React component (TypeScript)
// TailwindCSS required in your project. Framer Motion optional but used here for subtle animation.

export default function Dark404Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1020] via-[#071024] to-[#05060a] text-white flex items-center justify-center p-6">
      {/* Floating decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -left-32 -top-20 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#2b2f78] to-[#0ea5a3] opacity-10 blur-3xl transform rotate-12" />
        <div className="absolute -right-40 bottom-10 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#7c3aed] to-[#ef4444] opacity-8 blur-3xl" />
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 600"
          fill="none"
          preserveAspectRatio="none"
        >
          <g opacity="0.02">
            <path
              d="M0 300 C150 200 350 400 500 300 C650 200 800 400 1000 300"
              stroke="#ffffff"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl w-full rounded-2xl shadow-2xl bg-gradient-to-tr from-[#071026]/60 to-[#07102a]/40 backdrop-blur-md border border-white/6 p-8 sm:p-12 relative"
        aria-labelledby="page-404-title"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Illustration / big code */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.96 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="inline-flex items-end gap-3"
                >
                  <span className="text-[84px] md:text-[120px] font-extrabold leading-none tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-[#D4AF37] drop-shadow-lg">
                    404
                  </span>
                </motion.div>

                <p className="mt-2 text-sm text-gray-300 max-w-[280px] mx-auto md:mx-0">
                  Oops — the page you are looking for doesn’t exist or has been
                  moved.
                </p>

                <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4AF37] text-black font-semibold shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37]/40"
                  >
                    Go Home
                  </Link>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-sm text-white/90 hover:bg-white/3 focus:outline-none"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Card with helpful links */}
          <div className="w-full md:w-1/2">
            <motion.aside
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08, duration: 0.5 }}
              className="bg-[#0b1220]/60 border border-white/6 rounded-xl p-6 shadow-inner"
              aria-label="helpful-links"
            >
              <h3 className="text-lg font-semibold mb-3">Try one of these</h3>

              <ul className="space-y-3">
                <li>
                  <Link
                    to="/rental_service"
                    className="block w-full rounded-md px-4 py-3 bg-gradient-to-r from-white/3 to-transparent hover:scale-[1.01] transition-transform duration-150"
                  >
                    Explore Vehicles
                    <span className="block text-sm text-gray-300">
                      Browse our full fleet and filters
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/rental_service"
                    className="block w-full rounded-md px-4 py-3 bg-gradient-to-r from-white/3 to-transparent hover:scale-[1.01] transition-transform duration-150"
                  >
                    Pricing & Packages
                    <span className="block text-sm text-gray-300">
                      Find hourly, daily & weekly rates
                    </span>
                  </Link>
                </li>

                <li>
                  <a
                    href="https://wa.me/971509590553"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-md px-4 py-3 bg-gradient-to-r from-white/3 to-transparent hover:scale-[1.01] transition-transform duration-150"
                  >
                    Help Center
                    <span className="block text-sm text-gray-300">
                      Common questions & policies
                    </span>
                  </a>
                </li>
              </ul>
            </motion.aside>
          </div>
        </div>

        {/* Footer small */}
        <div className="mt-8 border-t border-white/6 pt-4 text-xs text-gray-400 flex items-center justify-between">
          <div>© {new Date().getFullYear()} SuperMarine Rental</div>
          <div className="flex items-center gap-4">
            <a href="/terms" className="hover:underline">
              Terms
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy
            </a>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
