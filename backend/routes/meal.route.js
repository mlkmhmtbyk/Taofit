import express from "express";
import {
  createMeal,
  getMealById,
  getMeals,
  updateMeal,
  deleteMeal,
} from "../controllers/meal.controller.js";

const router = express.Router();

router.post("/", createMeal);

router.get("/:id", getMealById);

router.get("/", getMeals);

router.put("/:id", updateMeal);

router.delete("/:id", deleteMeal);

export default router;
