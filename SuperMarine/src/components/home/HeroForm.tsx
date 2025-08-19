import { useState } from "react";
import type { BookingFormData } from "@/types";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "sonner";
import { BsClockFill } from "react-icons/bs";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useNavigate } from "react-router";
import DatePicker from "react-datepicker";




const HeroForm = () => {

  const navigate = useNavigate();
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

    // 🔍 Basic required field check
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

    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // ✅ Phone validation using react-phone-number-input
    if (!isValidPhoneNumber(phone)) {
      alert("Please enter a valid phone number with country code.");
      return;
    }

    // 🚀 Submit to backend
    try {
      const response = await axiosInstance.post("enquiry-booking/", formData);
      console.log("Booking successful:", response.data);
      toast.success("Booking submitted successfully!");
      navigate("/rental_service");

      // Reset form
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
            className="flex flex-col gap-4 md:p-10 p-5 rounded-xl bg-black/10 text-white backdrop-blur-xl md:w-1/2 shadow-lg"
          >
            <h1 className="text-xl md:text-2xl font-semibold  mb-4">
              Adventure Vehicle Booking
            </h1>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-3 border border-gray-300 rounded-md bg-black text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

            <div className="md:flex justify-between">
              <label
                className="flex flex-col gap-1"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <span className="text-sm font-medium">Phone No.</span>
                <PhoneInput
                  international
                  defaultCountry="AE"
                  value={formData.phone}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, phone: value || "" }))
                  }
                  className="phone-input-custom"
                />
              </label>

              <label
                className="flex flex-col gap-1"
                data-aos="fade-up"
                data-aos-duration="900"
              >
                <span className="text-sm font-medium ">Email ID</span>
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
              <span className="text-sm font-medium">Adventure Vehicle</span>
              <select
                name="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                className="p-3 border border-gray-300 bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">--Select vehicle--</option>
                <option value="jet_ski">Jet Ski</option>
                <option value="standing_jet_ski">Standing Jet Ski</option>
                <option value="speed_boat">Speed Boat</option>
                <option value="quad_bikes">Quad Bikes</option>
                <option value="buggy">Buggy</option>
                <option value="marine_cars">Marine Cars</option>
                <option value="yacht">Yacht</option>
              </select>
            </label>

            <div className="grid md:grid-cols-3 gap-4">
              <label
                className="flex flex-col gap-1 relative"
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                <span className="text-sm font-medium">Ride Date</span>
                <DatePicker
                  selected={formData.date ? new Date(formData.date) : null}
                  onChange={(date: Date | null) =>
                    setFormData((prev) => ({
                      ...prev,
                      date: date ? date.toISOString().split("T")[0] : "",
                    }))
                  }
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                  minDate={new Date()} 
                  className="p-3 w-full rounded-md border border-gray-600 bg-black text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  calendarClassName="dark-calendar" 
                />
              </label>

              <label
                className="flex flex-col gap-1 relative"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <span className="text-sm font-medium">Report Time</span>
                <DatePicker
                
                  selected={
                    formData.time
                      ? new Date(
                          `${
                            formData.date ||
                            new Date().toISOString().split("T")[0]
                          }T${formData.time}`
                        )
                      : null
                  }
                  onChange={(date: Date | null) =>
                    setFormData((prev) => ({
                      ...prev,
                      time: date
                        ? date.toTimeString().split(":").slice(0, 2).join(":") 
                        : "",
                    }))
                  }
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeCaption="Time"
                  dateFormat="HH:mm"
                  minTime={
                    formData.date === new Date().toISOString().split("T")[0]
                      ? new Date() 
                      : new Date(0, 0, 0, 0, 0) 
                  }
                  maxTime={new Date(0, 0, 0, 23, 59)} 
                  placeholderText="Select time"
                  className="p-3 w-full rounded-md border border-gray-600 bg-black text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  calendarClassName="dark-calendar"
                  
                />
                <BsClockFill className="absolute right-3 top-10 transform text-gray-300 w-4 h-4 pointer-events-none" />
              </label>

              <label
                className="flex flex-col  gap-1 relative"
                data-aos="fade-up"
                data-aos-duration="1300"
              >
                <span className="text-sm font-medium">Duration</span>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="p-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <BsClockFill className=" content-center absolute right-3 top-1/2 mt-1 transform  text-white w-4 h-4 pointer-events-none" />
              </label>
            </div>
            <div className="md:flex items-end justify-between gap-4">
              <label
                className="flex flex-col flex-1 gap-1"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <span className="text-sm font-medium ">No. of Persons</span>
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
