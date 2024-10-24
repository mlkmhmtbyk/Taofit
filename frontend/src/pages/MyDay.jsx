import React from "react";
import DatePicker from "../components/DatePicker.jsx";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import MealTable from "../components/MealTable.jsx";
import Progressbar from "../components/Progressbar.jsx";
import PieChart from "../components/PieChart.jsx";

const meals = [
  {
    id: "123",
    name: "Breakfast",
    date: "2022-04-17",
    foods: [
      {
        id: "123",
        name: "Apple",
        calories: 262,
        fat: 16.0,
        carbs: 24,
        protein: 6.0,
      },
      {
        id: "123",
        name: "Banana",
        calories: 262,
        fat: 16.0,
        carbs: 24,
        protein: 6.0,
      },
      {
        id: "123",
        name: "Egg",
        calories: 262,
        fat: 16.0,
        carbs: 24,
        protein: 6.0,
      },
      {
        id: "123",
        name: "Cheese",
        calories: 262,
        fat: 16.0,
        carbs: 24,
        protein: 6.0,
      },
    ],
  },
  {
    id: "123",
    name: "Lunch",
    date: "2022-04-17",
    foods: [
      {
        id: "123",
        name: "Apple",
        calories: 262,
        fat: 16.0,
        carbs: 24,
        protein: 6.0,
      },
      {
        id: "123",
        name: "Banana",
        calories: 262,
        fat: 16.0,
        carbs: 24,
        protein: 6.0,
      },
      {
        id: "123",
        name: "Orange",
        calories: 262,
        fat: 16.0,
        carbs: 24,
        protein: 6.0,
      },
      {
        id: "123",
        name: "Cheese",
        calories: 262,
        fat: 16.0,
        carbs: 24,
        protein: 6.0,
      },
    ],
  },
];

const MyDay = () => {
  return (
    <Box>
      <Grid container spacing={4} sx={{ width: "100%" }}>
        <Grid
          sx={{ display: { xs: "none", xl: "flex" } }}
          size={{ lg: 0.25 }}
        ></Grid>
        <Grid sx={{ display: { xs: "block", lg: "none" } }} size={{ xs: 3 }} />
        <Grid size={{ xs: 6, lg: 2.5 }} display="block">
          <DatePicker />
        </Grid>

        <Grid sx={{ display: { xs: "block", lg: "none" } }} size={{ xs: 3 }} />
        <Grid
          size={{ xs: 1.5 }}
          sx={{ display: { xs: "block", lg: "none" } }}
        ></Grid>
        <Grid size={{ xs: 9, lg: 6 }}>
          <Progressbar meals={meals} />
          {meals.map((meal) => (
            <MealTable key={meal.id} meal={meal} />
          ))}
        </Grid>
        <Grid size={{ xs: 1.5, lg: 3 }}>
          <PieChart />
        </Grid>
        <Grid
          sx={{ display: { xs: "none", lg: "flex" } }}
          size={{ lg: 0.25 }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default MyDay;
