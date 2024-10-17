import Food from "../models/food.model.js";

export const createFood = async (req, res) => {
  const food = req.body;

  console.log(food);
  if (
    !food.name ||
    !food.amount ||
    !food.calorie ||
    !food.fat ||
    !food.protein ||
    !food.carbo
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
