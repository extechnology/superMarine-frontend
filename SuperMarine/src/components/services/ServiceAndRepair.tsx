import useService from "../../hooks/useService";
import Loader from "../../common/Loader";
import EnquiryModal from "./EnquiryModal";
import { useState } from "react";

const SampleServiceData = [
  {
    id: 1,
    title: "JetSki ",
    image: "/service-jet-ski.jpg",
    description:
      "Supermarine offers expert JetSki repair and maintenance services for all types of personal watercraft. From engine diagnostics and electrical repairs to hull restoration and seasonal checkups, our team ensures peak performance, safety, and reliability using genuine parts and advanced tools.",
    points: [
      "Engine Diagnostics and Tuning",
      "Electrical System Inspection and Repair",
      "Hull Cleaning, Restoration, and Repair",
      "Cooling System Maintenance",
      "Steering and Control System Adjustment",
      "Oil Change and Fluid Replacement",
      "Battery Testing and Replacement",
      "Impeller and Jet Pump Servicing",
      "Fuel System Cleaning",
      "Pre-season and Post-season Full Inspection",
    ],
  },
  {
    id: 2,
    title: "Quad Bikes & Buggy ",
    image: "/service-quad-buggy.jpg",
    description:
      "Our technicians provide professional repair and maintenance for quad bikes and buggies, including engine overhauls, suspension tuning, electrical diagnostics, and brake system servicing. We tailor each service to ensure off-road readiness and vehicle durability.",
    points: [
      "Engine Diagnostics and Overhaul",
      "Brake Inspection and Replacement",
      "Suspension Tuning and Repair",
      "Oil Change and Fluid Top-Up",
      "Tire Inspection, Repair, and Replacement",
      "Electrical System Testing and Repair",
      "Battery Check and Replacement",
      "Chassis and Frame Inspection",
      "Drive Chain/Belt Adjustment and Lubrication",
      "Air Filter Cleaning and Replacement",
    ],
  },
  {
    id: 3,
    title: "Speed Boats",
    image: "/service-speed-boat.jpg",
    description:
      "We deliver complete speed boat servicing, from diagnostics to bilge pump maintenance. Whether for leisure or commercial use, our team ensures safety, smooth performance, and extended vessel life through reliable, efficient care and preventive maintenance.",
    points: [
      "Engine Diagnostics and Servicing",
      "Oil Change and Lubrication",
      "Propeller Inspection and Repair",
      "Hull Cleaning and Restoration",
      "Electrical System Check and Repair",
      "Battery Testing and Replacement",
      "Fuel System Cleaning and Maintenance",
      "Cooling System Inspection",
      "Steering and Control System Adjustment",
      "Bilge Pump Testing and Servicing",
      "Pre-season and Post-season Full Boat Inspection",
      "Modification & other Comfort services",
    ],
  },
];

const ServiceAndRepair = () => {


  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>("");


  const handleEnquire = (title: string) => {
    setSelectedService(title);
    setIsModalOpen(true);
  };

  const { service, loading, error } = useService();
  console.log("service", service);
  if (loading) return <Loader />;
  if (error)
    return <div className="error-message">⚠️ Error: {error.message}</div>;
  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 proza-libre-bold">
            Our Dedicated{" "}
            <span className="text-amber-400">Service & Repair</span>
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>
        </div>

        <div className="space-y-12">
          {SampleServiceData.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-duration="1300"
              className={`group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-amber-400/20 ${
                data.id % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-90 group-hover:from-amber-500/10 group-hover:to-amber-600/10 transition-all duration-500"></div>

              <div
                className={`relative flex flex-col items-center gap-8 p-8 z-10 ${
                  data.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="w-full md:w-2/5 transform transition-all duration-500 group-hover:scale-105">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full  object-cover rounded-xl shadow-lg border-2 border-gray-700 group-hover:border-amber-400 transition-all duration-500"
                    data-aos="fade-up"
                    data-aos-duration="1400"
                  />
                </div>

                <div className="w-full md:w-3/5 text-white space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold">{data.id}</span>
                    </div>
                    <h2
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300"
                    >
                      {data.title}
                    </h2>
                  </div>

                  <p
                    data-aos="fade-up"
                    data-aos-duration="1600"
                    className="text-gray-300 md:text-md text-sm leading-relaxed"
                  >
                    {data.description}
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2  gap-x-6 gap-y-3 list-none">
                    {data.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <svg
                          className="h-5 w-5 text-amber-400 mt-0.5 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-300 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div data-aos="fade-up" data-aos-duration="1700">
                    <button
                      onClick={() => handleEnquire(data.title)}
                      className="inline-flex items-center text-md mt-4 px-6 py-3 bg-transparent border-2 border-amber-400 text-amber-400 font-semibold rounded-full hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 group"
                    >
                      Enquire Now
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-12">
          {SampleServiceData.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-duration="1300"
              className={`group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-amber-400/20 ${
                data.id % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-90 group-hover:from-amber-500/10 group-hover:to-amber-600/10 transition-all duration-500"></div>

              <div
                className={`relative flex flex-col items-center gap-8 p-8 z-10 ${
                  data.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="w-full md:w-2/5 transform transition-all duration-500 group-hover:scale-105">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full  object-cover rounded-xl shadow-lg border-2 border-gray-700 group-hover:border-amber-400 transition-all duration-500"
                    data-aos="fade-up"
                    data-aos-duration="1400"
                  />
                </div>

                <div className="w-full md:w-3/5 text-white space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold">{data.id}</span>
                    </div>
                    <h2
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300"
                    >
                      {data.title}
                    </h2>
                  </div>

                  <p
                    data-aos="fade-up"
                    data-aos-duration="1600"
                    className="text-gray-300 md:text-md text-sm leading-relaxed"
                  >
                    {data.description}
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2  gap-x-6 gap-y-3 list-none">
                    {data.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <svg
                          className="h-5 w-5 text-amber-400 mt-0.5 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-300 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div data-aos="fade-up" data-aos-duration="1700">
                    <a
                      href={`https://wa.me/919876543210?text=${encodeURIComponent(
                        `Hi, I am interested in the ${data.title} service.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-md mt-4 px-6 py-3 bg-transparent border-2 border-amber-400 text-amber-400 font-semibold rounded-full hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 group"
                    >
                      Enquire Now
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle={selectedService}
      />
    </div>
  );
};

export default ServiceAndRepair;
