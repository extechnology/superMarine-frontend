const ThrillMeetTrust = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-6">
        <section className="bg-black text-white py-16 px-4 md:px-0">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Image Section */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/beautiful.jpg"
                alt="Adventure Tours"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Text Section */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Where <span className="text-yellow-400">Thrill</span> Meets{" "}
                <span className="text-yellow-400">Trust</span>
              </h2>

              <div className="space-y-9">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400">
                    Premium Fleet & Safety First:
                  </h3>
                  <p className="text-gray-300 mt-1">
                    We offer top-of-the-line Jet Skis, Standing Jet Skis, Quad
                    Bikes, and Buggies — all regularly maintained for peak
                    performance and maximum safety.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-400">
                    Experienced Team & Guided Tours:
                  </h3>
                  <p className="text-gray-300 mt-1">
                    Our expert team ensures a safe, thrilling, and well-guided
                    adventure, whether on water or desert terrain.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-400">
                    Scenic Locations & Unmatched Value:
                  </h3>
                  <p className="text-gray-300 mt-1">
                    Ride through breathtaking routes with competitive pricing,
                    making every adventure unforgettable and worth every dirham.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ThrillMeetTrust;
