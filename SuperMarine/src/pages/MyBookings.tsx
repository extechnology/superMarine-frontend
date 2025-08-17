import { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  DollarSign,
  Ship,
  Loader2,
  MapPin,
  Star,
  ChevronRight,
  Filter,
} from "lucide-react";

interface Booking {
  id: number;
  jet_ski: string;
  date: string;
  time: string;
  duration: string;
  price: number;
  status: "confirmed" | "pending" | "cancelled";
  location?: string;
  rating?: number;
  image?: string;
}

// Enhanced mock data
const mockBookings: Booking[] = [
  {
    id: 1,
    jet_ski: "Sea-Doo Spark Trixx",
    date: "2025-08-20",
    time: "10:00 AM",
    duration: "2 hours",
    price: 150,
    status: "confirmed",
    location: "Marina Bay",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=200&fit=crop",
  },
  {
    id: 2,
    jet_ski: "Yamaha WaveRunner VX",
    date: "2025-08-25",
    time: "2:00 PM",
    duration: "1 hour",
    price: 80,
    status: "pending",
    location: "Ocean View Beach",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=200&fit=crop",
  },
  {
    id: 3,
    jet_ski: "Kawasaki Jet Ski Ultra LX",
    date: "2025-08-18",
    time: "9:00 AM",
    duration: "3 hours",
    price: 220,
    status: "cancelled",
    location: "Paradise Cove",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=400&h=200&fit=crop",
  },
  {
    id: 4,
    jet_ski: "Sea-Doo GTI SE 170",
    date: "2025-08-30",
    time: "4:00 PM",
    duration: "1.5 hours",
    price: 120,
    status: "confirmed",
    location: "Crystal Waters",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=200&fit=crop",
  },
];

export default function MyBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<
    "all" | "confirmed" | "pending" | "cancelled"
  >("all");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setBookings(mockBookings);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const filteredBookings = bookings.filter(
    (booking) => filter === "all" || booking.status === filter
  );

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "confirmed":
        return {
          bg: "bg-emerald-500/20",
          text: "text-emerald-400",
          border: "border-emerald-500/30",
          glow: "shadow-emerald-500/20",
        };
      case "pending":
        return {
          bg: "bg-amber-500/20",
          text: "text-amber-400",
          border: "border-amber-500/30",
          glow: "shadow-amber-500/20",
        };
      case "cancelled":
        return {
          bg: "bg-red-500/20",
          text: "text-red-400",
          border: "border-red-500/30",
          glow: "shadow-red-500/20",
        };
      default:
        return {
          bg: "bg-gray-500/20",
          text: "text-gray-400",
          border: "border-gray-500/30",
          glow: "shadow-gray-500/20",
        };
    }
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border-b border-slate-700/50">
        <div className="absolute inset-0 bg-slate-900/20"></div>
        <div className="relative px-4 py-12 md:py-16">
          <div className="text-center max-w-4xl mx-auto">
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
      </div>

      <div className="px-4 py-8 max-w-7xl mx-auto">
        {/* Filter Bar */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {["all", "confirmed", "pending", "cancelled"].map((status) => (
            <button
              key={status}
              onClick={() =>
                setFilter(
                  status as "all" | "confirmed" | "pending" | "cancelled"
                )
              }
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 border ${
                filter === status
                  ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30 shadow-lg shadow-cyan-500/20"
                  : "bg-slate-800/50 text-slate-400 border-slate-700/50 hover:bg-slate-700/50 hover:text-slate-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </div>
            </button>
          ))}
        </div>

        {/* Bookings Grid */}
        {filteredBookings.length === 0 ? (
          <div className="text-center py-16">
            <div className="mb-6">
              <Ship className="w-24 h-24 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-300 mb-2">
                No adventures found
              </h3>
              <p className="text-slate-500">
                Try adjusting your filter or book a new jet ski experience!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredBookings.map((booking, index) => {
              const statusConfig = getStatusConfig(booking.status);
              return (
                <div
                  key={booking.id}
                  className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:transform hover:scale-[1.02] backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Status Glow Effect */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${statusConfig.glow} shadow-2xl`}
                  ></div>

                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                    <img
                      src={booking.image}
                      alt={booking.jet_ski}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=200&fit=crop";
                      }}
                    />
                    <div
                      className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}
                    >
                      {booking.status.toUpperCase()}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-10">
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {booking.jet_ski}
                      </h2>

                      {booking.location && (
                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                          <MapPin className="w-4 h-4" />
                          {booking.location}
                        </div>
                      )}

                      {booking.rating && (
                        <div className="flex items-center gap-2 mb-3">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-amber-400 font-medium">
                            {booking.rating}
                          </span>
                          <span className="text-slate-500">rating</span>
                        </div>
                      )}
                    </div>

                    {/* Details Grid */}
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
                          <DollarSign className="w-5 h-5 text-cyan-400" />
                          <span className="text-white font-bold text-lg">
                            ${booking.price}
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
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
