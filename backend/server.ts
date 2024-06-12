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

    // Configurer Nodemailer avec Ethereal
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.ETHEREAL_USER || testAccount.user, // Utilisez l'utilisateur Ethereal
            pass: process.env.ETHEREAL_PASS || testAccount.pass, // Utilisez le mot de passe Ethereal
        },
    });

    // Option d'envoi de mail à l'utilisateur Ethereal et au destinataire réel
    const mailOptionsToAdmin = {
        from: email, // Utilisez l'adresse email de l'expéditeur
        to: `${process.env.ETHEREAL_USER || testAccount.user}, ${process.env.REAL_RECIPIENT}`, // Admins
        subject: `Message from ${name}`,
        text: message,
        replyTo: email,
    };

    // Option d'envoi de mail à l'expéditeur
    const mailOptionsToSender = {
        from: process.env.ETHEREAL_USER || testAccount.user, // Utilisez l'adresse email Ethereal
        to: email, // Expéditeur
        subject: `Copy of your message to ${process.env.REAL_RECIPIENT}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptionsToAdmin);
        console.log('Email sent to admin:', process.env.REAL_RECIPIENT);

        await transporter.sendMail(mailOptionsToSender);
        console.log('Email sent to sender:', email);

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
