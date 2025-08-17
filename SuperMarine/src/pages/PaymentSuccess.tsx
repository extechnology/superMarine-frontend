import { CheckCircle } from "lucide-react";

export default function PaymentSuccess() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <CheckCircle className="mx-auto text-green-500 w-20 h-20" />
        <h1 className="text-2xl md:text-3xl font-bold mt-4 text-gray-800">
          Payment Successful 🎉
        </h1>
        <p className="text-gray-600 mt-2">
          Thank you! Your payment has been processed successfully.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow-md transition-all w-full"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}
