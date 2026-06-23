import { useState } from "react";

const Greetings = ({ username }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const [checked, setChecked] = useState(false);
  const [btnText, setBtnText] = useState("Click me!");

  return (
    <div>
      {/* <h1>Hello, World!</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <p>Count: {count}</p>
      <hr />
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>name: {name}</p>
      <hr />
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <p>checked: {checked.toString()}</p>
      <hr /> */}
      <button onClick={() => setBtnText("Button clicked!")}>{btnText}</button>
      <hr />
      <p>Username: {username}</p>
    </div>
  );
};

export default Greetings;
