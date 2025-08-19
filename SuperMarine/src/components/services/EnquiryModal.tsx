import { useState } from "react";
import type { FormEvent } from "react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  serviceTitle,
}) => {
  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Message submitted:", { username, message, serviceTitle });
    // TODO: integrate with backend or WhatsApp/email
    onClose();
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
          href="tel:+971500000000" // replace with UAE number
          className="block w-full text-center bg-amber-400 text-black font-semibold py-3 rounded-lg mb-4 hover:bg-amber-500 transition"
        >
          📞 Call Now
        </a>

        {/* Leave a Message */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <textarea
            placeholder="Leave a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-amber-400 text-black font-semibold py-3 rounded-lg hover:bg-amber-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
