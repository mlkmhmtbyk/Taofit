import express from "express";
import {
  createMeal,
  getMealById,
  getMealsByDate,
  getMeals,
  updateMeal,
  deleteMeal,
} from "../controllers/meal.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createMeal);

router.get("/getMealsByDate", getMealsByDate);

router.get("/:id", getMealById);

router.get("/", getMeals);

router.put("/:id", updateMeal);

router.delete("/:id", deleteMeal);

export default router;
