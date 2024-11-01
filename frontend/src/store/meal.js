import { create } from "zustand";
import axios from "axios";

export const useMealStore = create(
  (set) => ({
    meals: [],
    setMeals: (meals) => set({ meals: meals }),
    fetchMeals: async (date) => {
      const formattedDate =
        date.$y +
        "-" +
        (date.$M + 1).toString().padStart(2, "0") +
        "-" +
        date.$D.toString().padStart(2, "0");
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
        set((state) => ({ meals: [...state.meals, response.data.data] }));
      } catch (error) {
        console.error(error);
      }
    },
    updateMeal: async (meal) => {
      try {
        const response = await axios.put(`api/meals/${meal._id}`, meal);
        set((state) => ({
          meals: state.meals.map((m) =>
            m._id === response.data.data._id ? response.data.data : m
          ),
        }));
        return { success: true, message: "Meal updated successfully." };
      } catch (error) {
        console.error(error);
        return {
          success: false,
          message: "Error while updating meal. Please try again.",
        };
      }
    },
    deleteMeal: async (mealId) => {
      try {
        const res = await axios.delete(`api/meals/${mealId}`);
        set((state) => ({
          meals: state.meals.filter((m) => m._id !== mealId),
        }));
        return { success: true, message: "Meal deleted successfully." };
      } catch (error) {
        console.error(error);
        return {
          success: false,
          message: "Error while deleting meal. Please try again.",
        };
      }
    },
  }),
  {
    name: "meal-store",
  }
);
