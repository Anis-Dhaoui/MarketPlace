const nodemailer = require('nodemailer');
const sendinBlueTransport = require('nodemailer-sendinblue-transport');

const sendEmail = (email, subject, message) => {
  const transporter = nodemailer.createTransport(
    new sendinBlueTransport({
      apiKey: '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',
    })
  );

  const mailOptions = {
    from: 'sinanisdev@gmail.com',
    to: email,
    subject: subject,
    html: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred:', error.message);
    } else {
      console.log('Email sent successfully:', info.messageId);
    }
  });

}
module.exports = sendEmail;