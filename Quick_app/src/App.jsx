import { Routes, Route } from "react-router-dom";

import WelcomeLayout from "./layouts/WelcomeLayout";
import MainLayout from "./layouts/MainLayout";

import WelcomeHome from "./component/WelcomeHome";

import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOTP from "./pages/VerifyOTP";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route element={<WelcomeLayout />}>
        <Route path="/" element={<WelcomeHome />} />
      </Route>


      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />


      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

    </Routes>
  );
}

export default App;