import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box } from "@mui/material";

export default function ResponsiveDateCalendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ width: "100%", maxWidth: 300, margin: "0 auto", display: { xs: "none", md: "flex" }  }}>
        <DateCalendar />
      </Box>
    </LocalizationProvider>
  );
}