
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white">
      <div className="relative w-32 h-32">
        {/* Submarine body */}
        <div className="absolute inset-0 animate-pulse bg-yellow-400 rounded-full shadow-lg flex items-center justify-center">
          <span className="text-sm font-bold">Submarine</span>
        </div>

        {/* Bubbles */}
        <div className="absolute -left-5 top-10 w-3 h-3 bg-white/70 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
        <div className="absolute -left-7 top-16 w-2.5 h-2.5 bg-white/50 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
        <div className="absolute -left-4 top-24 w-2 h-2 bg-white/30 rounded-full animate-bounce [animation-delay:-0.6s]"></div>

        {/* Waves / Water movement */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-300 animate-ping rounded-full"></div>
      </div>

      <div className="ml-6">
        <p className="text-xl font-semibold animate-pulse">
          Launching Jet Ski Adventure...
        </p>
        <p className="text-sm text-blue-200 mt-2 animate-fade-in">
          Please wait while we load your ocean experience
        </p>
      </div>
    </div>
  );
};

export default Loader;
