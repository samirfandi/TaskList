import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <h1 id="title"> My Tasks </h1>
      <Stack id="buttons" direction="row" spacing={1}>
        <Button id="button " color="secondary" variant="contained">
          tasks
        </Button>
        <Button id="button" variant="contained" color="error">
          In Progress
        </Button>
        <Button id="button" variant="contained" color="success">
          DONE
        </Button>
      </Stack>
    </div>
  );
}
