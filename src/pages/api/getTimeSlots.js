import dbConnect from '../../lib/mongodb';  // Import the MongoDB connection
import Booking from '../../models/Booking'; // Import the Booking model

// Define the available time slots
const availableTimeSlots = ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"];

export default async function handler(req, res) {
  const { date } = req.query;  // Get the date from the query string

  await dbConnect();  // Ensure MongoDB is connected

  try {
    const selectedDate = new Date(date); // Convert the query date to a Date object
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Reset time to 00:00:00 to compare only the date part

    // Check if the selected date is in the past
    if (selectedDate < today) {
      return res.status(400).json({ success: false, message: 'Cannot fetch time slots for past dates' });
    }

    // Fetch booked time slots for the selected date
    const bookedSlots = await Booking.find({ date });

    // Extract the booked time slots
    const bookedTimeSlots = bookedSlots.map((booking) => booking.timeSlot);

    // Filter out the booked time slots from the available ones
    const freeSlots = availableTimeSlots.filter(
      (slot) => !bookedTimeSlots.includes(slot)
    );

    // Return the free slots
    res.status(200).json({ timeSlots: freeSlots });
  } catch (error) {
    console.error("Error fetching available time slots:", error);
    res.status(500).json({ success: false, message: 'Error fetching time slots' });
  }
}
