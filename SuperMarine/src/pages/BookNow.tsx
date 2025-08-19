import { useState, useEffect } from "react";
import { Calendar, Clock } from "react-feather";
import { useLocation } from "react-router";
import axiosInstance from "../api/axiosInstance";

interface JetSkiService {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  durationOptions: string[];
  discount?: number;
  name?: string;
  maxPeople?: number;
  pricePerPerson?: boolean;
}

interface BookingData {
  serviceId: number;
  date: string;
  time: string;
  duration: string;
  specialRequest: string;
  name: string;
  numberOfPeople: number;
  pricing: {
    basePrice: number;
    subtotal: number;
    discount: number;
    total: number;
    pricePerPerson: number;
  };
}

interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  specialRequest?: string; // make it optional
}

const BookingPage = () => {
  const jetSkiService: JetSkiService = {
    id: 1,
    title: "Premium Jet Ski Rental",
    description:
      "Experience the thrill of riding our high-performance jet skis with safety gear included. Perfect for adventure seekers!",
    image: "/jet-ski.jpg",
    price: 120,
    durationOptions: ["30 mins", "1 hour", "2 hours", "Full day"],
    discount: 15,
    maxPeople: 4,
    pricePerPerson: true, // Set to false if price is flat rate regardless of people
  };

  // State management
  const location = useLocation();
  const BookNowData = location.state || jetSkiService; // Fallback to default service

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedDuration, setSelectedDuration] = useState<string>(
    jetSkiService.durationOptions[1]
  );
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
    specialRequest: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  // Duration multipliers for pricing
  const getDurationMultiplier = (duration: string): number => {
    const multipliers: Record<string, number> = {
      "30 mins": 0.6,
      "1 hour": 1,
      "2 hours": 1.8,
      "Full day": 3.5,
    };
    return multipliers[duration] || 1;
  };

  // Dynamic price calculation
  const calculatePrice = () => {
    const basePrice = jetSkiService.price;
    const durationMultiplier = getDurationMultiplier(selectedDuration);

    // Calculate base cost considering duration
    const baseCost = basePrice * durationMultiplier;

    // Calculate subtotal (multiply by people if pricePerPerson is true)
    const subtotal = jetSkiService.pricePerPerson
      ? baseCost * numberOfPeople
      : baseCost;

    // Calculate discount
    const discountAmount = jetSkiService.discount
      ? subtotal * (jetSkiService.discount / 100)
      : 0;

    // Calculate final total
    const total = subtotal - discountAmount;

    // Price per person for display
    const pricePerPerson = jetSkiService.pricePerPerson
      ? total / numberOfPeople
      : total;

    return {
      basePrice: basePrice.toFixed(2),
      subtotal: subtotal.toFixed(2),
      discount: discountAmount.toFixed(2),
      total: total.toFixed(2),
      pricePerPerson: pricePerPerson.toFixed(2),
    };
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!selectedDate) newErrors.date = "Please select a date";
    if (!selectedTime) newErrors.time = "Please select a time slot";
    if (!customerInfo.name.trim()) newErrors.name = "Name is required";
    if (!customerInfo.email.trim()) newErrors.email = "Email is required";
    if (!customerInfo.phone.trim()) newErrors.phone = "Phone is required";
    if (numberOfPeople < 1) newErrors.people = "At least 1 person is required";
    if (jetSkiService.maxPeople && numberOfPeople > jetSkiService.maxPeople) {
      newErrors.people = `Maximum ${jetSkiService.maxPeople} people allowed`;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (customerInfo.email && !emailRegex.test(customerInfo.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation (basic)
    const phoneRegex = /^[\+]?[1-9][\d]{3,14}$/;
    if (
      customerInfo.phone &&
      !phoneRegex.test(customerInfo.phone.replace(/[\s\-\(\)]/g, ""))
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const convertTo24Hour = (time12h: string): string => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");
    if (hours === "12") {
      hours = "00";
    } else if (modifier === "PM") {
      hours = String(parseInt(hours) + 12);
    }
    return `${hours}:${minutes}`;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      const pricing = calculatePrice();
      const durationLabel = selectedDuration;

      const payload = {
        title: jetSkiService.title,
        email: customerInfo.email,
        date: selectedDate?.toISOString().split("T")[0] || "",
        time: convertTo24Hour(selectedTime), // "HH:MM"
        duration: durationLabel, // e.g., "1 hour"
        number_of_persons: numberOfPeople,
        price_per_hour: jetSkiService.price, // or service_id and do price lookup on backend
        discount: jetSkiService.discount || 0,
      };

      const { data } = await axiosInstance.post(
        "api/payments/create-checkout-session/",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      // simplest redirect:
      window.location.href = data.checkout_url;

      // OR using stripe-js:
      // const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
      // await stripe?.redirectToCheckout({ sessionId: data.id });
    } catch (err) {
      console.error(err);
      alert("Failed to start payment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


  const handlePeopleChange = (value: number) => {
    const newValue = Math.max(
      1,
      Math.min(jetSkiService.maxPeople || 10, value)
    );
    setNumberOfPeople(newValue);

    // Clear people-related errors
    if (errors.people) {
      setErrors((prev) => ({ ...prev, people: "" }));
    }
  };

  useEffect(() => {
    // Recalculate prices when duration or people count changes
    calculatePrice();
  }, [selectedDuration, numberOfPeople]);

  const pricing = calculatePrice();

  return (
    <div className="min-h-screen relative pt-30 bg-[url('/Book_now.jpg')] bg-cover text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
      <div className="max-w-7xl mx-auto relative z-20">
        <h1 className="text-3xl proza-libre-bold font-bold mb-8 text-center text-white">
          Jet Ski Rental Booking
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Details Section */}
          <div className="bg-transparent">
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-white">
                  {BookNowData.title}
                </h2>
                {jetSkiService.discount && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {jetSkiService.discount}% OFF
                  </span>
                )}
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                <img
                  src={BookNowData.image}
                  alt={BookNowData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>

              <p className="text-gray-300 mb-6">{jetSkiService.description}</p>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                  <span className="font-medium">Base Price (per hour):</span>
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
                        max={jetSkiService.maxPeople || 10}
                        value={numberOfPeople}
                        onChange={(e) =>
                          handlePeopleChange(parseInt(e.target.value) || 1)
                        }
                      />
                      <button
                        type="button"
                        onClick={() => handlePeopleChange(numberOfPeople + 1)}
                        className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center"
                        disabled={
                          jetSkiService.maxPeople
                            ? numberOfPeople >= jetSkiService.maxPeople
                            : false
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {jetSkiService.maxPeople && (
                    <p className="text-sm text-gray-400 mt-1">
                      Maximum {jetSkiService.maxPeople} people allowed
                    </p>
                  )}
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
                      <span>${pricing.total}</span>
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

              {/* Time Picker */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 flex items-center">
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
                {errors.time && (
                  <p className="text-red-400 text-sm mt-1">{errors.time}</p>
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
                    <label className="block text-sm font-medium mb-1">
                      Phone *
                    </label>
                    <input
                      title="phone"
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
                    <span>Duration:</span>
                    <span>{selectedDuration}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>People:</span>
                    <span>{numberOfPeople}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${pricing.subtotal}</span>
                  </div>

                  {jetSkiService.discount && (
                    <div className="flex justify-between text-green-400">
                      <span>Discount ({jetSkiService.discount}%):</span>
                      <span>-${pricing.discount}</span>
                    </div>
                  )}

                  <div className="border-t border-gray-600 my-2"></div>

                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>${pricing.total}</span>
                  </div>

                  {jetSkiService.pricePerPerson && numberOfPeople > 1 && (
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Per person:</span>
                      <span>${pricing.pricePerPerson}</span>
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
