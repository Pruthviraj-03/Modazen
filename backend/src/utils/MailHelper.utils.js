import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const mailHelper = async (user) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Email content
  const message = {
    from: "updates@modazen.com",
    to: user.email,
    subject: user.subject,
    text: user.message,
    html: user.htmlMessage,
  };

  try {
    const info = await transporter.sendMail(message);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export { mailHelper };
