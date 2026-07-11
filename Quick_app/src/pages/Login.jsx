import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Eye,
  EyeOff,
  Smartphone,
  Lock,
  ArrowRight,
  Trophy,
  Users,
  Clock3,
  Mail,
  X,
} from "lucide-react";

import logo from "../assets/logo.png";
import navBg from "../assets/navBg.png";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  try {
    setLoading(true);

    const res = await API.post("/auth/login", data);

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    alert(res.data.message);

    navigate("/dashboard");

  } catch (error) {

    alert(error.response?.data?.message || "Login Failed");

  } finally {

    setLoading(false);

  }
};

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#240046] via-[#3C096C] to-[#050816]" />
      <img
        src={navBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="absolute -top-20 left-0 h-96 w-96 rounded-full bg-purple-600/30 blur-[160px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/30 blur-[160px]" />

      <div className=" relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 py-20 sm:py-10">
        <div className="grid w-full max-w-6xl items-center gap-8 lg:grid-cols-2">
          <button type="button" onClick={() => navigate("/")}
            className="fixed top-4 right-4 md:absolute md:top-5 md:right-5 z-50 h-11 w-11 rounded-full
            bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center
            text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300"
          >
            <X size={22} />
          </button>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10"
          >

            <div className="flex justify-center">
              <img
                src={logo}
                alt="logo"
                className="h-16 sm:h-20 lg:h-24"
              />
            </div>

            <h1 
              className="mt-5 text-center text-3xl sm:text-4xl font-bold text-white">
              Welcome Back 👋
            </h1>

            <p className="mt-2 text-center text-gray-300">
              Login to continue your quiz journey.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 space-y-5"
            >
              <div>

                <label className="text-gray-300">
                  Email
                </label>

                <div 
                  className="mt-2 flex items-center rounded-xl border border-white/10 bg-white/10 px-4
                  transition-all duration-300 focus-within:border-purple-500
                  ocus-within:ring-2 focus-within:ring-purple-500/30 "
                >
                  <Mail className="text-purple-300" />

                  <input
                    type="email"
                    placeholder="Enter Email"
                    autoComplete="email"
                    className="w-full bg-transparent py-3.5 sm:py-4 px-3 text-white placeholder-gray-400 outline-none"
                    {...register("email", {
                      required: "Email Required",
                    })}
                  />

                </div>

                <p className="mt-1 text-sm text-red-400">
                  {errors.email?.message}
                </p>

              </div>
              <div>

                <label className="text-gray-300">
                  Password
                </label>

                <div className="mt-2 flex items-center rounded-xl border border-white/10 bg-white/10 px-4">

                  <Lock className="text-purple-300"/>

                  <input
                    type={showPassword ? "text":"password"}
                    placeholder="Enter Password"
                    autoComplete="current-password"
                    className="w-full bg-transparent py-3.5 sm:py-4 px-3 text-white placeholder-gray-400 outline-none"
                    {...register("password",{
                      required:"Password Required",
                      minLength:{
                        value:6,
                        message:"Minimum 6 Characters"
                      }
                    })}
                  />

                  <button
                    type="button"
                    onClick={()=>setShowPassword(!showPassword)}
                  >
                    {
                      showPassword
                      ?
                      <EyeOff className="text-white"/>
                      :
                      <Eye className="text-white"/>
                    }
                  </button>
                   
                </div>

                <p className="mt-1 text-sm text-red-400">
                  {errors.password?.message}
                </p>

              </div>

              <div className="flex items-center justify-between">

                <label className="flex items-center gap-2 text-gray-300">

                  <input type="checkbox"/>

                  Remember Me

                </label>

                <NavLink
                  to="/forgot-password"
                  className="text-purple-300 hover:text-white"
                >
                  Forgot Password?
                </NavLink>

              </div>

              <button type="submit" disabled={loading}
                className=" w-full rounded-xl bg-gradient-to-r from-purple-600 via-violet-600
                to-blue-600 py-3.5 sm:py-4 font-semibold text-lg hover:shadow-[0_0_30px_rgba(168,85,247,.5)]
                transition-all duration-300 hover:-translate-y-1 "
              >
                {loading ?
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin"/>
                    Logging in...
                  </div>
                  :
                  <div className="flex items-center justify-center gap-2">
                    Login
                    <ArrowRight size={20}/>
                  </div>
               }
              </button>
            </form>

            <p className="mt-8 text-center text-gray-400">
              Don't have an account?
              <NavLink
                to="/register"
                className="ml-2 font-semibold text-purple-300 hover:text-white"
              >
                Register
              </NavLink>

            </p>

          </motion.div>
          <motion.div
            initial={{opacity:0,x:80}}
            animate={{opacity:1,x:0}}
            transition={{duration:.7}}
            className="hidden lg:flex flex-col justify-center"
          >

            <div 
              className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl
              p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400">

                  <Trophy className="text-black"/>

                </div>

                <div>

                  <h2 className="text-3xl font-bold text-white">
                    Today's Mega Quiz
                  </h2>

                  <p className="text-gray-300">
                    Play & Win Big Rewards
                  </p>

                </div>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-5">

                <div className="rounded-2xl bg-white/5 p-5">

                  <Users className="text-purple-300"/>

                  <h2 className="mt-4 text-3xl font-bold text-white">
                    25K+
                  </h2>

                  <p className="text-gray-400">
                    Players Online
                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 p-5">

                  <Clock3 className="text-cyan-300"/>

                  <h2 className="mt-4 text-3xl font-bold text-white">
                    08:00 PM
                  </h2>

                  <p className="text-gray-400">
                    Starts Today
                  </p>

                </div>

              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-6">

                <p className="text-white/80">
                  Prize Pool
                </p>

                <h1 className="mt-2 text-5xl font-black text-white">
                  ₹50,000
                </h1>

              </div>


            </div>

          </motion.div>

        </div>

      </div>

    </div>
  );
};

export default Login;