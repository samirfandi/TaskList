// style
import "./style/App.css";

// components
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import Header from "./components/Header.js";
import MySnackbar from "./components/MySnackbar.js";

// react hooks
import * as React from "react";
import { useState, useEffect, useReducer, useContext } from "react";

// contexts
import { TasksContext } from "./contexts/TasksContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import TasksProvider from "./contexts/TasksContext";
import tasksReducer from "./reducers/tasksReducer.js";

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
      main: "#1a237e",
    },
    secondary: {
      main: "#004d40",
    },
    background: {
      main: "#212121",
    },
  },
});

function App() {
  // states
  // const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  const [selectedTasks, SetSelectedTasks] = useState("allTasks");
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  // const context = useContext(TasksContext);
  // console.log("context ====", context);
  // console.log("tasks1 ====", context.tasks1);

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
  function handleCreateTask() {
    dispatch({ type: "add", payload: { taskName: taskName } });
    setTaskName("");
  }

  /////////////////////////
  useEffect(() => {
    dispatch({ type: "getTasks" });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <TasksProvider>
        <TasksContext.Provider value={{ tasks, dispatch }}>
          <Box className="App" sx={{ backgroundColor: "background.main" }}>
            <Container maxWidth="sm" className="all">
              <Header SetSelectedTasks={SetSelectedTasks} />
              <SnackbarProvider>
                <div>
                  {displayTasks.map((t) => (
                    <Task key={t.id} task={t} />
                  ))}
                </div>
              </SnackbarProvider>

              <AddTask
                handleCreateTask={handleCreateTask}
                setTaskName={setTaskName}
                taskName={taskName}
              />
            </Container>
          </Box>
        </TasksContext.Provider>
      </TasksProvider>
    </ThemeProvider>
  );
}

export default App;
