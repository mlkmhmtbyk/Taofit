import mongoose from "mongoose";

const mealsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    foods: [],
  },
  {
    timestamps: true,
  }
);

const Meal = mongoose.model("Meal", mealsSchema);
export default Meal;
