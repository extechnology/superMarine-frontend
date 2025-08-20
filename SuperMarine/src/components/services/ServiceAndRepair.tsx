import { useState } from "react";
import useService from "../../hooks/useService";
import Loader from "../../common/Loader";
import EnquiryModal from "./EnquiryModal";
import type { Service } from "@/types";

const ServiceAndRepair = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const handleEnquire = (title: string) => {
    setSelectedService(title);
    setIsModalOpen(true);
  };

  // ✅ ensure hook returns `Service[]`
  const { service, loading, error } = useService();
  console.log(service);

  if (loading) return <Loader />;
  if (error)
    return <div className="error-message">⚠️ Error: {error.message}</div>;

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 proza-libre-bold">
            Our Dedicated{" "}
            <span className="text-amber-400">
              Service&nbsp;&amp;&nbsp;Repair
            </span>
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4"></div>
        </div>

        {/* Service Cards */}
        <div className="space-y-12">
          {service && Array.isArray(service)
            ? service.map((data: Service) => {
                // ✅ Safely split points into array
                const pointsArray: string[] =
                  typeof data.points === "string"
                    ? (data.points as string)
                        .split("#")
                        .map((p: string) => p.replace(/\r?\n/g, "").trim())
                        .filter(Boolean)
                    : [];
                return (
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
                        data.id % 2 === 0
                          ? "md:flex-row-reverse"
                          : "md:flex-row"
                      }`}
                    >
                      {/* Image */}
                      <div className="w-full md:w-2/5 transform transition-all duration-500 group-hover:scale-105">
                        <img
                          src={`https://server.supermarinerental.com${data.image}`}
                          alt={data.title}
                          className="w-full object-cover rounded-xl shadow-lg border-2 border-gray-700 group-hover:border-amber-400 transition-all duration-500"
                          data-aos="fade-up"
                          data-aos-duration="1400"
                        />
                      </div>

                      {/* Content */}
                      <div className="w-full md:w-3/5 text-white space-y-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                            <span className="text-black font-bold">
                              {data.id}
                            </span>
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

                        {/* Points */}
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 list-none">
                          {pointsArray.map((point: string, index: number) => (
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
                              <span className="text-gray-300 text-sm">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Button */}
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
                );
              })
            : null}
        </div>
      </div>

      {/* Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle={selectedService}
      />
    </div>
  );
};

export default ServiceAndRepair;
