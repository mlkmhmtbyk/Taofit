import { create } from "zustand";
import axios from "axios";
import { useMealStore } from "./meal.js";

export const useFoodStore = create((set) => ({
  food: null,
  setFood: (food) => set({ food: food }),
  createFood: async (food) => {
    try {
      const response = await axios.post("api/foods/", food);
      set((state) => ({ food: response.data.data }));
      const meals = useMealStore.getState().meals;
      const { updateMeal } = useMealStore.getState();
      const selectedMeal = meals.find((meal) => meal._id === food.mealId);
      selectedMeal.foods = [...selectedMeal.foods, response.data.data];
      await updateMeal(selectedMeal);
      return { success: true, message: "Food created successfully." };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Error while creating food. Please try again.",
      };
    }
  },
  updateFood: async (food) => {
    try {
      const response = await axios.put(`api/foods/${food._id}`, food);
      set((state) => ({ food: response.data.data }));
      return { success: true, message: "Food updated successfully." };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Error while updating food. Please try again.",
      };
    }
  },
  deleteFood: async (foodId) => {
    try {
      const response = await axios.delete(`api/foods/${foodId}`);
      set((state) => ({ food: null }));
      return { success: true, message: "Food deleted successfully." };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Error while deleting food. Please try again.",
      };
    }
  },
}));
