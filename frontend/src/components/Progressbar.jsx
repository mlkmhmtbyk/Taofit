import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useEffect, useState } from "react";

//css
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function CustomizedProgressBars(props) {
  let meals = props.meals;
  let overFlow = false;
  let [totalCalory, setTotalCalory] = useState(
    CalculateTotalCaloryInDay(meals)
  );
  let targetCalory = 2500;

  useEffect(() => {
    setTotalCalory(CalculateTotalCaloryInDay(meals));
  }, [meals]);

  function CalculateTotalCaloryInDay(meals) {
    let totalCalory = 0;
    meals.forEach((meal) => {
      meal.foods.forEach((food) => {
        totalCalory += food.calories;
      });
    });
    let targetCalory = 2500;
    if (totalCalory > targetCalory) {
      overFlow = true;
    }
    return totalCalory;
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1, marginBottom: "30px" }}>
        <br />
        <Typography variant="h6" gutterBottom>
          2500/{totalCalory}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Target(cal) / Current(cal)
        </Typography>
        <BorderLinearProgress
          variant="determinate"
          value={overFlow ? 100 : (100 * totalCalory) / targetCalory}
          sx={{
            "& .MuiLinearProgress-bar": {
              transition: "none",
            },
          }}
        />
      </Box>
    </div>
  );
}
