import { useState, useEffect } from "react";

const useSizeHook = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [color, setColor] = useState("");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { size, color, handleColorChange };
};

export default useSizeHook;
