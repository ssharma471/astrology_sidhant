import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { date, email } = req.body;

    // Set up Nodemailer transport (Make sure the credentials are correct)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can also use another email service provider
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail or email address
        pass: process.env.EMAIL_PASS, // Your email password or App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Appointment Confirmation',
      text: `Your appointment is confirmed for ${new Date(date).toDateString()}. Thank you for booking with us!`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`Email sent to: ${email} for appointment on ${new Date(date).toDateString()}`);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);  // Log the exact error
      res.status(500).json({ success: false, message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
