import { XCircle } from "lucide-react";

export default function PaymentCancel() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-red-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <XCircle className="mx-auto text-red-500 w-20 h-20" />
        <h1 className="text-2xl md:text-3xl font-bold mt-4 text-gray-800">
          Payment Cancelled ❌
        </h1>
        <p className="text-gray-600 mt-2">
          Oops! Your payment was not completed. Please try again.
        </p>
        <button
          onClick={() => (window.location.href = "/checkout")}
          className="mt-6 px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold shadow-md transition-all w-full"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
