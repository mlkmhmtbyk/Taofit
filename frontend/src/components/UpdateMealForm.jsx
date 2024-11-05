import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import TimePicker from "./TimePicker.jsx";
import Grid from "@mui/material/Grid2";
import dayjs from "dayjs";
import { useNotifications } from "@toolpad/core/useNotifications";
import { useMealStore } from "../store/meal.js";

export default function FormDialog(props) {
  const { meal } = props;
  const [open, setOpen] = React.useState(false);
  const [newMeal, setNewMeal] = React.useState({
    name: meal.name || "",
    time: meal.time || dayjs().format("HH:mm"),
  });

  const { updateMeal, deleteMeal } = useMealStore();

  const notifications = useNotifications();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickDelete = async () => {
    const success = await handleDelete();
    if (!success) {
      notifications.show("Error while deleting meal! Please try again.", {
        severity: "error",
        autoHideDuration: 2000,
      });
    } else {
      notifications.show("Meal Deleted Successfully", {
        severity: "info",
        autoHideDuration: 2000,
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTimeChange = (newValue) => {
    const hours = newValue.$H.toString().padStart(2, "0");
    const minutes = newValue.$m.toString().padStart(2, "0");
    setNewMeal({ ...newMeal, time: hours + ":" + minutes });
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNewMeal({ ...newMeal, name: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    newMeal._id = meal._id;
    const { success, message } = await updateMeal(newMeal);
    if (success) {
      notifications.show(message, { severity: "info", autoHideDuration: 2000 });
      handleClose();
    } else {
      notifications.show(message, {
        severity: "error",
        autoHideDuration: 2000,
      });
    }
  };

  const handleDelete = async () => {
    const { success, message } = await deleteMeal(meal._id);
    if (success) {
      handleClose();
    }
    return success;
  };

  return (
    <React.Fragment>
      <IconButton aria-label="Edit Meal" size="large" onClick={handleClickOpen}>
        <EditIcon fontSize="inherit" />
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
        <DialogTitle>Update Meal</DialogTitle>
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
          <Grid container spacing={4} ml={2} mr={2}>
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
                value={newMeal.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <TimePicker
                value={dayjs(newMeal.time, "HH:mm")}
                onChange={handleTimeChange}
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
            ml={4}
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
