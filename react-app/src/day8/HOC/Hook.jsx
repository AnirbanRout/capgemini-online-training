import { useState } from "react";

const Hook = () => {
  const [state, setState] = useState(true);

  const handleClick = () => {
    setState((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={handleClick}>{state ? "yes" : "no"}</button>
      <p>{state ? "ON" : "OFF"}</p>
    </>
  );
};

export default Hook;
