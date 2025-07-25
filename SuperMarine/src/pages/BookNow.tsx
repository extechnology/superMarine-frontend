import { useState } from "react";
import { Calendar, Clock } from "react-feather";

interface JetSkiService {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  durationOptions: string[];
  discount?: number;
}

const BookingPage = () => {
  // Sample data - replace with your actual data
  const jetSkiService: JetSkiService = {
    id: 1,
    title: "Premium Jet Ski Rental",
    description:
      "Experience the thrill of riding our high-performance jet skis with safety gear included. Perfect for adventure seekers!",
    image: "/jet-ski.jpg",
    price: 120,
    durationOptions: ["30 mins", "1 hour", "2 hours", "Full day"],
    discount: 15,
  };

  // State management
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedDuration, setSelectedDuration] = useState<string>(
    jetSkiService.durationOptions[1]
  );
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  // Available time slots
  const timeSlots = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  // Calculate price based on duration
  const calculatePrice = () => {
    const basePrice = jetSkiService.price;
    let multiplier = 1;

    if (selectedDuration === "30 mins") multiplier = 0.6;
    if (selectedDuration === "1 hour") multiplier = 1;
    if (selectedDuration === "2 hours") multiplier = 1.8;
    if (selectedDuration === "Full day") multiplier = 3.5;

    const subtotal = basePrice * multiplier;
    const discount = jetSkiService.discount
      ? subtotal * (jetSkiService.discount / 100)
      : 0;

    return {
      subtotal: subtotal.toFixed(2),
      discount: discount.toFixed(2),
      total: (subtotal - discount).toFixed(2),
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log({
      service: jetSkiService,
      date: selectedDate,
      time: selectedTime,
      duration: selectedDuration,
      customer: customerInfo,
      price: calculatePrice(),
    });
    alert("Booking submitted successfully!");
  };

  return (
    <div className="min-h-screen relative pt-30 bg-[url('/sea.jpg')] bg-cover text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-black/60 to-black"></div>
      <div className="max-w-7xl mx-auto relative z-20">
        <h1 className="text-3xl proza-libre-bold font-bold mb-8 text-center text-white">
          Jet Ski Rental Booking
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Details Section */}
          <div className="bg-transparent ">
            <div className="bg-black/50 backdrop-blur-2xl rounded-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-white">
                  {jetSkiService.title}
                </h2>
                {jetSkiService.discount && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {jetSkiService.discount}% OFF
                  </span>
                )}
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <img
                  src={jetSkiService.image}
                  alt={jetSkiService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>

              <p className="text-gray-300 mb-6">{jetSkiService.description}</p>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                  <span className="font-medium">Base Price:</span>
                  <span className="font-bold">${jetSkiService.price}</span>
                </div>

                <div className="p-4 bg-gray-700 rounded-lg">
                  <h3 className="font-medium mb-2">Duration Options</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {jetSkiService.durationOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedDuration(option)}
                        className={`py-2 px-3 rounded-md transition-all ${
                          selectedDuration === option
                            ? "bg-blue-600 text-white"
                            : "bg-gray-600 hover:bg-gray-500"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form Section */}
          <div className="bg-black/40 backdrop-blur-2xl rounded-xl p-6 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Booking Details
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Date Picker */}
              <div className="mb-6">
                <label className=" text-sm font-medium mb-2 flex items-center">
                  <Calendar className="mr-2" size={16} />
                  Select Date
                </label>
                <input
                  title="Select Date"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) =>
                    setSelectedDate(
                      e.target.value ? new Date(e.target.value) : null
                    )
                  }
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Time Picker */}
              <div className="mb-6">
                <label className=" text-sm font-medium mb-2 flex items-center">
                  <Clock className="mr-2" size={16} />
                  Select Time Slot
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 rounded-md transition-all ${
                        selectedTime === time
                          ? "bg-blue-600 text-white"
                          : "bg-gray-600 hover:bg-gray-500"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Customer Info */}
              <div className="space-y-4 mb-6">
                <h3 className="font-medium">Your Information</h3>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    title="name"
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) =>
                      setCustomerInfo({ ...customerInfo, name: e.target.value })
                    }
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      title="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) =>
                        setCustomerInfo({
                          ...customerInfo,
                          email: e.target.value,
                        })
                      }
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone
                    </label>
                    <input
                      title="telephone"
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) =>
                        setCustomerInfo({
                          ...customerInfo,
                          phone: e.target.value,
                        })
                      }
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Special Requests
                  </label>
                  <textarea
                    title="Notes"
                    value={customerInfo.notes}
                    onChange={(e) =>
                      setCustomerInfo({
                        ...customerInfo,
                        notes: e.target.value,
                      })
                    }
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-gray-700 rounded-lg p-4 mb-6">
                <h3 className="font-medium mb-3">Price Summary</h3>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${calculatePrice().subtotal}</span>
                  </div>

                  {jetSkiService.discount && (
                    <div className="flex justify-between text-green-400">
                      <span>Discount ({jetSkiService.discount}%):</span>
                      <span>-${calculatePrice().discount}</span>
                    </div>
                  )}

                  <div className="border-t border-gray-600 my-2"></div>

                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>${calculatePrice().total}</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
