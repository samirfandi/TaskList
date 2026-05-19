import "./Task.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

export default function Task() {
  return (
    <div className="Task">
      <div className="titles">
        <h3> Title</h3>
        <p> SubTitle</p>
      </div>

      <div className="icons">
        <button className="iconButton">
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
        <button className="iconButton">
          <CheckOutlinedIcon sx={{ fontSize: 25 }} color=""></CheckOutlinedIcon>
        </button>
      </div>
    </div>
  );
}
