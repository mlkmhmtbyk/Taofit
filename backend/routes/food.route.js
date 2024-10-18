import express from "express";
import {
  createFood,
  getFoods,
  getFoodById,
  updateFood,
  deleteFood,
} from "../controllers/food.controller.js";

const router = express.Router();

router.post("/", createFood);
router.get("/:id", getFoodById);
router.get("/", getFoods);
router.put("/:id", updateFood);
router.delete("/:id", deleteFood);

export default router;
