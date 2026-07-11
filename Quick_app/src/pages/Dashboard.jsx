import React from 'react'

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {


  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }

  }, []);



  return (
    <div className="min-h-screen flex items-center justify-center text-4xl">
      Welcome Dashboard 🎉
    </div>
  )
}

export default Dashboard