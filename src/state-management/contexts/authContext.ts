import React, { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/tasksReducers";
import { AuthAction } from "../reducers/authReducer";

//Type of the object we want to share
interface AuthContentType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContentType>(
  {} as AuthContentType
);

export default AuthContext;