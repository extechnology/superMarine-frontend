import axiosInstance from "./axiosInstance";

const getAboutHero = async () => {
    try {
        const res = await axiosInstance.get(`about-us-slider/`);
        return res.data;
    } catch (err) {
        console.error("Failed to fetch course page", err);
    }
}

export default getAboutHero