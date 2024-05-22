import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const mailHelper = async (data) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Email content
  const message = {
    from: "updates@modazen.com",
    to: data.email,
    subject: "Welcome to ModaZen Newsletter",
    text: "Thank you for subscribing to our newsletter!",
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
