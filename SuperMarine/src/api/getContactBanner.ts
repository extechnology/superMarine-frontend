import axiosInstance from "./axiosInstance";


const getContactBanner = async () => {
    try {
        const res = await axiosInstance.get('api/contact/banner/');
        return res.data;
    } catch (err){
        console.log("Failed to fetch course page", err);
    }
}

export default getContactBanner