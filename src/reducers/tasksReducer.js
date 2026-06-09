// other
import { v4 as uuidv4 } from "uuid";

export default function reducer(currentTasks, action) {
  switch (action.type) {
    case "add": {
      const newTasks = [
        ...currentTasks,
        {
          id: uuidv4(),
          title: action.payload.taskName,
          details: "",
          isCompleted: false,
        },
      ];
      localStorage.setItem("tasks", JSON.stringify(newTasks));

      return newTasks;
    }

    case "checkButton": {
      const newTasks = currentTasks.map((t) => {
        if (t.id === action.payload.id) {
          // return { ...t, isCompleted: !t.isCompleted };
          const updatedTask = {
            ...t,
            isCompleted: !t.isCompleted,
          };
          return updatedTask;
        } else {
          return t;
        }
      });

      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    }

    case "deletButton": {
      const newTasks = currentTasks.filter((t) => t.id != action.payload.id);

      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    }

    case "editButton": {
      const newTasks = currentTasks.map((t) => {
        if (t.id == action.payload.task.id) {
          return {
            ...t,
            title: action.payload.editTaskName,
            details: action.payload.editTaskDetails,
          };
        } else {
          return t;
        }
      });

      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    }

    case "getTasks": {
      const storageTasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
      return storageTasks;
    }
    default: {
      throw Error("Unknow action " + action.type);
    }
  }
}
