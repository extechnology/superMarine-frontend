import axiosInstance from "../api/axiosInstance";

const getGalleryBanner = async () => {
    try {
        const res = await axiosInstance.get('api/gallery/banner/');
        return res.data;
    } catch (err){
        console.log("Failed to fetch course page", err);
    }
}

export default getGalleryBanner