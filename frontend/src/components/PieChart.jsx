import * as React from "react";
import { useEffect, useState } from "react";
import { Chart, PieSeries } from "@devexpress/dx-react-chart-material-ui";

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

export default function PieChart(props) {
  const meals = props.meals;

  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);

  const dataList = [
    { nutrition: "Carbonhdrat", area: carbs * 4 },
    { nutrition: "Fat", area: fat * 9 },
    { nutrition: "Protein", area: protein * 4 },
  ];

  useEffect(() => {
    setProtein(CalculateTotalProtein(meals));
    setFat(CalculateTotalFat(meals));
    setCarbs(CalculateTotalCarbs(meals));
  }, [meals]);

  return (
    <>
      <Chart sx={{ bgcolor: "background.paper" }} data={dataList} height={350}>
        <PieSeries
          valueField="area"
          argumentField="nutrition"
          innerRadius={0.5}
        />
      </Chart>
    </>
  );
}
