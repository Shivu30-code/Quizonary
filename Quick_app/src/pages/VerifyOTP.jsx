import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck,X } from "lucide-react";
import logo from "../assets/logo.png";
import navBg from "../assets/navBg.png";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const OTP_LENGTH = 6;
  const navigate = useNavigate();
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
    if (
      e.key === "Backspace" &&
      otp[index] === "" &&
      index > 0
    ) {
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

    const nextIndex = Math.min(
      pasted.length,
      OTP_LENGTH - 1
    );

    inputRefs.current[nextIndex].focus();
  };

  const handleVerify = async () => {

  const enteredOtp = otp.join("");

  if (enteredOtp.length !== 6) {
    alert("Enter Complete OTP");
    return;
  }

  try {

    const mobile = localStorage.getItem("mobile");

    const res = await API.post("/auth/verify-otp", {
      mobile,
      otp: enteredOtp,
    });

    alert(res.data.message);

    localStorage.removeItem("mobile");

    navigate("/login");

  } catch (error) {

    alert(error.response?.data?.message);

  }

};
  
  const resendOTP = async () => {

  try {

    const email = localStorage.getItem("email");

    const res = await API.post("/auth/resend-otp", {
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

      <div className="relative z-10 flex items-center justify-center min-h-screen  px-4 sm:px-6 py-20 sm:py-10">
        
        <button type="button" onClick={() => navigate("/")}
          className="fixed top-4 right-4 md:absolute md:top-5 md:right-5 z-50 h-11 w-11 rounded-full bg-black/40
          backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-red-500
          hover:border-red-500 transition-all duration-300"
        >
          <X size={22} />
        </button>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10">
          
          <div className="flex justify-center">
            <img
              src={logo}
              alt=""
              className="h-16 sm:h-20 lg:h-24"
            />
          </div>

          <div className="flex justify-center mt-6">

            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">

              <ShieldCheck className="text-white"/>

            </div>

          </div>

          <h1 className="mt-5text-center text-2xl sm:text-3xl font-bold text-white">
            Verify OTP
          </h1>

          <p className="text-center text-gray-300 mt-2">
            Enter the 6 digit OTP sent to your mobile number.
          </p>

          <div
            className=" mt-8 flex justify-center gap-2 sm:gap-3"
            onPaste={handlePaste}>

            {otp.map((digit, index) => (

              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) =>
                  handleChange(e.target.value, index)
                }
                onKeyDown={(e) =>
                  handleKeyDown(e, index)
                }
                className="w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16 rounded-xl bg-white/10 border border-white/20
                text-center text-lg sm:text-xl md:text-2xl text-white outline-none focus:border-purple-500 focus:ring-2
                focus:ring-purple-500 transition flex-shrink-0"
              />
            ))}

          </div>

          <div className="text-center mt-8">

            {timer > 0 ? (
              <p className="text-gray-400">

                Resend OTP in

                <span className="text-purple-300 font-semibold">

                  {" "}00:{timer.toString().padStart(2, "0")}

                </span>

              </p>
            ) : (
              <button
                onClick={resendOTP}
                className="text-purple-300 hover:text-white font-semibold"
              >
                Resend OTP
              </button>
            )}

          </div>

          <button
            onClick={handleVerify}
            disabled={loading}
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600
            py-3.5 sm:py-4 text-white font-semibold hover:shadow-[0_0_30px_rgba(168,85,247,.5)] hover:-translate-y-1
            transition-all duration-300"
          >

            {loading ? (

              <div className="flex justify-center items-center gap-3">

                <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"/>

                Verifying...

              </div>

            ) : (

              "Verify OTP"

            )}

          </button>

        </motion.div>

      </div>

    </div>
  );
};

export default VerifyOTP;