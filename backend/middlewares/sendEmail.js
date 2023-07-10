const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  var transport = nodeMailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f7d8438b9b9af0",
      pass: "dbe5c209e92045",
    },
  });
  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transport.sendMail(mailOptions);
};
