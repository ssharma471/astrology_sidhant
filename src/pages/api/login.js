const { connect, checkUser } = require("../../../user-api/mongodb"); // Import mongodb.js functions
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connect();
      const { email, password } = req.body;

      // Check if email and password are provided
      if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required" });
      }

      const user = await checkUser(email, password);
      if (user) {
        const tokenData = {
          id: user._id,
          name: user.name,
          email: user.email,
        };
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET);

        res.json({ success: true, message: "Login Successful", token: token });
      } else {
        res.status(401).json({ success: false, message: "Invalid email or password" });
      }
    } catch (error) {
      console.log("Error logging in user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
