// pages/api/posts.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Make sure to add this in your .env.local file
const options = {};

// Create a cached MongoDB client to avoid connecting on every request in development mode
let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db('your-database-name'); // Replace with your DB name

      // Fetch posts from the "posts" collection
      const posts = await db.collection('posts').find({}).toArray();

      // Respond with the posts
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch posts' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}