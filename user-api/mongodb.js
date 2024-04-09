const { MongoClient, ObjectID } = require('mongodb');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const mongoDBConnectionString = process.env.MONGODB_URI;

let db;
let usersCollection;

module.exports.connect = async function () {
  try {
    console.log(mongoDBConnectionString);
    const client = await MongoClient.connect(mongoDBConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db = client.db();
    usersCollection = db.collection('bts530'); // Change collection name here
    console.log('Connected to MongoDB');
    console.log(mongoDBConnectionString);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

module.exports.registerUser = async function (userData) {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    await usersCollection.insertOne({
      name: userData.name,
      email: userData.email,
      password: hashedPassword
    });
    console.log('User successfully registered');
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

module.exports.checkUser = async function (email, password) {
  try {
    const user = await usersCollection.findOne({ email });
    console.log(password)
    console.log(user)
    if (!user) {
      return null; // Return null if user is not found
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Incorrect password');
    }
    return user;
  } catch (error) {
    console.error('Error checking user:', error);
    throw error;
  }
};

module.exports.updateUserInfo = async function (userId, updatedUserData) {
  console.log(userId)
  console.log(updatedUserData)
  try {

    // Assuming you have access to the usersCollection here
    // Make sure you have initialized usersCollection in your connect function

    // Convert userId to MongoDB ObjectID if needed
    const objectId = require('mongodb').ObjectID;
    const userObjectId = new objectId(userId);

    // Check if password is included in the updatedUserData
    if (updatedUserData.password) {
      // Hash the new password before updating
      updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    }

    // Update user's profile information in the database
    const result = await usersCollection.updateOne(
      { _id: userObjectId }, // Query to find the user by their unique identifier
      { $set: updatedUserData } // Update the user's data with the new values
    );

    if (result.modifiedCount === 0) {
      throw new Error('User not found or no changes were made');
    }

    console.log('User information updated successfully');


    if (result.modifiedCount === 0) {
      throw new Error('User not found or no changes were made');
    }

    console.log('User information updated successfully');
  } catch (error) {
    console.error('Error updating user information:', error);
    throw error;
  }
};