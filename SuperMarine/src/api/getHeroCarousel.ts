import axiosInstance from "./axiosInstance";

const getHeroCarousel = async () => {
    try{
        const res = await axiosInstance.get(`home-page-slider/`);
        return res.data;
    }
    catch(err){
        console.error("Failed to fetch course page", err);
    }
}

export default getHeroCarousel