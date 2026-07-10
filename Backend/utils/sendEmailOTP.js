import axios from "axios";

const sendOTP = async (email, otp) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Quizonary",
          email: process.env.SENDER_EMAIL,
        },

        to: [
          {
            email,
          },
        ],

        subject: "Quizonary Email Verification",

        htmlContent: `
        <div style="font-family:Arial;padding:20px">
          <h2>Quizonary</h2>

          <p>Your OTP is</p>

          <h1>${otp}</h1>

          <p>OTP expires in 5 minutes.</p>
        </div>
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Email Sent");
    console.log(response.data);

    return true;
  } catch (err) {
    console.log("Email Error");

    console.log(err.response?.data || err.message);

    return false;
  }
};

export default sendOTP;