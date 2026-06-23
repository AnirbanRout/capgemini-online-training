import React, { useState } from "react";

const Toggle = ({ state, toggleTheme }) => {
  return (
    <div
      className="toggle-container"
      style={
        state === "light"
          ? { backgroundColor: "white", color: "black" }
          : { backgroundColor: "black", color: "white" }
      }
    >
      <h2>current theme:{state}</h2>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

export default Toggle;
