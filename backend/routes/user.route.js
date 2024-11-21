import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  deleteUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.delete("/", deleteUser);
router.put("/", updateUser);

export default router;
