import React from "react";
import { useFoodStore } from "../store/food";
import AddCircleOutlined from "@mui/icons-material/AddCircleOutlined";
import { IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";

export default function FoodForm(mealId) {
  const [open, setOpen] = React.useState(false);
  const [food, setFood] = React.useState({
    name: "",
    amount: "",
    calories: 0,
    fat: 0,
    protein: 0,
    carbs: 0,
    mealId: mealId.id,
  });

  const { createFood } = useFoodStore();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("food:", food);
    await createFood(food);
    handleClose();
  };

  const handleInputChange = (event) => {
    setFood({ ...food, [event.target.name]: event.target.value });
  };
  return (
    <React.Fragment>
      <IconButton aria-label="add food" onClick={handleClickOpen}>
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
        <DialogTitle>Add Food</DialogTitle>
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
            <Grid size={{ xs: 6 }}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="amount"
                name="name"
                label="Food Name"
                fullWidth
                variant="standard"
                autoComplete="food name"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid size={{ xs: 6 }}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="amount"
                name="amount"
                label="Amount"
                fullWidth
                variant="standard"
                autoComplete="amount"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid size={{ xs: 6 }}>
              <TextField
                type="number"
                autoFocus
                required
                margin="dense"
                id="calories"
                name="calories"
                label="Calories"
                fullWidth
                variant="standard"
                autoComplete="calories"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid size={{ xs: 6 }}>
              <TextField
                type="number"
                autoFocus
                required
                margin="dense"
                id="farbs"
                name="carbs"
                label="Carbs"
                fullWidth
                variant="standard"
                autoComplete="Carbs"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid size={{ xs: 6 }}>
              <TextField
                type="number"
                autoFocus
                required
                margin="dense"
                id="fat"
                name="fat"
                label="Fat"
                fullWidth
                variant="standard"
                autoComplete="fat"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid size={{ xs: 6 }}>
              <TextField
                type="number"
                autoFocus
                required
                margin="dense"
                id="protein"
                name="protein"
                label="Protein"
                fullWidth
                variant="standard"
                autoComplete="protein"
                onChange={handleInputChange}
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
