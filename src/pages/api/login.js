// pages/api/register.js
const {
    connect,
    checkUser,
  } = require("../../../user-api/mongodb"); // Import mongodb.js functions
  
  export default async function handler(req, res) {
    if (req.method === "POST") {
      try {
        await connect()
        const { email, password } = req.body;
        await checkUser({ email, password });
        res.status(201).json({ message: "User logged in successfully" });
      } catch (error) {
        console.error("Error loggin in user:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    }else{
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  