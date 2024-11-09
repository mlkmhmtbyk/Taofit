import React from "react";
import { useFoodStore } from "../store/food";
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
import { useMealStore } from "../store/meal";

export default function UpdateFoodForm(props) {
  const [updatedFood, setUpdatedFood] = React.useState(props.updatedFood);

  const [open, setOpen] = React.useState(false);

  const { updateFood, deleteFood } = useFoodStore();
  const { meals, setMeals } = useMealStore();
  const { food, setFood } = useFoodStore();
  const { meals, setMeals } = useMealStore();
  const notifications = useNotifications();

  const handleClickOpen = () => {
    setUpdatedFood(props.updatedFood);
    setFood(props.updatedFood);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    if (
      !updatedFood.name ||
      !updatedFood.amount ||
      !updatedFood.calories ||
      !updatedFood.fat ||
      !updatedFood.protein ||
      !updatedFood.carbs
    ) {
      notifications.show("Please fill in all fields", {
        severity: "error",
        autoHideDuration: 2000,
      });
      return;
    }
    const result = await updateFood(updatedFood);
    const selectedMeal = meals.find((meal) => meal._id === food.mealId);
    if (selectedMeal) {
      const updatedMeal = {
        ...selectedMeal,
        foods: selectedMeal.foods.map((f) =>
          f._id === updatedFood._id ? updatedFood : f
        ),
      };
      setMeals(
        meals.map((meal) => (meal._id === updatedMeal._id ? updatedMeal : meal))
      );
    }
    if (result.success) {
      notifications.show("Food updated successfully", {
        severity: "info",
        autoHideDuration: 2000,
      });
    }
    handleClose();
  };

  const handleInputChange = (event) => {
    setUpdatedFood((prevFood) => ({
      ...prevFood,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClickDelete = async () => {
    const { success, message } = await deleteFood(updatedFood._id);
    if (success) {
      handleClose();
    }
    return success;
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
          onSubmit: handleUpdate,
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
                value={updatedFood.name}
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
                value={updatedFood.amount}
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
                value={updatedFood.calories}
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
                value={updatedFood.carbs}
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
                value={updatedFood.fat}
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
                value={updatedFood.protein}
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

var Deneme = (mealId) => {
  return <div></div>;
};
