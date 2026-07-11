import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import {
  register,
  verifyOTP,
  resendOTP,
  login,
  forgotPassword,

} from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", register);
router.post("/verify-otp", verifyOTP);
router.post("/resend-otp", resendOTP);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
// router.get("/profile", auth, profile);
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Forgot Route Working",
  });
});

export default router;