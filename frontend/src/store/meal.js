import { create } from "zustand";
import axios from "axios";

export const useMealStore = create(
  (set) => ({
    meals: [],
    setMeals: (meals) => set({ meals: meals }),
    fetchMeals: async (date) => {
      const formattedDate = date.$y + "-" + (date.$M + 1) + "-" + date.$D;
      try {
        const response = await axios.get(
          `api/meals/getMealsByDate?date=${formattedDate}`
        );
        set({ meals: response.data.data });
      } catch (error) {
        console.error(error);
      }
    },
    createMeal: async (meal) => {
      try {
        const response = await axios.post("api/meals/", meal);
        set({ meals: [...meals, response.data.data] });
      } catch (error) {
        console.error(error);
      }
    },
  }),
  {
    name: "meal-store",
  }
);
