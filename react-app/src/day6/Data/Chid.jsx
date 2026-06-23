import React, { useState } from "react";

const Child = ({ func }) => {
  const [childData, setChildData] = useState("data from child...");

  const handleClick = () => {
    func(childData);
  };

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
};

export default Child;
