import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOTP = async (email, otp) => {
  try {
    await transporter.sendMail({
      from: `"QuickQuiz" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "QuickQuiz Email Verification OTP",

      html: `
      <div style="max-width:600px;margin:auto;font-family:Arial;padding:30px;background:#0f172a;color:white;border-radius:12px">

      <h1 style="text-align:center;color:#a855f7">
      QuickQuiz
      </h1>

      <h2>Email Verification</h2>

      <p>Your OTP is</p>

      <h1
      style="
      text-align:center;
      letter-spacing:10px;
      background:#7c3aed;
      padding:15px;
      border-radius:10px;
      ">
      ${otp}
      </h1>

      <p>
      OTP will expire in
      <b>5 Minutes</b>
      </p>

      <hr>

      <p style="font-size:12px;color:#cbd5e1">
      Do not share this OTP with anyone.
      </p>

      </div>
      `,
    });

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default sendOTP;