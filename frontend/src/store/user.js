import { create } from "zustand";
import axios from "axios";

export const useUserStore = create((set) => ({
  login: async (credentials) => {
    try {
      const response = await axios.post("api/users/login", credentials);
      return {
        success: true,
        message: "Login successful.",
      };
    } catch (error) {
      if (error.response.status === 401) {
        return {
          success: false,
          message: "Unauthorized",
        };
      }
      console.error(error);
      return {
        success: false,
        message: "Error while login. Please try again.",
      };
    }
  },
  logout: async () => {
    await axios.post("/api/users/logout");
  },
  signup: async (credentials) => {
    try {
      await axios.post("api/users/", credentials);
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: "Error while signup. Please try again.",
      };
    }
  },
}));
