import dayjs from "dayjs";
import { create } from "zustand";

export const useDateStore = create((set) => ({
  date: dayjs(),
  setDate: (date) => set({ date: date }),
}));