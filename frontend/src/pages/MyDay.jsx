import React from "react";
import DatePicker from "../components/DatePicker.jsx";
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';


const MyDay = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={{xs:12, sm:12, md:3}}>
          <DatePicker />
        </Grid>
      </Grid>
      
    </Box>
  );
};

export default MyDay;
