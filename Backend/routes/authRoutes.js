import express from "express";
import { auth } from "../middleware/authMiddleware.js";
import {
  register,
  verifyOTP,
  resendOTP,
  login,

} from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", register);
router.post("/verify-otp", verifyOTP);
router.post("/resend-otp", resendOTP);
router.post("/login", login);
// router.get("/profile", auth, profile);

export default router;