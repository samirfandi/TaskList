import "./AddTask.css";

export default function AddTask() {
  return (
    <div className="addTask">
      <input placeholder="Enter Task's name" />
      <button className="addButton"> Create Task</button>
    </div>
  );
}
