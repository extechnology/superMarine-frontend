import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GoogleLogin } from "@react-oauth/google";
import type { CredentialResponse } from "@react-oauth/google";
import { loginWithGoogle, registerUser } from "../../apiService/authServices";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  console.log(error);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await registerUser(formData);
      console.log("response:", res);
      navigate("/verify-otp", {
        state: {
          email: formData.email,
          username: formData.username,
          password: formData.password,
        },
      });
    } catch (err: any) {
      const data = err.response?.data;

      if (typeof data === "string") {
        setError(data);
        toast.error(data);
      } else if (data?.email) {
        setError(data.email);
        toast.error(data.email);
      } else if (data?.username) {
        setError(data.username);
        toast.error(data.username);
      } else if (data?.non_field_errors) {
        setError(data.non_field_errors[0]);
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 pt-28 pb-10 px-4">
      <div className="w-full max-w-md space-y-6 bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800">
        {/* Logo */}
        <div className="text-center">
          <img
            src="/logo-icon.png"
            alt="super-marine-logo"
            className="w-28 mx-auto"
          />
          <p className="text-2xl font-bold text-amber-400 bebas-neue tracking-wide">
            SUPER MARINE
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-white text-center">
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Name</label>
            <input
              type="text"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              required
              minLength={8}
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 8 characters"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Confirm Your Password
            </label>
            <input
              type="password"
              name="password_confirm"
              required
              minLength={8}
              value={formData.password_confirm}
              onChange={handleChange}
              placeholder="At least 8 characters"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-md text-white font-semibold bg-gradient-to-r from-red-500 to-amber-500 hover:opacity-90 transition duration-200"
          >
            Sign up
          </button>
        </form>

        {/* Divider */}
        <div className="text-center text-gray-500 text-sm">or</div>

        {/* Google Sign Up */}
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
                console.error(err);
              }
            }}
          />
        </div>

        {/* Login Prompt */}
        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-amber-400 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
