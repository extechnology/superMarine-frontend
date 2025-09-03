import axios from "axios";
import toast from "react-hot-toast";
import { useModalStore } from "../zustand/modalStore";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8001/",
  // "http://127.0.0.1:8001/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("id");
      localStorage.removeItem("username");
      localStorage.removeItem("email");

      toast.error(
        err.response.data?.detail || "Session expired. Please login again."
      );

      // Trigger login modal
      const { openLogin } = useModalStore.getState();
      openLogin();
    }

    return Promise.reject(err);
  }
);



export default axiosInstance;
