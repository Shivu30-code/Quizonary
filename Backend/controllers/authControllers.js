import User from "../models/User.js";
import OTP from "../models/OTP.js";

import bcrypt from "bcryptjs";
import validator from "validator";
import jwt from "jsonwebtoken";

import generateOTP from "../utils/generateOTP.js";
import sendOTP from "../utils/sendOTP.js";

/* ===========================
   REGISTER
=========================== */

export const register = async (req, res) => {
  try {
    const { fullName, email, mobile, password } = req.body;

    if (!fullName || !email || !mobile || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email",
      });
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      return res.status(400).json({
        success: false,
        message: "Invalid mobile number",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    // const emailExists = await User.findOne({ email });

    // if (emailExists) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Email already exists",
    //   });
    // }

    // const mobileExists = await User.findOne({ mobile });

    // if (mobileExists) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Mobile already exists",
    //   });
    // }
    // Check existing email
const existingEmail = await User.findOne({ email });

if (existingEmail) {
  if (existingEmail.isVerified) {
    return res.status(400).json({
      success: false,
      message: "Email already registered",
    });
  }

  // Remove old unverified account
  await User.deleteOne({ _id: existingEmail._id });
}

// Check existing mobile
const existingMobile = await User.findOne({ mobile });

if (existingMobile) {
  if (existingMobile.isVerified) {
    return res.status(400).json({
      success: false,
      message: "Mobile already registered",
    });
  }

  // Remove old unverified account
  await User.deleteOne({ _id: existingMobile._id });
}

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Step 5");
    const user = await User.create({
      fullName,
      email,
      mobile,
      password: hashedPassword,
      isVerified: false,
    });
    console.log("Step 6 User Created");

    await OTP.deleteMany({ mobile });

    const otp = generateOTP();

    await OTP.create({
      mobile,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });
    console.log("Step 7 OTP Saved");
    await sendOTP(mobile, otp);
    console.log("Step 8 OTP Sent");
    return res.status(201).json({
      success: true,
      message: "Registration successful. OTP sent.",
      userId: user._id,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

/* ===========================
   VERIFY OTP
=========================== */

export const verifyOTP = async (req, res) => {

  try {

    const { mobile, otp } = req.body;

    if (!mobile || !otp) {
      return res.status(400).json({
        success: false,
        message: "Mobile and OTP are required",
      });
    }

    const otpData = await OTP.findOne({ mobile, otp });

    if (!otpData) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (otpData.expiresAt < new Date()) {

      await OTP.deleteMany({ mobile });

      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });

    }

    await User.findOneAndUpdate(
      { mobile },
      {
        isVerified: true,
      }
    );

    await OTP.deleteMany({ mobile });

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully",
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

/* ===========================
   RESEND OTP
=========================== */

export const resendOTP = async (req, res) => {

  try {

    const { mobile } = req.body;

    if (!mobile) {
      return res.status(400).json({
        success: false,
        message: "Mobile is required",
      });
    }

    const user = await User.findOne({ mobile });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await OTP.deleteMany({ mobile });

    const otp = generateOTP();

    await OTP.create({
      mobile,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    await sendOTP(mobile, otp);

    return res.status(200).json({
      success: true,
      message: "OTP resent successfully",
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

/* ===========================
   LOGIN
=========================== */

export const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!user.isVerified) {
      return res.status(401).json({
        success: false,
        message: "Please verify your OTP first",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};