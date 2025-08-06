import axiosInstance from "./axiosInstance";

const getVehicle = async () => {
    try{
        const res = await axiosInstance.get(`vehicle/`);
        return res.data;
    } catch(err) {
        console.error("Failed to fetch course page", err);
    }
}

export default getVehicle