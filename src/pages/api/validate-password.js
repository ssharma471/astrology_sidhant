const { connect, checkUserPassword } = require("../../../user-api/mongodb");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connect();
      const { email, currentPassword } = req.body;

      // Check if email and currentPassword are provided
      if (!email || !currentPassword) {
        return res.status(400).json({ message: "Email and current password are required" });
      }

      // Validate the user's current password
      const user = await checkUserPassword(email, currentPassword);
      if (!user) {
        return res.status(401).json({ message: "Current password is incorrect" });
      }

      // If the password is correct
      res.status(200).json({ message: "Current password is valid" });
    } catch (error) {
      console.error("Error validating password:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
