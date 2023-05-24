const nodemailer = require('nodemailer');
const sendinblueTransport = require('nodemailer-sendinblue-transport');

// const transporter = nodemailer.createTransport(
//   sendinblueTransport({
//     apiKey: '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'
//   })
// );

// const mailOptions = {
//   from: 'your-email@example.com',
//   to: 'recipient@example.com',
//   subject: 'Hello from Node.js',
//   text: 'This is a test email sent from Node.js using SendinBlue.'
// };

// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.log('Error:', error);
//   } else {
//     console.log('Email sent:', info.response);
//   }
// });

const sendEmail = (email, subject, message) => {
  const transporter = nodemailer.createTransport(
    sendinblueTransport({
      apiKey: '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'
    })
  );

    transporter.sendMail({
      from: 'The Way Shop',
      to: email,
      subject: subject,
      html: message
    }, console.log("Email was sent succesfully"))
    .catch(err => console.log(err))
};

module.exports = sendEmail;