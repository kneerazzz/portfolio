import nodemailer from "nodemailer";

interface SendEmailOptions {
  to?: string;
  subject?: string;
  message?: string;
  html?: string;
  from?: string;
  name?: string;
  email?: string;
}

// TypeScript will infer the correct type here, no need to manually type Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendEmail = async ({
  subject,
  message,
  from,
  email,
}: SendEmailOptions): Promise<void> => {
  try {
    const info = await transporter.sendMail({
    from: `"${from}" <${process.env.EMAIL_USER}>`,
    to: process.env.MY_EMAIL,
    subject: subject || "Mail from client",
    text: `${message}\n\nFrom: ${from} <${email}>`,
    html: `<p>${message}</p><p>From: <strong>${from}</strong> &lt;${email}&gt;</p>`,
    replyTo: `${from} <${email}>`, // lets you reply directly to the user
    });
    console.log("Email sent:", info.messageId);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sending email:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
