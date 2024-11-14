import * as React from "react";
import { PieArcLabel, PieChart, PieArc } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";
import { Hidden } from "@mui/material";

const data = [
  { id: 0, value: 10, label: "series X" },
  { id: 1, value: 15, label: "series B" },
  { id: 2, value: 20, label: "series C" },
];

export default function BasicPie() {
  return (
    <Box>
      <PieChart
        height={400}
        sx={{
          marginTop: 5,
        }}
        series={[
          {
            data,
            innerRadius: 100,
            outerRadius: 150,
            //arcLabel: (d) => `${d.label} ${d.value}`,
            cx: 200,
            cy: 200,
            cornerRadius: 5,
            paddingAngle: 4,
          },
        ]}
        slotProps={{
          legend: {
            direction: "row",
            position: { vertical: "top", horizontal: "center" },
            padding: 0,
          },
        }}
      ></PieChart>
    </Box>
  );
}
