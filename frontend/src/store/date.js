import { create } from "zustand";

export const useDateStore = create((set) => ({
  date: new Date(),
  setDate: (date) => set({ date: date }),
}));