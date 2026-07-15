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
    userId: {
      type: String,
      required: true,
      unique: true,
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
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other", "Prefer not to say", ""],
      default: "",
    },
   
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);