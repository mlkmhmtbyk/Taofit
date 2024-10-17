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
      default: Date.now(),
    }, //mongoose regex kullanarak saati ayrı bir string tutabiliriz: match: /^([01][0-9]|2[0-3]):[0-5][0-9]$/
    foods: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Meal = mongoose.model("Meal", mealsSchema);
export default Meal;
