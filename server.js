// server.js
const express = require('express');
const next = require('next');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
const { connect, registerUser, checkUser } = require('./user-api/mongodb'); // Import mongodb.js functions

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Middleware to parse request bodies
  server.use(express.json());

  // Connect to MongoDB
  connect(); // Call connect function from mongodb.js

  // Function to check if password meets criteria
  function validatePassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=|\\{}[\]:;"'<>,.?/]).{8,}$/;
    return passwordRegex.test(password);
  }

  // Handle user registration endpoint
  server.post('/api/register', async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Check if password meets criteria
      if (!validatePassword(password)) {
        return res.status(400).json({ error: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*()-_+=|\\{}[\]:;"\'<>,.?/)' });
      }

      // Call registerUser function from mongodb.js to register user
      await registerUser({ name, email, password });
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      if (error.message.includes('duplicate key error')) {
        res.status(400).json({ error: 'Email already exists. Please use a different email.' });
      } else {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  });

  // Handle user login endpoint
  server.post('/api/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      // Call checkUser function from mongodb.js to check user credentials
      const user = await checkUser(email, password);

      // Check if user is found
      if (!user) {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
        return;
      }

      // Check if password matches
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
        return;
      }

      res.json({ success: true });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Handle updating user profile endpoint
  server.put('/api/update-profile', async (req, res) => {
    try {
      const { userId, updatedUserData } = req.body;

      // Check if userId and updatedUserData are provided
      if (!userId || !updatedUserData) {
        return res.status(400).json({ success: false, message: "userId and updatedUserData are required" });
      }

      // Update user's profile information
      await updateUserInfo(userId, updatedUserData);

      res.json({ success: true, message: "Profile updated successfully" });
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // For all other routes, let Next.js handle them
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
