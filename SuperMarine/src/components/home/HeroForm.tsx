const HeroForm = () => {
  return (
    <div className="bg-black">
      <div className="relative -top-32 z-30 px-4 md:px-0">
        <div className="max-w-6xl mx-auto md:flex bg-transparent justify-center overflow-hidden">
          {/* Left Form - Vertical */}
          <form className="flex flex-col gap-4 p-10 bg-white backdrop-blur-2xl md:w-1/2 shadow-lg">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Adventure Vehicle Booking
            </h1>

            <label
              className="flex flex-col gap-1"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <span className="text-sm font-medium text-gray-700">Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </label>
            <div className="md:flex justify-between">
              <label
                className="flex flex-col gap-1"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <span className="text-sm font-medium text-gray-700">
                  Phone No.
                </span>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>

              <label
                className="flex flex-col gap-1"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <span className="text-sm font-medium text-gray-700">
                  Email ID
                </span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>
            </div>

            <label
              className="flex flex-col gap-1"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="text-sm font-medium text-gray-700">
                Adventure Vehicle
              </span>
              <input
                type="text"
                placeholder="Search or select vehicle"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </label>

            <div className="grid md:grid-cols-3 gap-4">
              <label
                className="flex flex-col gap-1"
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                <span className="text-sm font-medium text-gray-700">
                  Ride Date
                </span>
                <input
                  type="date"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>

              <label
                className="flex flex-col gap-1"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <span className="text-sm font-medium text-gray-700">
                  Report Time
                </span>
                <input
                  type="time"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>

              <label
                className="flex flex-col gap-1"
                data-aos="fade-up"
                data-aos-duration="1300"
              >
                <span className="text-sm font-medium text-gray-700">
                  Ride Time
                </span>
                <input
                  type="time"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>
            </div>
            <div className="md:flex items-end justify-between gap-4">
              <label
                className="flex flex-col flex-1 gap-1"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <span className="text-sm font-medium text-gray-700">
                  No. of Persons
                </span>
                <input
                  type="number"
                  placeholder="Enter number of persons"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>

              <button
                data-aos="fade-up"
                data-aos-duration="1400"
                className="bg-black text-red-500 border border-[#D4AF37] hover:bg-[#1a1a1a]
    font-bold py-3 px-6 rounded-md transition duration-200 mt-4 md:mt-0"
              >
                Enquire Now!
              </button>
            </div>
          </form>

          {/* Right Content - Landscape */}
          <div className="flex flex-col shadow-lg justify-between p-10 bg-amber-100 md:w-1/2 h-[85%] my-auto">
            <div className="py-10">
              <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
                Ride Steps
              </h1>
              <div className="md:flex space-y-6 md:space-y-0 justify-between gap-6">
                <div className="flex flex-col items-center text-center">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="w-16 h-16 bg-red-600 rounded-full mb-3 flex items-center justify-center text-white text-2xl font-bold"
                  >
                    1
                  </div>
                  <h3
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="font-semibold text-sm"
                  >
                    Search Adventure Vehicle
                  </h3>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="w-16 h-16 bg-red-600 rounded-full mb-3 flex items-center justify-center text-white text-2xl font-bold"
                  >
                    2
                  </div>
                  <h3
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="font-semibold text-sm"
                  >
                    Confirm the Ride
                  </h3>
                  <p className=" text-gray-600 text-xs mt-1"></p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="w-16 h-16 bg-red-600 rounded-full mb-3 flex items-center justify-center text-white text-2xl font-bold"
                  >
                    3
                  </div>
                  <h3
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="font-semibold text-sm"
                  >
                    Experience the Adventure
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroForm;
