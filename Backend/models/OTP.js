// import mongoose from "mongoose";

// const otpSchema = new mongoose.Schema(
//   {
//     email: {
//       type: String,
//       required: true,
//     },
//     otp: {
//       type: String,
//       required: true,
//     },
//     expiresAt: {
//       type: Date,
//       required: true,
//       expires: 0
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.model("OTP", otpSchema);


import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    password: {
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
      expires: 0,
    },
    lastSentAt: {
      type: Date,
      default: Date.now,
    },
    attempts: {
      type: Number,
      default: 0
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("OTP", otpSchema);