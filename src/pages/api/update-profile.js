const { connect, updateUserInfo } = require("../../../user-api/mongodb");

export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      await connect();
      const { userId, updatedUserData } = req.body; // Assuming userId and updatedUserData are sent from the frontend

      // Check if userId and updatedUserData are provided
      if (!userId || !updatedUserData) {
        return res.status(400).json({ success: false, message: "userId and updatedUserData are required" });
      }

      // Update user's profile information with the userId and updatedUserData
      await updateUserInfo(userId, updatedUserData);

      res.json({ success: true, message: "Profile updated successfully" });
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
