import Food from "../models/food.model.js";
import mongoose from "mongoose";

export const createFood = async (req, res) => {
  const food = req.body;
  if (
    !food.name ||
    !food.amount ||
    !food.calorie ||
    !food.fat ||
    !food.protein ||
    !food.carbo ||
    !food.mealId
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const newFood = new Food(food);
  console.log("new foood created: " + newFood);

  try {
    await newFood.save();
    res.status(201).json({ success: true, data: newFood });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Server error" });
  }
};

export const getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Server error" });
  }
};

export const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    res.status(200).json({ success: true, data: food });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "Server error" });
  }
};

export const updateFood = async (req, res) => {
  const { id } = req.params;
  const food = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid food id" });
  }

  try {
    const updatedFood = await Food.findByIdAndUpdate(id, food, { new: true });
    res.status(200).json({ success: true, data: updatedFood });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteFood = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid food id" });
  }

  try {
    await Food.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Food deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
