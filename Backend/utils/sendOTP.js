const sendOTP = async (mobile, otp) => {
  try {
    console.log("==================================");
    console.log("📱 Mobile :", mobile);
    console.log("🔐 OTP :", otp);
    console.log("==================================");

    return {
      success: true,
      message: "OTP Sent Successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export default sendOTP;