const HeroForm = () => {
  return (
    <div className="bg-black">
      <div className="relative -top-32 z-30 px-4 md:px-0">
        <div className="max-w-6xl mx-auto md:flex bg-transparent justify-center overflow-hidden">
          {/* Left Form - Vertical */}
          <form className="flex flex-col gap-4 p-10 bg-gray-100 md:w-1/2 shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Make Your Trip
            </h1>
            <label htmlFor="Pick up Location" className="flex flex-col gap-1">
              <span className="text-sm font-medium text-gray-700">
                Pick up Location
              </span>
              <input
                type="text"
                placeholder="Enter location"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </label>
            <label htmlFor="Drop off Location" className="flex flex-col gap-1">
              <span className="text-sm font-medium text-gray-700">
                Drop off Location
              </span>
              <input
                type="text"
                placeholder="Enter location"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label htmlFor="Pick up Date" className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-700">
                  Pick up Date
                </span>
                <input
                  type="date"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>
              <label htmlFor="Drop off Date" className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-700">
                  Drop off Date
                </span>
                <input
                  type="date"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>
            </div>
            <label htmlFor="Pick up Time" className="flex flex-col gap-1">
              <span className="text-sm font-medium text-gray-700">
                Pick up Time
              </span>
              <input
                type="time"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </label>
            <button className="mt-4 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-md transition duration-200">
              Rent a Car Now
            </button>
          </form>

          {/* Right Content - Landscape */}
          <div className="flex flex-col shadow-lg justify-between p-10 bg-amber-100 md:w-1/2 h-[85%] my-auto">
            <div>
              <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                Better way to Rent your Vehicle
              </h1>
              <div className="md:flex space-y-6 md:space-y-0 justify-between gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full mb-3 flex items-center justify-center text-white text-2xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold">Choose Location</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Select your desired pickup location
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full mb-3 flex items-center justify-center text-white text-2xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold">Pick-Up Date</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Choose your rental dates
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full mb-3 flex items-center justify-center text-white text-2xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold">Book Your Car</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Reserve your perfect vehicle
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded-md transition duration-200">
                Reserve your Perfect Car
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroForm;
