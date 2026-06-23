import React, { useContext } from "react";
import { themeContext } from "./themeContext";

const ToggleComp = () => {
  const { state, toggleTheme } = useContext(themeContext);

  return (
    <div
      className="toggle-container"
      style={
        state === "light"
          ? { backgroundColor: "white", color: "black" }
          : { backgroundColor: "black", color: "white" }
      }
    >
      <h1>Toggle Component</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ToggleComp;
