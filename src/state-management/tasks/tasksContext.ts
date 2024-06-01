import React, { Dispatch } from "react";
import { Task, TaskAction } from "./TaskProvider";

interface TaskContentType{
    tasks: Task[];
    dispatch : Dispatch<TaskAction>
}

const TasksContext = React.createContext<TaskContentType>({} as TaskContentType)

export default TasksContext;