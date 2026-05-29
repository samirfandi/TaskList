import "./AddTask.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Details } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";

export default function AddTask({ handleCreateTask }) {
  const handleCreateButton = function () {
    const task = {
      id: uuidv4(),
      title: taskName,
      details: "",
      isCompleted: false,
    };

    handleCreateTask(task);

    setTaskName("");
  };

  const [taskName, setTaskName] = useState("");
  return (
    <Grid
      container
      className="addTask"
      spacing={1}
      direction="row"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={9}>
        <TextField
          id="outlined-basic"
          label="Enter Task's name"
          variant="outlined"
          size="small"
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
          value={taskName}
        />
      </Grid>
      <Grid item xs={3}>
        <button
          className={taskName.length == 0 ? "addButtonDis" : "addButtonAb"}
          onClick={() => {
            handleCreateButton();
          }}
          disabled={taskName.length == 0 }
        >
          {" "}
          Create Task
        </button>
      </Grid>
    </Grid>
  );
}
