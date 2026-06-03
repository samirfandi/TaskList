// style
import "./style/App.css";

// components
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import Header from "./components/Header.js";
import MySnackbar from "./components/MySnackbar.js";

// react hooks
import * as React from "react";
import { useState, useEffect } from "react";

// contexts
import { TasksContext } from "./contexts/TasksContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";

// material UI
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

// other
import { v4 as uuidv4 } from "uuid";

// Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#0d47a1",
    },
    secondary: {
      main: "#b2dfdb",
    },
    background: {
      main: "#c62828",
    },
  },
});

function App() {
  // states
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, SetSelectedTasks] = useState("allTasks");

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
    <ThemeProvider theme={theme}>
      <Box className="App" sx={{ backgroundColor: "background.main" }}>
        <TasksContext.Provider
          value={{ tasks, setTasks, selectedTasks, SetSelectedTasks }}
        >
          <Container maxWidth="sm" className="all">
            <Header completedTasks={completedTasks} />
            <SnackbarProvider>
              <div>
                {displayTasks.map((t) => (
                  <Task key={t.id} task={t} />
                ))}
              </div>
            </SnackbarProvider>

            <AddTask handleCreateTask={handleCreateTask} />
          </Container>
        </TasksContext.Provider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
