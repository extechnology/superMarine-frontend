import { useState } from "react";
import { Calendar } from "react-feather";
import { useLocation } from "react-router";
import axiosInstance from "../api/axiosInstance";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useModalStore } from "../zustand/modalStore";
import { toast } from "sonner";

const BookingPage = () => {
  const location = useLocation();
  const BookNowData = location.state;
  const { openLogin } = useModalStore();

  if (!BookNowData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">
          No booking data available. Please go back and select a service.
        </p>
      </div>
    );
  }
  const Token = localStorage.getItem("accessToken");

  // Extract values safely
  const basePrice = parseFloat(BookNowData?.price || "0");
  const discount = BookNowData?.discount || 0;
  const maxPeople = BookNowData?.capacity || 10;

  const parseDuration = (durationString: string) => {
    if (!durationString) return "30 mins";
    const [hours, minutes] = durationString.split(":").map(Number);
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""}`;
    if (minutes > 0) return `${minutes} mins`;
    return "30 mins"; // fallback
  };

  const apiDuration = parseDuration(BookNowData?.duration || "00:00:30");

  const defaultDurationOptions = ["30 mins", "1 hour", "2 hours", "Full day"];
  const durationOptions = defaultDurationOptions.includes(apiDuration)
    ? defaultDurationOptions
    : [apiDuration, ...defaultDurationOptions];

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedDuration, setSelectedDuration] = useState<string>(apiDuration);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const getDurationMultiplier = (duration: string): number => {
    const multipliers: Record<string, number> = {
      "30 mins": 1,
      "1 hour": 2,
      "2 hours": 4,
      "Full day": 16,
    };
    return multipliers[duration] || 1;
  };


  const handlePhoneChange = (value: string | undefined) => {
    if (!value) {
      setCustomerInfo({ ...customerInfo, phone: "" });
      setErrors((prev) => ({ ...prev, phone: "Phone number is required" }));
      return;
    }

    if (!isValidPhoneNumber(value)) {
      setErrors((prev) => ({ ...prev, phone: "Invalid phone number" }));
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }

    setCustomerInfo({ ...customerInfo, phone: value });
  };


  // Price calculation
  const calculatePrice = () => {
    const durationMultiplier = getDurationMultiplier(selectedDuration);

    const totalCost = basePrice * durationMultiplier * numberOfPeople;

    return {
      basePrice: basePrice.toFixed(2),
      durationCost: (basePrice * durationMultiplier).toFixed(2),
      total: totalCost.toFixed(2),
      pricePerPerson: (totalCost / numberOfPeople).toFixed(2),
    };
  };

  const handlePeopleChange = (value: number) => {
    const newValue = Math.max(1, Math.min(maxPeople, value));
    setNumberOfPeople(newValue);
    if (errors.people) setErrors((prev) => ({ ...prev, people: "" }));
  };

  const convertTo24Hour = (time12h: string): string => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");
    if (hours === "12") {
      hours = "00";
    }
    if (modifier === "PM") {
      hours = String(parseInt(hours) + 12);
    }
    return `${hours}:${minutes}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!Token) {
      toast.warning("Please log in to book a service.");
      openLogin("login");
      return;
    }

    if (!isValidPhoneNumber(customerInfo.phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid phone number",
      }));
      setIsLoading(false);
      return;
    }

    try {
      const payload = {
        title: BookNowData?.title,
        email: customerInfo.email,
        date: selectedDate?.toISOString().split("T")[0] || "",
        time: convertTo24Hour(selectedTime),
        duration: selectedDuration,
        number_of_persons: numberOfPeople,
        base_price: basePrice,
        total_amount: parseFloat(pricing.total),
      };

      const { data } = await axiosInstance.post(
        "api/payments/create-checkout-session/",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      


      window.location.href = data.checkout_url;
    } catch (err) {
      console.error(err);
      alert("Failed to start payment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate pricing once
  const pricing = calculatePrice();

  return (
    <div className="min-h-screen relative pt-30 bg-[url('/book-now.jpg')] bg-cover text-gray-100 py-12 px-2 sm:px-4 lg:px-8">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
      <div className="max-w-7xl mx-auto relative z-20">
        <h1 className="text-2xl md:text-3xl proza-libre-bold font-bold mb-8 text-center text-white">
          Jet Ski Rental Booking
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Details Section */}
          <div className="bg-transparent">
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-white">
                  {BookNowData.title}
                </h2>
                {BookNowData.discount && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {discount}% OFF
                  </span>
                )}
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <img
                  src={`https://server.supermarinerental.com${BookNowData.image}`}
                  alt={BookNowData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>

              <p className="text-gray-300 mb-6">
                {BookNowData.description ||
                  "Experience the thrill of jet skiing with our premium rental service."}
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                  <span className="font-medium">Base Price (30 mins):</span>
                  <span className="font-bold">AED {BookNowData.price}</span>
                </div>

                <div className="p-4 bg-gray-700 rounded-lg">
                  <h3 className="font-medium mb-2">Duration Options</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {durationOptions.map((option) => (
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

                <div className="p-4 bg-gray-700 rounded-lg">
                  <div className="flex items-center justify-between">
                    <label htmlFor="numPeople" className="font-medium">
                      Number of people
                    </label>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => handlePeopleChange(numberOfPeople - 1)}
                        className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center"
                        disabled={numberOfPeople <= 1}
                      >
                        -
                      </button>
                      <input
                        id="numPeople"
                        className="w-16 text-center border border-gray-500 rounded-lg p-2 bg-gray-800"
                        type="number"
                        min="1"
                        max={maxPeople}
                        value={numberOfPeople}
                        onChange={(e) =>
                          handlePeopleChange(parseInt(e.target.value) || 1)
                        }
                      />
                      <button
                        type="button"
                        onClick={() => handlePeopleChange(numberOfPeople + 1)}
                        className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center"
                        disabled={numberOfPeople >= maxPeople}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    Maximum {maxPeople} people allowed
                  </p>
                  {errors.people && (
                    <p className="text-red-400 text-sm mt-1">{errors.people}</p>
                  )}
                </div>

                {/* Live Price Preview */}
                <div className="p-4 bg-blue-900/30 border border-blue-500 rounded-lg">
                  <h3 className="font-medium mb-2 text-blue-300">
                    Current Selection
                  </h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{selectedDuration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>People:</span>
                      <span>{numberOfPeople}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg text-blue-300">
                      <span>Total:</span>
                      <span>AED {pricing.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form Section */}
          <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Booking Details
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Date Picker */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 flex items-center">
                  <Calendar className="mr-2" size={16} />
                  Select Date
                </label>
                <input
                  title="date"
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
                {errors.date && (
                  <p className="text-red-400 text-sm mt-1">{errors.date}</p>
                )}
              </div>

              {/* Time Slot Picker */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Time Slot
                </label>

                <div className="flex space-x-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 p-2 rounded-lg bg-gray-800">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200
          ${
            selectedTime === time
              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
          }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                {errors.time && (
                  <p className="mt-2 text-sm text-red-400">{errors.time}</p>
                )}
              </div>

              {/* Customer Info */}
              <div className="space-y-4 mb-6">
                <h3 className="font-medium">Your Information</h3>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Full Name *
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
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email *
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
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="flex flex-col gap-1">
                      <span className="text-sm font-medium">Phone No.</span>
                      <PhoneInput
                        title="phone"
                        placeholder="Enter phone number"
                        international
                        defaultCountry="AE"
                        value={customerInfo.phone}
                        onChange={handlePhoneChange}
                        className={`phone-input-wrapper ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </label>

                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Special Requests
                  </label>
                  <textarea
                    title="notes"
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
                    <span>Base Price (30 mins):</span>
                    <span>AED {pricing.basePrice}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{selectedDuration}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Cost for {selectedDuration} (per person):</span>
                    <span>AED {pricing.durationCost}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Number of People:</span>
                    <span>{numberOfPeople}</span>
                  </div>

                  <div className="border-t border-gray-600 my-2"></div>

                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>AED {pricing.total}</span>
                  </div>

                  {numberOfPeople > 1 && (
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Cost per person:</span>
                      <span>AED {pricing.pricePerPerson}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition-all disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  "Confirm Booking"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
