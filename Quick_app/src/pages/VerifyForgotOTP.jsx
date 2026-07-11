import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import API from "../api/axios";
import logo from "../assets/logo.png";
import navBg from "../assets/navBg.png";

const VerifyForgotOTP = () => {
  const navigate = useNavigate();

  const OTP_LENGTH = 6;

  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [timer, setTimer] = useState(30);
  const [loading, setLoading] = useState(false);

  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .slice(0, OTP_LENGTH)
      .split("");

    const newOtp = [...otp];

    pasted.forEach((num, i) => {
      if (/^\d$/.test(num)) {
        newOtp[i] = num;
      }
    });

    setOtp(newOtp);

    inputRefs.current[Math.min(pasted.length, OTP_LENGTH - 1)].focus();
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      alert("Enter Complete OTP");
      return;
    }

    try {
      setLoading(true);

      const email = localStorage.getItem("email");

      const res = await API.post("/auth/verify-forgot-otp", {
        email,
        otp: enteredOtp,
      });

      alert(res.data.message);

      navigate("/reset-password");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const resendOTP = async () => {
    try {
      const email = localStorage.getItem("email");

      const res = await API.post("/auth/forgot-password", {
        email,
      });

      alert(res.data.message);

      setTimer(30);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050816] overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#240046] via-[#3C096C] to-[#050816]" />

      <img
        src={navBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-purple-600/30 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/30 blur-[160px]" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">

        <button
          onClick={() => navigate("/login")}
          className="fixed top-5 right-5 h-11 w-11 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-red-500 transition"
        >
          <X size={22} />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
        >

          <div className="flex justify-center">
            <img src={logo} alt="" className="h-20" />
          </div>

          <div className="flex justify-center mt-6">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
              <ShieldCheck className="text-white" />
            </div>
          </div>

          <h1 className="text-center text-3xl font-bold text-white mt-6">
            Verify OTP
          </h1>

          <p className="text-center text-gray-300 mt-2">
            Enter OTP sent to your email.
          </p>

          <div
            className="flex justify-center gap-3 mt-8"
            onPaste={handlePaste}
          >
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-14 rounded-xl bg-white/10 border border-white/20 text-center text-2xl text-white outline-none focus:border-purple-500"
              />
            ))}
          </div>

          <div className="text-center mt-6">
            {timer > 0 ? (
              <p className="text-gray-400">
                Resend OTP in{" "}
                <span className="text-purple-300">
                  00:{timer.toString().padStart(2, "0")}
                </span>
              </p>
            ) : (
              <button
                onClick={resendOTP}
                className="text-purple-300 hover:text-white"
              >
                Resend OTP
              </button>
            )}
          </div>

          <button
            onClick={handleVerify}
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 py-4 text-white font-semibold"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

        </motion.div>

      </div>

    </div>
  );
};

export default VerifyForgotOTP;