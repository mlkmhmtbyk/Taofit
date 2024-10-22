import Meal from "../models/meal.model.js";
import Food from "../models/food.model.js";
import mongoose from "mongoose";

export const createMeal = async (req, res) => {
  const meal = req.body;

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

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid meal id" });
  }

  try {
    const updatedMeal = await Meal.findByIdAndUpdate(id, meal, { new: true });
    res.status(200).json({ success: true, data: updatedMeal });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Server error" });
  }
};

export const deleteMeal = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid meal id" });
  }

  try {
    await Meal.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Meal deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
