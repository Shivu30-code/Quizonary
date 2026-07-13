import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
    resetOTP: {
      type: String,
      default: "",
    },

    resetOTPExpire: {
      type: Date,
      default: null,
    },
    avatar: {
      type: String,
      default: "https://api.dicebear.com/9.x/adventurer/svg?seed=lion",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);