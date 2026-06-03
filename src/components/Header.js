import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../style/Header.css";
import { TasksContext } from "../contexts/TasksContext";
import { useContext } from "react";

export default function Header() {
  const value = useContext(TasksContext);
  const selectedTasks = value.selectedTasks;
  const SetSelectedTasks = value.SetSelectedTasks;

  return (
    <div>
      <h1 id="title"> My Tasks </h1>
      <hr />
      <Stack id="buttons" direction="row" spacing={1} sx={{ color: "primary" }}>
        <Button
          // id="button"
          size="small"
          variant="outlined"
          value="allTasks"
          onClick={() => {
            SetSelectedTasks("allTasks");
          }}
        >
          All
        </Button>
        <Button
          // id="button"
          variant="outlined"
          value="inProgressTasks"
          onClick={() => {
            SetSelectedTasks("inProgressTasks");
          }}
        >
          In Progress
        </Button>
        <Button
          // id="button"
          variant="outlined"
          value="doneTasks"
          onClick={() => {
            SetSelectedTasks("doneTasks");
          }}
        >
          DONE
        </Button>
      </Stack>
    </div>
  );
}
