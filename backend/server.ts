import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "2d09831ad53d0a",
          pass: "ea5ec9f418d129"
        }
      });

    // Option d'envoi de mail à l'utilisateur Ethereal et au destinataire réel
    const mailOptionsToAdmin = {
        from: 'irimananaandriamahay@gmail.com', // Utilisez l'adresse email de l'expéditeur
        to: email, // Admins
        subject: `Message from ${name}`,
        text: message,
    };

    // Option d'envoi de mail à l'utilisateur Ethereal
    try {
        await transporter.sendMail(mailOptionsToAdmin);

        res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
