import { useState } from "react";
import type { BookingFormData } from "@/types";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "sonner";

const HeroForm = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    email: "",
    title: "",
    date: "",
    time: "",
    duration: "",
    number_of_persons: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "number_of_persons" ? Number(value) : value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🔍 Basic Validation
    const {
      name,
      phone,
      email,
      title,
      date,
      time,
      duration,
      number_of_persons,
    } = formData;

    if (
      !name.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !title.trim() ||
      !date ||
      !time ||
      !duration.trim() ||
      number_of_persons <= 0
    ) {
      alert("Please fill in all required fields correctly.");

      return;
    }

    // Optional: Regex for basic email/phone validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // 🚀 Submit to backend if validation passes
    try {
      const response = await axiosInstance.post("enquiry-booking/", formData);
      console.log("Booking successful:", response.data);
      toast.success("Booking submitted successfully!");

      // Optionally reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        title: "",
        date: "",
        time: "",
        duration: "",
        number_of_persons: 1,
      });
    } catch (error) {
      console.error("Booking failed:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };


  return (
    <div className="bg-black">
      <div className="relative -top-32 z-30 px-4 md:px-0">
        <div className="max-w-6xl mx-auto md:flex bg-transparent justify-center overflow-hidden">
          {/* Left Form - Vertical */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-10 rounded-xl bg-black/10 text-white backdrop-blur-xl md:w-1/2 shadow-lg"
          >
            <h1 className="text-xl md:text-2xl font-semibold  mb-4">
              Adventure Vehicle Booking
            </h1>

            <label
              className="flex flex-col gap-1"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <span className="text-sm font-medium ">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                <span className="text-sm font-medium ">
                  Phone No.
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>

              <label
                className="flex flex-col gap-1"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <span className="text-sm font-medium ">
                  Email ID
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
              <span className="text-sm font-medium ">
                Adventure Vehicle
              </span>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
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
                <span className="text-sm font-medium ">
                  Ride Date
                </span>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>

              <label
                className="flex flex-col gap-1"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <span className="text-sm font-medium ">
                  Report Time
                </span>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>

              <label
                className="flex flex-col gap-1"
                data-aos="fade-up"
                data-aos-duration="1300"
              >
                <span className="text-sm font-medium ">
                  Duration
                </span>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
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
                <span className="text-sm font-medium ">
                  No. of Persons
                </span>
                <input
                  type="number"
                  name="number_of_persons"
                  value={formData.number_of_persons}
                  onChange={handleChange}
                  placeholder="Enter number of persons"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </label>

              <button
                type="submit"
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
          <div className="flex flex-col md:rounded-r-xl rounded-b-xl md:rounded-l-none shadow-lg justify-between p-10 bg-amber-100 md:w-1/2 h-[85%] my-auto">
            <div className="md:py-10">
              <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
                Ride Steps
              </h1>
              <div className="flex space-y-6 md:space-y-0 justify-between gap-6">
                <div className="flex flex-col items-center text-center">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="w-16 h-16 bg-red-600 rounded-full mb-3 flex items-center justify-center text-white text-xl md:text-2xl font-bold"
                  >
                    1
                  </div>
                  <h3
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="font-semibold text-xs md:text-sm"
                  >
                    Search Adventure Vehicle
                  </h3>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="w-16 h-16 bg-red-600 rounded-full mb-3 flex items-center justify-center text-white text-xl md:text-2xl font-bold"
                  >
                    2
                  </div>
                  <h3
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="font-semibold text-xs md:text-sm"
                  >
                    Confirm the Ride
                  </h3>
                  <p className=" text-gray-600 text-xs mt-1"></p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="w-16 h-16 bg-red-600 rounded-full mb-3 flex items-center justify-center text-white text-xl md:text-2xl font-bold"
                  >
                    3
                  </div>
                  <h3
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="font-semibold text-xs md:text-sm"
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
