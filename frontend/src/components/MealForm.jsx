import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlined from "@mui/icons-material/AddCircleOutlined";
import { IconButton } from "@mui/material";
import TimePicker from "./TimePicker.jsx";
import Grid from "@mui/material/Grid2";
import dayjs from "dayjs";
import { useMealStore } from "../store/meal.js";
import { useDateStore } from "../store/date.js";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [meal, setMeal] = React.useState({
    name: "",
    time: dayjs().format("HH:mm"),
    foods: [],
  });

  const { createMeal } = useMealStore();
  const { date } = useDateStore();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTimeChange = (newValue) => {
    console.log(newValue.$H + ":" + newValue.$m);
    setMeal({ ...meal, time: newValue.$H + ":" + newValue.$m });
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setMeal({ ...meal, name: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(date);
    const formattedDate = date.$y + "-" + (date.$M + 1) + "-" + date.$D;
    const newMeal = {
      ...meal,
      date: formattedDate,
    };
    createMeal(newMeal);
    console.log(newMeal);
    handleClose();
  };

  return (
    <React.Fragment>
      <IconButton aria-label="add meal" size="large" onClick={handleClickOpen}>
        <AddCircleOutlined fontSize="inherit" />
      </IconButton>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        disableEnforceFocus
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>New Meal</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, lg: 6 }}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="mealName"
                name="mealName"
                label="Meal Name"
                type="text"
                fullWidth
                variant="standard"
                autoComplete="mealName"
                value={meal.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <TimePicker
                value={dayjs(meal.time, "HH:mm")}
                onChange={handleTimeChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" size="small" type="submit">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
