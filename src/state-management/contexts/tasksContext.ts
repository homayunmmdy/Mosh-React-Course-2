import React, { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/tasksReducers";

interface TaskContentType{
    tasks: Task[];
    dispatch : Dispatch<TaskAction>
}

const TasksContext = React.createContext<TaskContentType>({} as TaskContentType)

export default TasksContext;