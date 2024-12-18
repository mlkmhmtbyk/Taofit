import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import foodRoutes from "./routes/food.route.js";
import mealRoutes from "./routes/meal.route.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/api/foods", foodRoutes);
app.use("/api/meals", mealRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("listening on port: " + PORT);
});
