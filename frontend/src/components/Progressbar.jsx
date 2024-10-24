import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

// Inspired by the former Facebook spinners.

function CalculateTotalCaloryInDay(meals) {
  // let totalCalory = 0;
  // meals?.forEach((meal) => {
  //   meal?.foods.forEach((food) => {
  //     totalCalory += food.calory;
  //   });
  // });
  let totalCalory = 1000;
  return totalCalory;
}

export default function CustomizedProgressBars(props) {
  let meals = props.meals;
  let totalCalory = CalculateTotalCaloryInDay(meals);
  let targetCalory = 2500;

  return (
    <div>
      <Box sx={{ flexGrow: 1, marginBottom: "30px" }}>
        <br />
        <Typography variant="h6" gutterBottom>
          2500/{totalCalory}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Target(kcal) / Current(kcal)
        </Typography>
        <BorderLinearProgress
          variant="determinate"
          value={(100 * totalCalory) / targetCalory}
        />
      </Box>
    </div>
  );
}
