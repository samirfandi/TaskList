import "./AddTask.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function AddTask() {
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
        />
      </Grid>
      <Grid item xs={3}>
        <button className="addButton"> Create Task</button>
      </Grid>
    </Grid>
  );
}
