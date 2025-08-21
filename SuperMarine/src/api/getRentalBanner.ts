import axiosInstance from "./axiosInstance";

const getRentalBanner = async () => {
    try {
        const res = await axiosInstance.get('api/rental/banner/');
        return res.data;
    } catch (err){
        console.log("Failed to fetch course page", err);
    }
}

export default getRentalBanner