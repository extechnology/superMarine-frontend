import axiosInstance from "./axiosInstance";

const getBookAdventure = async () => {
    try{
        const res = await axiosInstance.get(`api/book/adventure/`);
        return res.data;
    }
    catch(err){
        console.error("Failed to fetch course page", err);  
    }
}

export default getBookAdventure