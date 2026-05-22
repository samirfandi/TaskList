import { useState } from "react";
import AddTask from "./AddTask";
import "./App.css";
import Header from "./Header";
import Task from "./Task";
import Container from "@mui/material/Container";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);

  // function used to add new task
  function handleCreateTask(task) {
    const newTasks = [
      ...tasks,
      {
        id: task.id,
        title: task.title,
        details: task.details,
        isCompleted: false,
      },
    ];
    setTasks(newTasks);
  }

  // Function used to add a task to the "Doing" tasks list
  function hCheckButton(id) {
    const newTasks = tasks.map((t) => {
      if (t.id === id) {
        return { ...t, isCompleted: !t.isCompleted };
      } else {
        return t;
      }
    });

    setTasks(newTasks);
  }

  // Function to delete a task from the list
  function hDeleteButton(id) {
    const newTasks = tasks.filter((t) => t.id != id);
    setTasks(newTasks);
  }

  function inprogressTasks() {
    const newTasks = tasks.filter((t) => t.isCompleted == false);
    setTasks(newTasks);
  }

  function alltasks() {
    const newTasks = tasks.map((t) => t);
    setTasks(newTasks);
  }
  return (
    <div className="App">
      <Container maxWidth="sm" className="all">
        <Header inProgressTasks={inprogressTasks} allTasks={alltasks} />
        <div>
          {tasks.map((t) => (
            <Task
              key={t.id}
              title={t.title}
              details={t.details}
              handleCheckButton={hCheckButton}
              handleDeleteButton={hDeleteButton}
              id={t.id}
              isCompleted={t.isCompleted}
            />
          ))}
        </div>

        <AddTask handleCreateTask={handleCreateTask} />
      </Container>
    </div>
  );
}

export default App;
