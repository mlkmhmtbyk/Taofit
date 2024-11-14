import * as React from "react";
import { PieArcLabel, PieChart, PieArc } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";
import { Hidden, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { useDrawingArea } from "@mui/x-charts/hooks";
// const data = [
//   { id: 0, value: 10, label: "series X" },
//   { id: 1, value: 15, label: "series B" },
//   { id: 2, value: 20, label: "series C" },
// ];
function CalculateTotalProtein(meals) {
  let totalProtein = 0;
  meals.forEach((meal) => {
    meal.foods.forEach((food) => {
      totalProtein += food.protein;
    });
  });
  return totalProtein;
}

function CalculateTotalCarbs(meals) {
  let totalCarbs = 0;
  meals.forEach((meal) => {
    meal.foods.forEach((food) => {
      totalCarbs += food.carbs;
    });
  });
  return totalCarbs;
}

function CalculateTotalFat(meals) {
  let totalFat = 0;
  meals.forEach((meal) => {
    meal.foods.forEach((food) => {
      totalFat += food.fat;
    });
  });
  return totalFat;
}
function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return <Typography>{children}</Typography>;
}
export default function BasicPie(props) {
  const meals = props.meals;
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);

  const data = [
    { id: 0, label: "Carbonhdrat", value: carbs * 4 },
    { id: 1, label: "Fat", value: fat * 9 },
    { id: 2, label: "Protein", value: protein * 4 },
  ];

  useEffect(() => {
    setProtein(CalculateTotalProtein(meals));
    setFat(CalculateTotalFat(meals));
    setCarbs(CalculateTotalCarbs(meals));
  }, [meals]);

  const isSmallScreen = useMediaQuery("(max-width: 1500px)");
  const ismobile = useMediaQuery("(max-width: 1200px)");

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <PieChart
        height={ismobile ? 300 : isSmallScreen ? 300 : 400}
        width={ismobile ? 300 : isSmallScreen ? 300 : 400}
        sx={{
          marginTop: 5,
        }}
        series={[
          {
            data,
            innerRadius: isSmallScreen ? 75 : 100,
            outerRadius: isSmallScreen ? 100 : 150,
            cx: ismobile ? 140 : isSmallScreen ? 150 : 200,
            cy: ismobile ? 160 : isSmallScreen ? 150 : 200,
            cornerRadius: 5,
            paddingAngle: isSmallScreen ? 3 : 4,
          },
        ]}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "top", horizontal: "center" },
            padding: 0,
          },
        }}
      >
        <PieCenterLabel>Nutrition Rate</PieCenterLabel>
      </PieChart>
    </Box>
  );
}
