import Meal from "../models/meal.model.js";
import Food from "../models/food.model.js";
import mongoose from "mongoose";
import { getUserIdFromToken } from "../utils/UserHelper.js";

export const createMeal = async (req, res) => {
  const meal = req.body;
  const userId = await getUserIdFromToken(req, res);

  if (!userId) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  meal.userId = userId;

  if (!meal.name) {
    return res
      .status(400)
      .json({ success: false, message: "Name is required" });
  }

  const newMeal = new Meal(meal);

  try {
    await newMeal.save();
    res.status(201).json({ success: true, data: newMeal });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Server error" });
  }
};

export const getMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    const mealsWithFoods = await Promise.all(
      meals.map(async (meal) => {
        const foods = await Food.find({ mealId: meal._id });
        meal.foods = foods;
        return meal;
      })
    );

    res.status(200).json({ success: true, data: mealsWithFoods });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Server error" });
  }
};

export const getMealsByDate = async (req, res) => {
  const date = req.query.date;
  const dateWithTime = new Date(`${date}T12:00:00.000Z`);
  const userId = await getUserIdFromToken(req, res);

  const startDate = new Date(dateWithTime);
  startDate.setHours(0, 0, 0, 0);

  const endDate = new Date(dateWithTime);
  endDate.setHours(23, 59, 59, 999);

  try {
    const meals = await Meal.find({
      userId: userId,
      date: { $gte: startDate, $lte: endDate },
    });

    const mealsWithFoods = await Promise.all(
      meals.map(async (meal) => {
        const foods = await Food.find({ mealId: meal._id });
        meal.foods = foods;
        return meal;
      })
    );
    res.status(200).json({ success: true, data: mealsWithFoods });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Server error" });
  }
};

export const getMealById = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);
    const foods = await Food.find({ mealId: req.params.id });

    meal.foods = foods;

    res.status(200).json({ success: true, data: meal });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Server error" });
  }
};

export const updateMeal = async (req, res) => {
  const { id } = req.params;
  const meal = req.body;
  const userId = await getUserIdFromToken(req, res);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid meal id" });
  }

  try {
    const updatedMeal = await Meal.findOneAndUpdate(
      { _id: id, userId: userId },
      meal,
      { new: true }
    );
    if (!updatedMeal) {
      return res
        .status(404)
        .json({ success: false, message: "Meal not found" });
    }
    res.status(200).json({ success: true, data: updatedMeal });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Server error" });
  }
};

export const deleteMeal = async (req, res) => {
  const { id } = req.params;
  const userId = await getUserIdFromToken(req, res);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid meal id" });
  }

  try {
    const deletedMeal = await Meal.findOneAndDelete({
      _id: id,
      userId: userId,
    });
    if (!deletedMeal) {
      return res
        .status(404)
        .json({ success: false, message: "Meal not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Meal deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
