import jwt from "jsonwebtoken";

export const getUserIdFromToken = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return null;
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.userId;
  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, message: "Server Error" });
  }
};
