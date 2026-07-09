import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    mobile: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
      expires: 0
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("OTP", otpSchema);