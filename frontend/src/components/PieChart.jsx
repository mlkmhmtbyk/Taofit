import * as React from "react";
import { PieArcLabel, PieChart, PieArc } from "@mui/x-charts/PieChart";
import Box from "@mui/material/Box";
import { Hidden } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const data = [
  { id: 0, value: 10, label: "series X" },
  { id: 1, value: 15, label: "series B" },
  { id: 2, value: 20, label: "series C" },
];

export default function BasicPie() {
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
      ></PieChart>
    </Box>
  );
}
