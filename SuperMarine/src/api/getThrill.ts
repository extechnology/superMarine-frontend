import axiosInstance from "./axiosInstance";

const getThrill = async () => {
    try {
        const res = await axiosInstance.get(`api/thrill/meet/`);
        return res.data;
    } catch (err) {
        console.error("Failed to fetch course page", err);
    }
};

export default getThrill