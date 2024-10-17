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
    calorie: {
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
    carbo: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", foodSchema);
export default Food;
