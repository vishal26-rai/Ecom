
const nodemailer = require('nodemailer');

// Function to send an email
async function sendEmail(to, subject, htmlContent) {
  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // use SSL
      auth: {
        user: 'sardarkhan2428@gmail.com', // Your Gmail email address
        pass: 'odopsilsxqfeuoeo', // Your Gmail app-specific password
      },
    });

    // Send email
    const info = await transporter.sendMail({
      from: 'sardarkhan2428@gmail.com', // Sender address
      to, // Receiver email address 
      subject, // Subject line
      html: htmlContent, // HTML content from template
    });

    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = { sendEmail };
