import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

export const useMealStore = create(
  persist(
    (set) => ({
      meals: [],
      setMeals: (meals) => set({ meals: meals }),
      fetchMeals: async (date) => {
        const formattedDate = date.toISOString().split("T")[0];
        try {
          const response = await axios.get(
            `api/meals/getMealsByDate?date=${formattedDate}`
          );
          set({ meals: response.data.data });
        } catch (error) {
          console.error(error);
        }
      },
    }),
    {
      name: "meal-store",
    }
  )
);
