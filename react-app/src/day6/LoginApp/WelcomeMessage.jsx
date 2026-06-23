import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const WelcomeMessage = () => {
  const { isLoggedIn, name } = useContext(UserContext);

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome, {name}!</h2>
      ) : (
        <h2>Welcome, Guest! Please log in.</h2>
      )}
    </div>
  );
};

export default WelcomeMessage;
