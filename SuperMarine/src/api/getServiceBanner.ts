import axiosInstance from "./axiosInstance";

const getServiceBanner = async () => {
    try {
        const res = await axiosInstance.get('api/service/banner/');
        return res.data;
    } catch(err) {
        console.log("Failed to fetch course page", err);
    }
}

export default getServiceBanner