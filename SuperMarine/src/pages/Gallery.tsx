import Loader from "../common/Loader";
import useGallery from "../hooks/useGallery";
import { useState } from "react";
import type { gallery } from "../types";
import useGalleryBanner from "../hooks/useGalleryBanner";


const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { gallery, loading, error } = useGallery();
  const { galleryBanner } = useGalleryBanner();
  const image = galleryBanner?.[0]?.image;

  console.log(gallery);
  const handleViewImage = (index: number) => {
    setActiveIndex(index);
  };

  const closeModal = () => {
    setActiveIndex(null);
  };

 const goToPrev = () => {
   if (!gallery || !Array.isArray(gallery) || gallery.length === 0) return;

   setActiveIndex((prev) =>
     prev !== null ? (prev - 1 + gallery.length) % gallery.length : null
   );
 };

  const goToNext = () => {
    if (!gallery || !Array.isArray(gallery) || gallery.length === 0) return;

    setActiveIndex((prev) =>
      prev !== null ? (prev + 1) % gallery.length : null
    );
  };
  if (loading) return <Loader />;
  if (error) return <h1>{error.message}</h1>;
  if (!Array.isArray(gallery)) return null; 

  return (
    <div>
      {/* Hero Section */}
      <div className="relative group">
        {/* Overlay with subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black z-10 transition-all duration-700 group-hover:opacity-90"></div>

        {/* Background Image with parallax effect */}
        <div className="w-full h-96 overflow-hidden">
          <img
            src={image}
            alt="Gallery hero"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>

        {/* Centered Text with animation */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h1 className="text-white proza-libre-bold text-2xl md:text-5xl font-bold transform transition-all duration-500 group-hover:scale-110">
            Gallery
          </h1>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-black py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {gallery &&
              gallery.map((item: gallery, index: number) => {
                const imageUrl = item.image?.startsWith("http")
                  ? item.image
                  : `${import.meta.env.VITE_API_BASE_URL}${item.image}`;
                return (
                  <div
                    key={index}
                    className="relative break-inside-avoid group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 mb-4"
                  >
                    {/* Image with zoom and parallax effect */}
                    <div className="overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={item.title || "no image"}
                        className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-110"
                      />
                    </div>

                    {/* Animated Title Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <h2 className="proza-libre-bold text-white text-xl md:text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {item.title}
                      </h2>
                      <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                        {item.description || "View more details"}
                      </p>
                      <button
                        onClick={() => handleViewImage(index)}
                        className="mt-3 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all delay-150 duration-500 hover:bg-white/20 border border-white/20"
                      >
                        View Image
                      </button>
                    </div>

                    {/* Corner Decoration (optional) */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-70 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Navigation */}
            <button
              onClick={goToPrev}
              className="absolute left-4 text-white text-3xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/70 transition z-10"
            >
              ‹
            </button>

            <div>
              {(() => {
                const activeImage = gallery[activeIndex];
                const fullImageUrl = activeImage.image?.startsWith("http")
                  ? activeImage.image
                  : `${import.meta.env.VITE_API_BASE_URL}${activeImage.image}`;

                return (
                  <img
                    src={fullImageUrl}
                    alt={activeImage.title || "Gallery Full View"}
                    className="max-h-[90vh] max-w-full rounded-lg shadow-lg border shadow-black/50"
                  />
                );
              })()}
            </div>

            {/* Right Navigation */}
            <button
              onClick={goToNext}
              className="absolute right-4 text-white text-3xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/70 transition z-10"
            >
              ›
            </button>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-xl bg-black/40 px-3 py-1 rounded-full hover:bg-black/70 transition"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Gallery;
