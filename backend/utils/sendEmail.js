const nodemailer = require("nodemailer");
require('dotenv').config({ path: '../.env' });

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

function sendEmail(to, status) {
    try {
        const mailOptions = {
            from: {
                name: "Klinik Prima",
                address: "no-reply-email@klinik-prima.com",
            },
            to,
            subject: "Reservasi Klinik Prima",
            text: `status reservasi anda adalah ${status} di Klinik Prima, silahkan cek email anda secara berkala untuk mengetahui status reservasi anda`,
        };
        transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { sendEmail }