const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
require('dotenv').config()
const port = 3000

app.listen(port, () => {
    console.log(`nodemailerProject is listent at http://locahost:${port}`)
})

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
    }
});

let mailOptions = {
    from: 'tomerpacific@gmail.com',
    to: 'blackcarrera@msn.com',
    subject: 'Node eMailer',
    text: 'Sent from Node eMailer Project @ 18:20'
};

transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
        console.log("Error " + err);
    } else {
        console.log("Email sent successfully");
    }
});