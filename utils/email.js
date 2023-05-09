// eslint-disable-next-line import/no-extraneous-dependencies
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'abmoezashraf@gmail.com',
      pass: 'pymqykmcnyemlvkv',
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Abdelmoez Ashraf <admin@me.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
