import React, { useState } from "react";

const CustomHook = () => {
  const [mode, setMode] = useState("light");

  const handleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return { mode, handleMode };
};

export default CustomHook;
