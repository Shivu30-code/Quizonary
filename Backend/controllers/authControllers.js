import User from "../models/User.js";
import OTP from "../models/OTP.js";

import bcrypt from "bcryptjs";
import validator from "validator";
import jwt from "jsonwebtoken";

import generateOTP from "../utils/generateOTP.js";
import sendOTP from "../utils/sendEmailOTP.js";

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
        message: "Invalid Email",
      });
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Mobile Number",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    // Check if user already exists
    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    const mobileExists = await User.findOne({ mobile });

    if (mobileExists) {
      return res.status(400).json({
        success: false,
        message: "Mobile already registered",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Delete previous OTP if exists
    await OTP.deleteMany({ email });

    // Generate OTP
    const otp = generateOTP();

    // Save temporary registration data
    await OTP.create({
      fullName,
      email,
      mobile,
      password: hashedPassword,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
      lastSentAt: new Date(),
    });

    // Send Email
    const mailSent = await sendOTP(email, otp);

    console.log("OTP Sent :", mailSent);

    if (!mailSent) {

        return res.status(500).json({
            success:false,
            message:"Email not sent"
        });

    }
    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required",
      });
    }

const otpData = await OTP.findOne({ email });

if (!otpData) {
  return res.status(400).json({
    success: false,
    message: "OTP not found",
  });
}

// Check if entered OTP is correct
if (otpData.otp !== otp) {

  otpData.attempts += 1;

  await otpData.save();

  if (otpData.attempts >= 5) {

    await OTP.deleteMany({ email });

    return res.status(400).json({
      success: false,
      message: "Too many incorrect attempts. Please register again.",
    });

  }

  return res.status(400).json({
    success: false,
    message: `Invalid OTP. Remaining attempts: ${5 - otpData.attempts}`,
  });
}

    // Check expiry
    if (otpData.expiresAt < new Date()) {
      await OTP.deleteMany({ email });

      return res.status(400).json({
        success: false,
        message: "OTP Expired",
      });
    }

    // Safety check
    const alreadyExists = await User.findOne({
      $or: [
        { email: otpData.email },
        { mobile: otpData.mobile },
      ],
    });

    if (alreadyExists) {
      await OTP.deleteMany({ email });

      return res.status(400).json({
        success: false,
        message: "User already registered",
      });
    }

    // Create User AFTER OTP Verification
    const user = await User.create({
      fullName: otpData.fullName,
      email: otpData.email,
      mobile: otpData.mobile,
      password: otpData.password,
      isVerified: true,
    });

    // Generate JWT
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // Delete OTP
    await OTP.deleteMany({ email });

    return res.status(200).json({
      success: true,
      message: "Registration Successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        mobile: user.mobile,
      },
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const resendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Temporary registration data check
    const otpUser = await OTP.findOne({ email });
    const diff = Date.now() - otpUser.lastSentAt.getTime();

if (diff < 30000) {
  return res.status(400).json({
    success: false,
    message: `Please wait ${Math.ceil((30000 - diff) / 1000)} seconds before requesting another OTP.`,
  });
}

    if (!otpUser) {
      return res.status(404).json({
        success: false,
        message: "Registration session expired. Please register again.",
      });
    }

    // Generate new OTP
    const newOTP = generateOTP();

    // Update OTP & Expiry
    otpUser.otp = newOTP;
    otpUser.expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    otpUser.lastSentAt = new Date();

    await otpUser.save();

    // Send Email
    await sendOTP(email, newOTP);

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


export const forgotPassword = async (req, res) => {
  try {

    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Email not found",
      });
    }

    const otp = generateOTP();

    user.resetOTP = otp;
    user.resetOTPExpire = Date.now() + 5 * 60 * 1000;

    await user.save();

    const mailSent = await sendOTP(email, otp);

    if (!mailSent) {
      return res.status(500).json({
        success: false,
        message: "Email not sent",
      });
    }

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const verifyForgotOTP = async (req, res) => {
  try {

    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.resetOTP !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (new Date(user.resetOTPExpire) < new Date()) {
      return res.status(400).json({
        success: false,
        message: "OTP Expired",
      });
    }

    return res.status(200).json({
      success: true,
      message: "OTP Verified Successfully",
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const resetPassword = async (req, res) => {
  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!user.resetOTP) {
      return res.status(400).json({
        success: false,
        message: "Please verify OTP first",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    user.resetOTP = "";
    user.resetOTPExpire = null;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password Updated Successfully",
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};