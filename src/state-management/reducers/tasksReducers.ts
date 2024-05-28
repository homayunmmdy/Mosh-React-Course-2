import React from "react";

export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "Delete";
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const tasksReducers = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "Delete":
        return tasks.filter(t => t.id !== action.taskId)
  }
};

export default tasksReducers;
