import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginStatus = () => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div>{isLoggedIn ? <p>Status:Logged In</p> : <p>Status:Logged Out</p>}</div>
  );
};

export default LoginStatus;
