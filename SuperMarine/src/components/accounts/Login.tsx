import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";
import type { CredentialResponse } from "@react-oauth/google";
import { loginWithGoogle, loginUser } from "../../apiService/authServices";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await loginUser({ username, password });

      localStorage.setItem("accessToken", response.access);
      localStorage.setItem("refreshToken", response.refresh);
      localStorage.setItem("username", username);
      localStorage.setItem("email", response.email);
      localStorage.setItem("id", response.user_id);

      toast.success("Login successful!");
      navigate("/");
    } catch (error: any) {
      toast.error(error.response?.data?.detail || "Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-30 pb-10 bg-gray-950 px-4 ">
      <div className="w-full max-w-md space-y-6 bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800">
        {/* Logo */}
        <div className="text-center">
          <img src="/logo-icon.png" alt="logo" className="w-28 mx-auto" />
          <p className="text-2xl font-bold text-amber-400 bebas-neue tracking-wide">
            SUPER MARINE
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-white text-center">
          Welcome Back <span className="inline-block">👋</span>
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Username</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Your Username"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Password</label>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-2 cursor-pointer rounded-md text-white font-semibold bg-gradient-to-r from-red-500 to-amber-500 hover:opacity-90 transition duration-200"
          >
            Sign in
          </button>
        </form>

        {/* Divider */}
        <div className="text-center text-gray-500 text-sm">or</div>

        {/* Google Login */}
        <div className="w-full flex justify-center">
          <GoogleLogin
            onSuccess={async (credentialResponse: CredentialResponse) => {
              const token = credentialResponse?.credential;

              if (!token) {
                toast.error("Google credential is missing.");
                return;
              }

              try {
                const response = await loginWithGoogle(token);

                localStorage.setItem("accessToken", response.access);
                localStorage.setItem("refreshToken", response.refresh);
                localStorage.setItem("username", response.username);
                localStorage.setItem("email", response.email);
                localStorage.setItem("id", `${response.user_id}`);

                toast.success("Logged in with Google!");
                navigate("/");
              } catch (err: any) {
                toast.error("Google login failed.");
              }
            }}
          />
        </div>

        {/* Sign Up Prompt */}
        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link to="/register" className="text-amber-400 hover:underline">
            Sign up
          </Link>
        </p>
        <p className="text-center text-sm text-gray-400">Forgot Password?</p>
      </div>
    </div>
  );
};

export default Login;
