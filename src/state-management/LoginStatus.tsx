import { useReducer } from "react";
import AuthReducer from "./reducers/authReducer";

const LoginStatus = () => {
  const [user, dispatch] = useReducer(AuthReducer, "");

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({ type: "LOGIN", username: "homayoun" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
