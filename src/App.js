import AddTask from "./AddTask";
import "./App.css";
import Header from "./Header";
import Task from "./Task";

function App() {
  return (
    <div className="App">
      <div className="all">
        <Header />
        <div>
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
        <AddTask />
      </div>
    </div>
  );
}

export default App;
