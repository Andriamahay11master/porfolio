import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";
import * as functions from "firebase-functions";

admin.initializeApp();

// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, you might need to enable "less secure apps" in your Gmail settings.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "irimananaandriamahay@gmail.com",
    pass: "MahayCanada2024@2025"
  }
});

// Cloud Function to send an email
export const sendEmail = functions.firestore.document("contacts/{docId}").onCreate((snap, context) => {
  const data = snap.data();
  
  const mailOptions = {
    from: "irimananaandriamahay@gmail.com",
    to: data.email,
    subject: "Thank you for contacting us!",
    text: `Hello ${data.name},\n\nThank you for reaching out. We have received your message: "${data.message}"\n\nBest Regards,\nYour Company`
  };

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
});