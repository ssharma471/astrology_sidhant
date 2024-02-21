// pages/api/login.js
const { connect, checkUser } = require("../../../user-api/mongodb"); // Import mongodb.js functions

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connect();
      const { email, password } = req.body;
      const user = await checkUser(email, password);
      if (user) {
        res.json({ success: true });
      } else {
        res
          .status(401)
          .json({ success: false, message: "Invalid email or password" });
      }
    } catch (error) {
      console.log("Error loggin in user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
