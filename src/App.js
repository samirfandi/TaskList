import AddTask from "./AddTask";
import "./App.css";
import Header from "./Header";
import Task from "./Task";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm" className="all">
        <Header />
        <div>
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
        <AddTask />
      </Container>
    </div>
  );
}

export default App;
