import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDateStore } from "../store/date.js";

export default function CustomMonthLayout() {
  const { date, setDate } = useDateStore();
  const [value, setValue] = useState(date);

  const handleDateChange = (newValue) => {
    setDate(newValue);
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
          display: { xs: "none", lg: "block" },
          height: "%50",
          width: "100%",
        }}
        value={dayjs(value)}
        onChange={handleDateChange}
      />
      <DatePicker
        justifyContent="center"
        label="Date"
        sx={{
          display: { xs: "block", lg: "none" },
          textAlign: "center",
          margin: "0px auto",
          width: 150,
        }}
        value={dayjs(value)}
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  );
}
