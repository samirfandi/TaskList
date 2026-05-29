import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import "./App.css";
import Header from "./Header";
import Task from "./Task";
import Container from "@mui/material/Container";
import { v4 as uuidv4 } from "uuid";
import { TasksContext } from "./contexts/TasksContext";
import { SnackbarContext } from "./contexts/SnackbarContext";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, SetSelectedTasks] = useState("allTasks");
  const [snackbarDelete, setSnackbarDelete] = useState(false);
  const [snackbarEdit, setSnackbarEdit] = useState(false);
  const [snackbarCompleted, setSnackbarCompleted] = useState(false);

  const handleDelete = () => {
    setSnackbarDelete(true);
    setTimeout(() => {
      setSnackbarDelete(false);
    }, 5000);
  };

  const handleCompleted = () => {
    setSnackbarCompleted(true);
    setTimeout(() => {
      setSnackbarCompleted(false);
    }, 5000);
  };

  const handleEdit = () => {
    setSnackbarEdit(true);
    setTimeout(() => {
      setSnackbarEdit(false);
    }, 5000);
  };

  // completed tasks
  function completedTasks() {
    const cTasks = tasks.filter((t) => {
      return t.isCompleted;
    });
    return cTasks;
  }

  // non completed tasks
  function nonCompletedTasks() {
    const nTasks = tasks.filter((t) => !t.isCompleted);
    return nTasks;
  }

  let displayTasks;
  if (selectedTasks == "inProgressTasks") {
    displayTasks = nonCompletedTasks();
  } else if (selectedTasks == "doneTasks") {
    displayTasks = completedTasks();
  } else if (selectedTasks == "allTasks") {
    displayTasks = tasks;
  }
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
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  /////////////////////////
  useEffect(() => {
    const storageTasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
    setTasks(storageTasks);
  }, []);

  return (
    <div className="App">
      {/* -------- snackbar Delete -------- */}
      <Snackbar open={snackbarDelete} autoHideDuration={6000}>
        <Alert
          //onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Task deleted successfully
        </Alert>
      </Snackbar>
      {/* -------- snackbar -------- */}

      {/* -------- snackbar Completed -------- */}
      <Snackbar open={snackbarCompleted} autoHideDuration={6000}>
        <Alert
          //onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Task Completed !
        </Alert>
      </Snackbar>
      {/* -------- snackbar -------- */}

      {/* -------- snackbar Edit -------- */}
      <Snackbar open={snackbarEdit} autoHideDuration={6000}>
        <Alert
          //onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Task edited successfully
        </Alert>
      </Snackbar>
      {/* -------- snackbar -------- */}

      <TasksContext.Provider
        value={{ tasks, setTasks, selectedTasks, SetSelectedTasks }}
      >
        <Container maxWidth="sm" className="all">
          <Header completedTasks={completedTasks} />
          <SnackbarContext.Provider
            value={{ handleDelete, handleEdit, handleCompleted }}
          >
            <div>
              {displayTasks.map((t) => (
                <Task key={t.id} task={t} />
              ))}
            </div>
          </SnackbarContext.Provider>

          <AddTask handleCreateTask={handleCreateTask} />
        </Container>
      </TasksContext.Provider>
    </div>
  );
}

export default App;
