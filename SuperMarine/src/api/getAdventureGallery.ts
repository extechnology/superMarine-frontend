import axiosInstance from "./axiosInstance";

const getAdventureGallery = async () => {
  try {
    const res = await axiosInstance.get(`adventure/gallery/`);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch course page", err);
  }
};

export default getAdventureGallery;
