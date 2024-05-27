import React from "react";
interface LoginAction {
  type: "LOGIN" ;
  username: string;
}

interface LogoutAction {
  type: "LOGOUT" ;
}

type AuthAction = LoginAction | LogoutAction;

const AuthReducer = (user: string, action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.username
    case "LOGOUT":
      return user = "";
  }
};


export default AuthReducer;
