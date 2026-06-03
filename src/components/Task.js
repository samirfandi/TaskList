import "../style/Task.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useContext, useState } from "react";
import { TasksContext } from "../contexts/TasksContext";
import { useSnackbar } from "../contexts/SnackbarContext";
import Box from "@mui/material/Box";

// Dialog
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Alert from "@mui/material/Alert";

export default function Task({ task }) {
  // state from app
  const { tasks, setTasks } = useContext(TasksContext);
  const { showHideSnackbar } = useSnackbar();

  // states
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [editTaskName, setEditTaskName] = useState("");
  const [editTaskDetails, setEditTaskDetails] = useState("");

  // delete dialog
  function handleOpenDeleteDialog() {
    setShowDeleteDialog(true);
  }
  function handleCloseDeleteDialog() {
    setShowDeleteDialog(false);
  }

  // edit dialog
  function handleOpenEditDialog() {
    setEditTaskName(task.title);
    setEditTaskDetails(task.details);
    setShowEditDialog(true);
  }
  function handleCloseEditDialog() {
    setShowEditDialog(false);
  }

  // function used to add a task to doing task list
  const hCheckButton = function () {
    const newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, isCompleted: !t.isCompleted };
      } else {
        return t;
      }
    });
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    showHideSnackbar("Task completed successfully");
  };

  // function used to delete a task from the list
  const hDeleteButton = function () {
    const newTasks = tasks.filter((t) => t.id != task.id);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    showHideSnackbar("Task deleted successfully");
  };

  // Editing event
  function handleSaveEditing() {
    const newTasks = tasks.map((t) => {
      if (t.id == task.id) {
        return { ...t, title: editTaskName, details: editTaskDetails };
      } else {
        return t;
      }
    });
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    handleCloseEditDialog();

    showHideSnackbar("Task edited successfully");
  }

  return (
    <Box className="Task" sx={{ backgroundColor: "secondary.main" }}>
      {/* DELETE DIALOG  */}
      <Dialog
        open={showDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete the task?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once you delete the task, you won't be able to restore it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDeleteDialog}>
            Cancel
          </Button>
          <Button onClick={hDeleteButton}>Delete Task</Button>
        </DialogActions>
      </Dialog>
      {/* ===============  DELETE DIALOG  =================  */}

      {/* EDITING DIALOG  */}
      <Dialog
        open={showEditDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle id="alert-dialog-title">{"Editing Task"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="Task Name"
            fullWidth
            variant="standard"
            value={editTaskName}
            onChange={(e) => {
              setEditTaskName(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Details"
            fullWidth
            variant="standard"
            value={editTaskDetails}
            onChange={(e) => {
              setEditTaskDetails(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseEditDialog}>
            Cancel
          </Button>
          <Button onClick={handleSaveEditing}>SAVE</Button>
        </DialogActions>
      </Dialog>
      {/* ===============  EDITING DIALOG  =================  */}

      {/* <div className="titles" style={{ backgroundColor: "primary" }}>
        <h3> {task.title}</h3>
        <p> {task.details}</p>
      </div> */}

      <Box
        className="titles"
        sx={{
          color: "primary.main",
        }}
      >
        <h3>{task.title}</h3>
        <p>{task.details}</p>
      </Box>

      <div className="icons">
        <button className="iconButton" onClick={handleOpenDeleteDialog}>
          <DeleteOutlinedIcon sx={{ fontSize: 25, color: "#e62b4de7" }}>
            {" "}
          </DeleteOutlinedIcon>
        </button>
        <button className="iconButton" onClick={handleOpenEditDialog}>
          <ModeEditOutlineOutlinedIcon
            sx={{ fontSize: 25, color: "#616161" }}
          ></ModeEditOutlineOutlinedIcon>
        </button>
        <button
          onClick={hCheckButton}
          className="iconButton"
          style={{
            backgroundColor: task.isCompleted ? "#34b51a" : "white",
            color: task.isCompleted ? "white" : "#34b51a",
          }}
        >
          <CheckOutlinedIcon sx={{ fontSize: 25 }}></CheckOutlinedIcon>
        </button>
      </div>
    </Box>
  );
}
