import React from "react";
import DatePicker from "../components/DatePicker.jsx";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";

const MyDay = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid
          sx={{ display: { xs: "none", lg: "flex" } }}
          size={{ lg: 0.4 }}
        ></Grid>
        <Grid sx={{ display: { xs: "block", lg: "none" } }} size={{ xs: 3 }} />
        <Grid size={{ xs: 6, lg: 2 }} display="block">
          <DatePicker />
        </Grid>
        <Grid sx={{ display: { xs: "block", lg: "none" } }} size={{ xs: 3 }} />
        
      </Grid>
    </Box>
  );
};

export default MyDay;
