const Loader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gradient-to-b from-black to-black/80 text-white px-4 text-center space-y-6 md:space-y-0 md:space-x-8">
      {/* Submarine */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 animate-spin-slow">
        <div className="absolute inset-0 bg-yellow-400 rounded-full shadow-2xl flex items-center justify-center border-4 border-yellow-500/80">
          <span className="text-[0.7rem] sm:text-sm md:text-base font-bold text-gray-900">
            Submarine
          </span>
        </div>

        {/* Bubbles */}
        <div className="absolute -left-4 top-6 w-3 h-3 bg-white/70 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
        <div className="absolute -left-6 top-14 w-2.5 h-2.5 bg-white/50 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
        <div className="absolute -left-3 top-24 w-2 h-2 bg-white/30 rounded-full animate-bounce [animation-delay:-0.6s]"></div>

        {/* Wave Ring */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-200/60 animate-ping rounded-full shadow-inner"></div>
      </div>

      {/* Loading Text */}
      <div className="max-w-sm">
        <p className="text-xl sm:text-2xl font-semibold animate-pulse drop-shadow-md">
          Launching Jet Ski Adventure...
        </p>
        <p className="text-sm sm:text-base text-blue-100 mt-2 animate-fade-in">
          Please wait while we load your ocean experience
        </p>
      </div>
    </div>
  );
};

export default Loader;
