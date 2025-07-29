import React, { useState } from "react";

const VerifyOtp: React.FC = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger OTP verify logic
    console.log("Verifying OTP:", otp);
  };

  return (
    <div className="min-h-screen bg-[url('/jetski-bg.jpg')] bg-cover bg-center flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 max-w-md w-full bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Verify OTP
        </h2>

        <p className="text-center text-sm text-gray-700 mb-4">
          Please enter the 6-digit OTP sent to your email or phone.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-2 text-center tracking-widest text-2xl border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Verify OTP
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Didn’t get the code?{" "}
          <button className="text-blue-600 hover:underline">Resend</button>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;
