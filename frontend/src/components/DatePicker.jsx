import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function CustomMonthLayout() {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
          display: { xs: "none", lg: "block" },
        }}
      />
      <DatePicker
        justifyContent="center"
        label="Date"
        sx={{
          
          display: { xs: "block", lg: "none" },
          textAlign: "center",
          margin: "0 auto",
          width: 150,
        }}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </LocalizationProvider>
  );
}
