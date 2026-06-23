import { useRef } from "react";

const UncontrolledComp = () => {
  const inputRef = useRef();

  const handleChange = () => {
    const color = inputRef.current.value;
    const box = document.getElementById("box");
    box.style.backgroundColor = color;
  };

  return (
    <div>
      <h2>Uncontrolled Component</h2>
      <input type="text" placeholder="enter color" ref={inputRef} />
      <button onClick={handleChange}>Change Color</button>
      <br />
      <input type="text" id="box" />
    </div>
  );
};

export default UncontrolledComp;
