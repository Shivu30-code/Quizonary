// import nodemailer from "nodemailer";



// const transporter = nodemailer.createTransport({
//   host: "smtp-relay.brevo.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// transporter.verify(function(error, success){
//   if (error) {
//     console.log("SMTP Error:");
//     console.log(error);
//   } else {
//     console.log("SMTP Connected");
//   }
// });
// const sendOTP = async (email, otp) => {
//   try {

//     const info = await transporter.sendMail({
//       from: `"Quizonary" <${process.env.SENDER_EMAIL}>`,
//       to: email,
//       subject: "Quizonary Email Verification OTP",
//       html: `
//       <div style="max-width:600px;margin:auto;font-family:Arial;padding:30px;background:#0f172a;color:white;border-radius:12px">

//       <h1 style="text-align:center;color:#a855f7">
//       Quizonary
//       </h1>

//       <h2>Email Verification</h2>

//       <p>Your OTP is</p>

//       <h1
//       style="
//       text-align:center;
//       letter-spacing:10px;
//       background:#7c3aed;
//       padding:15px;
//       border-radius:10px;
//       ">
//       ${otp}
//       </h1>

//       <p>
//       OTP will expire in
//       <b>5 Minutes</b>
//       </p>

//       <hr>

//       <p style="font-size:12px;color:#cbd5e1">
//       Do not share this OTP with anyone.
//       </p>

//       </div>
//       `,
//     });
//     console.log("Mail Sent:", info.response)

//     return true;
//   } catch (err) {
//   console.log("Mail Error:");
//   console.log(err);
//   return false;
// }
// };

// export default sendOTP;


import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("SENDER_EMAIL:", process.env.SENDER_EMAIL);
console.log("EMAIL_PASS Exists:", !!process.env.EMAIL_PASS);
transporter.verify(function(error, success){
  if (error) {
    console.log("SMTP Error:");
    console.log(error);
  } else {
    console.log("SMTP Connected");
  }
});

export default async function sendOTP(email, otp) {
  try {
    const info = await transporter.sendMail({
      from: `"Quizonary" <${process.env.SENDER_EMAIL}>`,
      to: email,
      subject: "OTP Verification",
      html: `<h1>${otp}</h1>`,
    });

    console.log(info);

    return true;
  } catch (err) {
    console.log(err);

    return false;
  }
}