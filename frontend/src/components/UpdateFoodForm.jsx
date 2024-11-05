import React from "react";
import { useEffect } from "react";
import { useFoodStore } from "../store/food";
import { useMealStore } from "../store/meal";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNotifications } from "@toolpad/core/useNotifications";

export default function FoodForm(mealId) {
  const [open, setOpen] = React.useState(false);
  const [newFood, setNewFood] = React.useState({});

  const { createFood } = useFoodStore();
  const { food, setFood } = useFoodStore();
  const { updateMeal } = useMealStore();
  const notifications = useNotifications();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setNewFood({});
    setOpen(false);
  };

  useEffect(() => {
    if (food) {
      const selectedMeal = useMealStore
        .getState()
        .meals.find((meal) => meal._id === food.mealId);
      if (selectedMeal) {
        updateMeal({ ...selectedMeal, foods: [...selectedMeal.foods, food] });
      }
    }
  }, [food]);

  const handleAdd = async () => {
    if (
      !newFood.name ||
      !newFood.amount ||
      !newFood.calories ||
      !newFood.fat ||
      !newFood.protein ||
      !newFood.carbs
    ) {
      notifications.show("Please fill in all fields", {
        severity: "error",
        autoHideDuration: 2000,
      });
      return;
    }
    newFood.mealId = mealId.id;
    const result = await createFood(newFood);
    if (result.success) {
      notifications.show("Food added successfully", {
        severity: "info",
        autoHideDuration: 2000,
      });
    }
    handleClose();
  };

  const handleInputChange = (event) => {
    setNewFood({ ...newFood, [event.target.name]: event.target.value });
  };
  return (
    <React.Fragment>
      <IconButton aria-label="edit food" size="small" onClick={handleClickOpen}>
        <EditIcon fontSize="inherit" />
      </IconButton>
      <Dialog
        fullWidth={true}
        open={open}
        onClose={handleClose}
        disableEnforceFocus
        PaperProps={{
          component: "form",
          onSubmit: handleAdd,
        }}
      >
        <DialogTitle>Edit Food</DialogTitle>
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
          <Grid container spacing={4}>
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
          <Grid
            container
            spacing={4}
            justifyContent="space-between"
            width="100%"
            ml={2}
          >
            <Grid>
              <Button variant="contained" size="small" type="submit">
                Update
              </Button>
            </Grid>
            <Grid
              sx={{
                textAlign: "right",
                display: "flex",
                alignItems: "center",
                mt: -2,
                mr: 1,
              }}
            >
              <IconButton
                aria-label="delete"
                size="large"
                onClick={() => {
                  handleClickDelete();
                }}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
