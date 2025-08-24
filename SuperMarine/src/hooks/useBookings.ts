import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import type { Booking } from "../types";



export const useBookings = (accessToken: string | null) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!accessToken) {
      setLoading(false);
      setError("Not authenticated");
      return;
    }

    const fetchBookings = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/bookings/", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setBookings(response.data);
      } catch (err: any) {
        console.error(err);
        setError(err.response?.data?.detail || "Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [accessToken]);

  return { bookings, loading, error };
};
