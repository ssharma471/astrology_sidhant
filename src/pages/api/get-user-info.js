import jwt from "jsonwebtoken";
import { checkUser } from "../../../user-api/mongodb"; // Import mongodb.js functions

export default async function handler(req, res) {
  const handlePostRequest = async () => {
    try {
      const { email, password } = req.body;

      // Check if email and password are provided
      if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required" });
      }

      const user = await checkUser(email, password);
      console.log(user)
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
  };

  if (req.method === "POST") {
    await handlePostRequest();
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
