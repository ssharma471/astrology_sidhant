const { MongoClient, ObjectID } = require('mongodb');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const mongoDBConnectionString = process.env.MONGODB_URI;

let db;
let usersCollection;

module.exports.connect = async function () {
  try {
    const client = await MongoClient.connect(mongoDBConnectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db = client.db();
    usersCollection = db.collection('bts530'); // Change collection name here
    console.log('Connected to MongoDB');
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



module.exports.checkUserPassword = async function (email, currentPassword) {
  try {
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return null; // Return null if user is not found
    }
    const passwordMatch = await bcrypt.compare(currentPassword, user.password);
    if (!passwordMatch) {
      return null; // Return null if password doesn't match
    }
    return user; // Return the user if password is correct
  } catch (error) {
    console.error('Error checking user password:', error);
    throw error;
  }
};


module.exports.updateUserInfo = async function (email, updatedUserData) {
  try {
    // Directly update the user's profile information in the database using email as the identifier
    const result = await usersCollection.updateOne(
      { email: email }, // Query to find the user by their email
      { $set: updatedUserData } // Update the user's data with the new values
    );

    if (result.modifiedCount === 0) {
      throw new Error('User not found or no changes were made');
    }

    console.log('User information updated successfully');
    return result; // Return the result for further handling if necessary
  } catch (error) {
    console.error('Error updating user information:', error);
    throw error;
  }
};


