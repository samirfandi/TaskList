import "./Task.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

export default function Task({
  title,
  details,
  id,
  handleCheckButton,
  handleDeleteButton,
  isCompleted,
}) {
  // function used to add a task to doing task list
  const hCheckButton = function () {
    handleCheckButton(id);
  };

  // function used to delete a task from the list
  const hDeleteButton = function () {
    handleDeleteButton(id);
  };

  return (
    <div className="Task">
      <div className="titles">
        <h3> {title}</h3>
        <p> {details}</p>
      </div>

      <div className="icons">
        <button className="iconButton" onClick={hDeleteButton}>
          <DeleteOutlinedIcon color="secondary" sx={{ fontSize: 25 }}>
            {" "}
          </DeleteOutlinedIcon>
        </button>
        <button className="iconButton">
          <ModeEditOutlineOutlinedIcon
            sx={{ fontSize: 25 }}
            color="primary"
          ></ModeEditOutlineOutlinedIcon>
        </button>
        <button
          onClick={hCheckButton}
          className="iconButton"
          style={{
            backgroundColor: isCompleted ? "green" : "red",
            color: "white",
          }}
        >
          <CheckOutlinedIcon sx={{ fontSize: 25 }}></CheckOutlinedIcon>
        </button>
      </div>
    </div>
  );
}
