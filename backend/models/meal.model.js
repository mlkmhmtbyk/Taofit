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
    // food u burada ref verip sonrasında populate ile foodları çekmek daha doğru bir yaklaşım olacak
    // fakat bu geliştirme food ekleme yapılırken foodId yi foods a eklenmesini de gerektirecek
    // o yüzden bu projede yapmıyoruz.
    foods: [],
  },
  {
    timestamps: true,
  }
);

const Meal = mongoose.model("Meal", mealsSchema);
export default Meal;
