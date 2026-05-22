import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Header.css";

export default function Header({ inProgressTasks, allTasks }) {
  const inprogressTasks = function () {
    alert("In progress");
    inProgressTasks();
  };

  const alltasks = function () {
    alert("all tasks");
    allTasks();
  };
  return (
    <div>
      <h1 id="title"> My Tasks </h1>
      <Stack id="buttons" direction="row" spacing={1}>
        <Button
          id="button"
          size="small"
          // color="secondary"
          variant="outlined"
          onClick={alltasks}
        >
          tasks
        </Button>
        <Button
          id="button"
          variant="outlined"
          // color="error"
          onClick={inprogressTasks}
        >
          In Progress
        </Button>
        <Button id="button" variant="outlined">
          DONE
        </Button>
      </Stack>
    </div>
  );
}
