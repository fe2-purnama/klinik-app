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
                address: process.env.EMAIL
            },
            to,
            subject: "Reservasi Klinik Prima",
            text: `status reservasi anda ${status} di Klinik Prima sudah dikonfirmasi, silahkan cek email anda secara berkala`,
        };
        transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { sendEmail }