import React, { useState } from "react";
import { Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import AuthLayout from "../layouts/AuthLayout";

const ResetPassword = () => {

  const navigate = useNavigate();

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = async () => {

    if(password.length < 6){
      return alert("Password must be at least 6 characters");
    }

    if(password !== confirm){
      return alert("Passwords do not match");
    }

    try{

      const email = localStorage.getItem("email");

      const res = await API.post("/auth/reset-password",{
        email,
        password,
      });

      alert(res.data.message);

      localStorage.removeItem("email");

      navigate("/login");

    }catch(err){

      alert(err.response?.data?.message);

    }

  }

  return(

   <AuthLayout>

            <h1 className="text-3xl text-center text-white font-bold">
            Reset Password
            </h1>

            <div className="mt-8">

                <div className="flex items-center bg-white/10 rounded-xl px-4">

                    <Lock className="text-purple-300"/>

                    <input
                        type={show1?"text":"password"}
                        placeholder="New Password"
                        autoComplete="new-password"
                        className="w-full bg-transparent p-4 text-white outline-none"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <button onClick={()=>setShow1(!show1)}>
                        {show1?<EyeOff/>:<Eye/>}
                    </button>

                </div>

            </div>

            <div className="mt-5">

                <div className="flex items-center bg-white/10 rounded-xl px-4">

        <           Lock className="text-purple-300"/>

                    <input
                        type={show2?"text":"password"}
                        placeholder="Confirm Password"
                        autoComplete="new-password"
                        className="w-full bg-transparent p-4 text-white outline-none"
                        value={confirm}
                        onChange={(e)=>setConfirm(e.target.value)}
                    />

                    <button onClick={()=>setShow2(!show2)}>
                        {show2?<EyeOff/>:<Eye/>}
                    </button>

                </div>
            </div>

            <button
                onClick={handleSubmit}
                className="mt-8 w-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl py-4 text-white font-semibold flex justify-center gap-2">
                Update Password
            <ArrowRight/>

            </button>

    </AuthLayout>

  )

}

export default ResetPassword;