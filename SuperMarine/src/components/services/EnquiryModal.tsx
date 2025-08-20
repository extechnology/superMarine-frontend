import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "sonner";
import { useNavigate } from "react-router";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
}

interface ServiceEnquiry {
  name: string;
  message: string;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  serviceTitle,
}) => {
  const [formData, setFormData] = useState<ServiceEnquiry>({
    name: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!formData.name.trim() || !formData.message.trim()) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const response = await axiosInstance.post("service/enquiry/", formData);

      setSuccess("Enquiry submitted successfully!");
      toast.success("Enquiry submitted successfully!");
      navigate("/services")
      setFormData({ name: "", message: "" });
      console.log("Server Response:", response.data);
    } catch (err: any) {
      if (err.response) {
        setError(err.response.data?.error || "Failed to submit enquiry.");
      } else {
        setError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">
          Enquiry for <span className="text-amber-400">{serviceTitle}</span>
        </h2>

        {/* Call Now */}
        <a
          href="tel:+971509590553"
          className="block w-full text-center bg-amber-400 text-black font-semibold py-3 rounded-lg mb-4 hover:bg-amber-500 transition"
        >
          📞 Call Now
        </a>

        {/* Leave a Message */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <textarea
            placeholder="Leave a message..."
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-400 text-black font-semibold py-3 rounded-lg hover:bg-amber-500 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Feedback */}
        {error && <p className="mt-3 text-red-400">{error}</p>}
        {success && <p className="mt-3 text-green-400">{success}</p>}
      </div>
    </div>
  );
};

export default EnquiryModal;
