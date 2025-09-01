import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  Calendar,
  Clock,
  Ship,
  Loader2,
  ChevronRight,
} from "lucide-react";
import axiosInstance from "../api/axiosInstance";
import { useModalStore } from "../zustand/modalStore";


// Define booking type
interface Booking {
  id: number;
  title: string;
  price: string;
  duration: string;
  time: string;
  date: string;
  name: string;
  email: string;
  phone: string;
  special_request?: string;
  discount?: string;
  number_of_persons?: number;
  created_at: string;
}

export default function MyBookings() {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {openLogin} = useModalStore();

  useEffect(() => {
    if (!accessToken) {
      openLogin("login");
      return;
    }

    const fetchBookings = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get("/api/bookings/", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setBookings(res.data);
      } catch (err: any) {
        console.error(err);
        setError(err.response?.data?.detail || "Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [accessToken, navigate]);

  if (!accessToken) return null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <Loader2 className="animate-spin w-16 h-16 text-cyan-400 mx-auto mb-4" />
            <div className="absolute inset-0 w-16 h-16 border-2 border-cyan-400/20 rounded-full animate-ping mx-auto"></div>
          </div>
          <p className="text-slate-300 text-lg font-medium">
            Loading your adventures...
          </p>
        </div>
      </div>
    );
  }

  if (error || bookings.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-center px-4">
        <div>
          <Ship className="w-24 h-24 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-300 mb-2">
            {error ? "Error loading adventures" : "No adventures found"}
          </h3>
          <p className="text-slate-500">
            {error
              ? "Something went wrong. Please try again later."
              : "Book a jet ski experience to get started!"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-b py-20 from-black/20 to-black/80 backdrop-blur-sm border-b border-slate-700/50 mb-8">
        <div className="absolute inset-0 bg-slate-900/20"></div>
        <div className="relative text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-cyan-500/20 rounded-2xl border border-cyan-400/20">
              <Ship className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              My Adventures
            </h1>
          </div>
          <p className="text-slate-400 text-lg md:text-xl">
            Track your jet ski experiences and upcoming rides
          </p>
        </div>
      </div>
      <div className=" max-w-7xl mx-auto">
        {/* Bookings Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {bookings.map((booking, index) => (
            <div
              key={booking.id}
              className="group relative bg-gradient-to-br from-slate-800/80 to-black rounded-3xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 relative z-10">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {booking.title}
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700/30">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <span className="text-slate-300 font-medium">
                        {booking.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-xl border border-slate-700/30">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-cyan-400" />
                      <span className="text-slate-300">{booking.time}</span>
                    </div>
                    <span className="text-slate-400 text-sm">
                      {booking.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                    <div className="flex items-center gap-3">
                      AED
                      <span className="text-white font-bold text-lg">
                        {booking.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
