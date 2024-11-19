import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid2";

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

export default function BasicPie(props) {
  const meals = props.meals;
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);

  const data = [
    { id: 0, label: "Carbohydrate", value: carbs * 4 },
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
      <Grid container direction="column" alignItems="center">
        <Grid>
          <Typography
            variant="h6"
            align="center"
            display={"block"}
            marginBottom={0}
          >
            Nutrition Breakdown
          </Typography>
        </Grid>
        <Grid>
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
                valueFormatter: (v, { dataIndex }) => {
                  const total = data.reduce((acc, curr) => acc + curr.value, 0);
                  return `${((v.value / total) * 100).toFixed(2)}%`;
                },
              },
            ]}
            slotProps={{
              legend: {
                direction: "row",
                position: { vertical: "top", horizontal: "middle" },
                padding: 0,
              },
              tooltip: {
                formatter: (value, name, props) => {
                  const percentage = (value / props.total) * 100;
                  return `${percentage.toFixed(2)}%`;
                },
              },
            }}
          ></PieChart>
        </Grid>
      </Grid>
    </Box>
  );
}
