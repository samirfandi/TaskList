import { createContext, useReducer } from "react";
import tasksReducer from "../reducers/tasksReducer";

export const TasksContext = createContext([]);

const TasksProvider = ({ children }) => {
  const [tasks1, dispatch1] = useReducer(tasksReducer, []);
  console.log("tasksssPovider1111 =", tasks1);
  return (
    <TasksContext.Provider value={{ tasks1: tasks1, dispatch1: dispatch1 }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
