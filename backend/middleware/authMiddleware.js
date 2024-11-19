import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protect = async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // -password parola hariç tüm verileri getirir. 
      // Parolanın istemciye gönderilmemesini sağlar
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ success: false, message: "Not authorized" });
    }
  } else {
    res.status(401).json({ success: false, message: "Not authorized" });
  }
};

export { protect };