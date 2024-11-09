import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UpdateMealForm from "./UpdateMealForm.jsx";
import FoodForm from "./FoodForm.jsx";
import UpdateFoodForm from "./UpdateFoodForm.jsx";
import { useEffect } from "react";
import { useFoodStore } from "../store/food";
import { useMealStore } from "../store/meal";
import { useDateStore } from "../store/date.js";

export default function BasicTable({ meal }) {
  const { food } = useFoodStore();
  const { updateMeal, fetchMeals } = useMealStore();
  const { date } = useDateStore();

  useEffect(() => {
    if (food) {
      const selectedMeal = useMealStore
        .getState()
        .meals.find((meal) => meal._id === food.mealId);
      if (selectedMeal) {
        const existingFood = selectedMeal.foods.find((f) => f._id === food._id);
        if (existingFood) {
          const updatedFood = selectedMeal.foods.map((f) =>
            f._id === food._id ? food : f
          );
          updateMeal({ ...selectedMeal, foods: updatedFood });
        } else {
          updateMeal({ ...selectedMeal, foods: [...selectedMeal.foods, food] });
        }
      }
    }
  }, [food]);

  return (
    <TableContainer
      sx={{ display: "block", marginBottom: "30px" }}
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", width: "0px" }} align="right">
              <UpdateMealForm meal={meal} />
            </TableCell>
            <TableCell sx={{ fontWeight: "bold", maxWidth: "50px" }}>
              {meal.name}
              {" - "}
              {meal.time}
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Amount
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Calories
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Fat&nbsp;(g)
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meal.foods.map((food) => (
            <TableRow
              key={food._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right" sx={{ width: "0px" }}>
                <UpdateFoodForm updatedFood={food} />
              </TableCell>
              <TableCell align="left" component="th" scope="row">
                {food.name}
              </TableCell>
              <TableCell align="right">{food.amount}</TableCell>
              <TableCell align="right">{food.calories}</TableCell>
              <TableCell align="right">{food.fat}</TableCell>
              <TableCell align="right">{food.carbs}</TableCell>
              <TableCell align="right">{food.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <FoodForm id={meal._id} />
    </TableContainer>
  );
}
