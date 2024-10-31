import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function BasicTimePicker({ value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label="Meal Time"
        value={value}
        required={true}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
}
