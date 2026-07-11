import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import API from "../api/axios";
import logo from "../assets/logo.png";
import navBg from "../assets/navBg.png";
import AuthLayout from "../layouts/AuthLayout";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await API.post("/auth/forgot-password", data);

      alert(res.data.message);

      localStorage.setItem("email", data.email);

      navigate("/verify-forgot-otp");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>

          <h1 className="text-center text-3xl font-bold text-white mt-5">
            Forgot Password
          </h1>

          <p className="text-center text-gray-300 mt-2">
            Enter your registered email to receive an OTP.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-5"
          >

            <div>

              <label className="text-gray-300">
                Email Address
              </label>

              <div className="mt-2 flex items-center rounded-xl border border-white/10 bg-white/10 px-4">

                <Mail className="text-purple-300" />

                <input
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="email"
                  className="w-full bg-transparent py-4 px-3 text-white outline-none"

                  {...register("email", {
                    required: "Email is required",
                  })}
                />

              </div>

              <p className="text-red-400 text-sm mt-1">
                {errors.email?.message}
              </p>

            </div>

            <button
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 py-4 text-white font-semibold flex justify-center items-center gap-2 hover:shadow-[0_0_30px_rgba(168,85,247,.5)] transition"
            >

              {loading ? (
                "Sending OTP..."
              ) : (
                <>
                  Send OTP
                  <ArrowRight size={20} />
                </>
              )}

            </button>

          </form>
    </AuthLayout>
  
  );
};

export default ForgotPassword;