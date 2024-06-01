import { ReactNode, useReducer } from "react";
import TasksContext from "./contexts/tasksContext";
import tasksReducers from "./reducers/tasksReducers";

interface Props {
  children: ReactNode;
}
const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducers, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TaskProvider;
