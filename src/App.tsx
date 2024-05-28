import { useReducer } from "react";
import "./App.css";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import tasksReducers from "./state-management/reducers/tasksReducers";
import TasksContext from "./state-management/contexts/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducers, []);

  return (
    <>
      <TasksContext.Provider value={{tasks , dispatch}}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </>
  );
}

export default App;
