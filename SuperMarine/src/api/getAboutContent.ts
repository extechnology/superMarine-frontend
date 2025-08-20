import axiosInstance from "./axiosInstance";

const getAboutContent = async () => {
    try {
        const res = await axiosInstance.get(`about/content/`); 
        return res.data;
    } catch (err) {
        console.error("Failed to fetch course page", err);
    }
};

export default getAboutContent