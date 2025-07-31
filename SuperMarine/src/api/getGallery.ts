import axiosInstance from "./axiosInstance";

const getGallery = async () => {
  try {
    const res = await axiosInstance.get(`project-gallery/`);
    return res.data;
  } catch (err) {
    console.error("Failed to fetch course page", err);
  }
};
export default getGallery