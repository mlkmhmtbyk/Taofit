import React, { useEffect } from "react";
import DatePicker from "../components/DatePicker.jsx";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import MealTable from "../components/MealTable.jsx";
import Progressbar from "../components/Progressbar.jsx";
import PieChart from "../components/PieChart.jsx";
import { useMealStore } from "../store/meal.js";
import { useDateStore } from "../store/date.js";
import MealForm from "../components/MealForm.jsx";
import { Typography } from "@mui/material";

const MyDay = () => {
  const { fetchMealsInDay, meals } = useMealStore();
  const { date } = useDateStore();

  useEffect(() => {
    fetchMealsInDay(date);
  }, [date]);

  return (
    <Box>
      <Grid container spacing={4} sx={{ width: "100%" }}>
        <Grid
          sx={{ display: { xs: "none", xl: "flex" } }}
          size={{ lg: 0.25 }}
        ></Grid>
        <Grid
          sx={{ display: { xs: "block", lg: "none" } }}
          size={{ xs: 1.5 }}
        ></Grid>
        <Grid
          sx={{ display: { xs: "block", lg: "none" } }}
          size={{ xs: 9, lg: 0 }}
        >
          <PieChart meals={meals} />
        </Grid>
        <Grid
          sx={{ display: { xs: "block", lg: "none" } }}
          size={{ xs: 1.5 }}
        ></Grid>
        <Grid
          sx={{ display: { xs: "block", lg: "none" } }}
          size={{ xs: 3 }}
        ></Grid>
        <Grid size={{ xs: 6, lg: 2.5 }} display="block">
          <DatePicker />
        </Grid>

        <Grid
          sx={{ display: { xs: "block", lg: "none" } }}
          size={{ xs: 3 }}
        ></Grid>
        <Grid
          size={{ xs: 1.5 }}
          sx={{ display: { xs: "block", lg: "none" } }}
        ></Grid>
        <Grid
          justifyContent={"center"}
          alignItems={"center"}
          size={{ xs: 9, lg: 6 }}
        >
          <Grid>
            <Progressbar meals={meals} />
          </Grid>
          <Grid>
            {meals.map((meal) => (
              <Box key={meal._id}>
                <MealTable key={meal._id} meal={meal} />
              </Box>
            ))}
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MealForm />
          </Grid>
        </Grid>
        <Grid
          sx={{ display: { xs: "none", lg: "flex" } }}
          size={{ xs: 0, lg: 3 }}
        >
          <PieChart meals={meals} />
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
