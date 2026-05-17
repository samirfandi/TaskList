import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <h1 id="title"> My Tasks </h1>
      <Stack id="buttons" direction="row" spacing={1}>
        <Button color="secondary" variant="contained">
          tasks
        </Button>
        <Button variant="contained" color="error">
          In Progress
        </Button>
        <Button variant="contained" color="success">
          DONE
        </Button>
      </Stack>
    </div>
  );
}
