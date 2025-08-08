import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { toast } from "sonner";
import {
  loginWithGoogle,
  loginUser,
  registerUser,
} from "../../apiService/authServices";
import { useNavigate } from "react-router-dom";
import { useModalStore } from "../../zustand/modalStore";

export default function AuthModal() {
  const { isLoginOpen, closeLogin } = useModalStore();
  const [tab, setTab] = useState<"login" | "register">("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  console.log(error);
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
      closeLogin();
      navigate("/");
    } catch (error: any) {
      toast.error(error.response?.data?.detail || "Invalid email or password.");
    }
  };

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
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await registerUser(formData);
      console.log(res);
      navigate("/verify-otp", {
        state: {
          email: formData.email,
          username: formData.username,
          password: formData.password,
        },
      });
      closeLogin();
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

  if (!isLoginOpen) return null;

  return (
    <Dialog open={isLoginOpen} onClose={closeLogin} className="relative z-50">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-xl border border-white/20 backdrop-blur-md shadow-xl p-6 text-white">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-amber-400">
              {tab === "login" ? "Login to Super Marine" : "Create Account"}
            </h2>
            <button
              title="Close"
              onClick={closeLogin}
              className="text-white hover:text-amber-400"
            >
              <X />
            </button>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              onClick={() => setTab("login")}
              className={`px-4 py-1 rounded-full text-sm font-semibold ${
                tab === "login"
                  ? "bg-amber-400 text-black"
                  : "text-white hover:text-amber-400"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setTab("register")}
              className={`px-4 py-1 rounded-full text-sm font-semibold ${
                tab === "register"
                  ? "bg-amber-400 text-black"
                  : "text-white hover:text-amber-400"
              }`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          {tab === "login" ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60"
              />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60"
              />
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-red-500 to-red-500 text-white rounded-md font-semibold"
              >
                Sign In
              </button>
              <p className="text-sm text-white/70 hover:text-blue-600">
                forgot password?
              </p>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-4">
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60"
              />
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60"
              />
              <input
                name="password_confirm"
                type="password"
                value={formData.password_confirm}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60"
              />
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-md font-semibold"
              >
                Sign Up
              </button>
            </form>
          )}

          {/* Google */}
          <div className="mt-6 text-center text-sm text-white/70">or</div>
          <div className="flex justify-center mt-2">
            <GoogleLogin
              onSuccess={async (credentialResponse: CredentialResponse) => {
                const token = credentialResponse?.credential;
                if (!token) return toast.error("Google credential missing.");

                try {
                  const response = await loginWithGoogle(token);
                  localStorage.setItem("accessToken", response.access);
                  localStorage.setItem("refreshToken", response.refresh);
                  localStorage.setItem("username", response.username);
                  localStorage.setItem("email", response.email);
                  localStorage.setItem("id", `${response.user_id}`);
                  toast.success("Logged in with Google!");
                  closeLogin();
                  navigate("/");
                } catch (err) {
                  toast.error("Google login failed.");
                }
              }}
              onError={() => toast.error("Google Login Failed")}
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
