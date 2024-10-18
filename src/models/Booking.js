import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  date: {
    type: String, // Store dates as strings (e.g., YYYY-MM-DD)
    required: true,
  },
  timeSlot: {
    type: String, // Store the selected time slot (e.g., "10:00 AM")
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
