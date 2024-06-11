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
    const { name, email: senderEmail, message } = req.body;

    if (!name || !senderEmail || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Configurer Nodemailer avec Ethereal
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.ETHEREAL_USER || testAccount.user, // Utilisez l'utilisateur Ethereal
            pass: process.env.ETHEREAL_PASS || testAccount.pass, // Utilisez le mot de passe Ethereal
        },
    });

    const mailOptions = {
        from: senderEmail, // Utilisez l'adresse email de l'expéditeur
        to: `${process.env.ETHEREAL_USER || testAccount.user}, ${process.env.REAL_RECIPIENT}, ${senderEmail}`, // Ajoutez l'adresse email de l'expéditeur à la liste des destinataires
        subject: `Message from ${name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send email' });
        }
        console.log('Email sent:', nodemailer.getTestMessageUrl(info));
        res.status(200).json({ message: 'Email sent', url: nodemailer.getTestMessageUrl(info) });
    });
});

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
