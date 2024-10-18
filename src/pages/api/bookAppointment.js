import nodemailer from 'nodemailer';
import dbConnect from '../../lib/mongodb';  // Import the MongoDB connection
import Booking from '../../models/Booking'; // Import the Booking model

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { date, timeSlot, email } = req.body;

    await dbConnect(); // Ensure MongoDB is connected

    try {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);  // Reset time to 00:00:00 to compare only the date part

      // Check if the selected date is in the past
      if (selectedDate < today) {
        return res.status(400).json({ success: false, message: 'Cannot book time slots for past dates' });
      }

      // Check if the time slot is already booked in the database
      const existingBooking = await Booking.findOne({ date, timeSlot });

      if (existingBooking) {
        return res.status(400).json({ success: false, message: 'Time slot already booked' });
      }

      // Create a new booking and save it to the database
      const newBooking = new Booking({ date, timeSlot, email });
      await newBooking.save();

      // Set up Nodemailer transport (for email notifications)
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Appointment Confirmation',
        text: `Your appointment is confirmed for ${new Date(date).toDateString()} at ${timeSlot}. Thank you for booking with us!`,
      };

      // Send confirmation email
      await transporter.sendMail(mailOptions);

      // Send success response after booking and sending the email
      res.status(200).json({ success: true, message: 'Booking confirmed and email sent.' });
    } catch (error) {
      console.error("Error booking appointment:", error);
      res.status(500).json({ success: false, message: 'Error processing booking' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
