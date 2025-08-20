import axiosInstance from "./axiosInstance";

const getNumbers = async () => {
    try {
        const res = await axiosInstance.get('numbers/');
        return res.data;
    }
    catch (err) {
        console.error("Failed to fetch course page", err);

    }
}

export default getNumbers