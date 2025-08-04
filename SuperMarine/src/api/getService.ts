import axiosInstance from "./axiosInstance";

const getService = async () => {
    try {
        const res = await axiosInstance.get('services/')
        return res.data
    } catch (err) {
        console.error("Failed to fetch course page", err);
    }
}

export default getService