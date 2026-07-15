import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import {
  register,
  verifyOTP,
  resendOTP,
  login,
  forgotPassword,
  verifyForgotOTP,
  resetPassword,
  updateAvatar,
  updateProfile,
} from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", register);
router.post("/verify-otp", verifyOTP);
router.post("/resend-otp", resendOTP);
router.post("/login", login);

router.post("/forgot-password", forgotPassword);
router.post("/verify-forgot-otp", verifyForgotOTP);
router.post("/reset-password", resetPassword);
router.put("/avatar", updateAvatar);
router.put("/profile", updateProfile);
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Forgot Route Working",
  });
});

export default router;