// pages/api/change-password.js
const { connect, checkUserPassword, updateUserInfo } = require('../../../user-api/mongodb');
const bcrypt = require('bcryptjs');

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      await connect(); // Connect to MongoDB

      const { email, currentPassword, newPassword } = req.body;

      // Check if all required fields are provided
      if (!email || !currentPassword || !newPassword) {
        return res.status(400).json({ success: false, message: 'Email, current password, and new password are required' });
      }

      // Validate the user's current password
      const user = await checkUserPassword(email, currentPassword); // Replace this with a function that checks user by email and password

      if (!user) {
        return res.status(401).json({ success: false, message: 'Current password is incorrect' });
      }

      // Check if the new password meets criteria
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=|\\{}[\]:;"'<>,.?/]).{8,}$/;
      if (!passwordRegex.test(newPassword)) {
        return res.status(400).json({
          success: false,
          message: 'New password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character',
        });
      }

      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update the user's password in the database
      const updateResult = await updateUserInfo(email, { password: hashedPassword });

      if (!updateResult.modifiedCount) {
        return res.status(500).json({ success: false, message: 'Error updating password' });
      }

      res.status(200).json({ success: true, message: 'Password updated successfully' });

    } catch (error) {
      console.error('Error changing password:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
