import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
      default: 0,
    },
    calories: {
      type: Number,
      required: true,
      default: 0,
    },
    fat: {
      type: Number,
      required: true,
      default: 0,
    },
    protein: {
      type: Number,
      required: true,
      default: 0,
    },
    carbs: {
      type: Number,
      required: true,
      default: 0,
    },

    mealId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meal",
      required: true,
    },
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", foodSchema);
export default Food;
