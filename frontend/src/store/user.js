import { create } from "zustand";
import axios from "axios";

export const useUserStore = create((set) => ({
  login: async (credentials) => {
    try {
      await axios.post("api/users/login", credentials);
      console.log("Login successful2:", credentials);
    } catch (error) {
      console.error(error);
    }
  },
  logout: async () => {
    await axios.post("/api/users/logout");
  },
  signup: async (credentials) => {
    try {
      await axios.post("api/users/", credentials);
      console.log("Signup successful:", credentials);
    } catch (error) {
      console.error(error);
    }
  },
}));
