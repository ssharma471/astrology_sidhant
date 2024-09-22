import { connect, updateUserInfo, checkUserPassword } from "../../../user-api/mongodb";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    try {
      await connect();
      const { userId, updatedUserData, currentPassword } = req.body;

      if (!userId || !updatedUserData || !currentPassword) {
        return res.status(400).json({ success: false, message: "userId, updatedUserData, and currentPassword are required" });
      }

      // Check if the current password is correct
      const user = await checkUserPassword(userId, currentPassword);
      if (!user) {
        return res.status(401).json({ success: false, message: "Current password is incorrect" });
      }

      // Proceed to update the user's profile information if the password is valid
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
