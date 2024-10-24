import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useMealStore = create(
  persist((set) => ({
    meals: [],
    setMeals: (meals) => set({ meals: meals }),
    fetchMeals: async () => {
      const res = await fetch("api/meals");
      const data = await res.json();
      set({ meals: data.data });
    },
  }))
);
