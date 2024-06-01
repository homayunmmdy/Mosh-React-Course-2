import { useReducer } from "react";
import "./App.css";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import tasksReducers from "./state-management/reducers/tasksReducers";
import TasksContext from "./state-management/contexts/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import AuthReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";
import AuthProvider from "./state-management/AuthProvider";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducers, []);

  return (
    <>
      <AuthProvider>
        <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
