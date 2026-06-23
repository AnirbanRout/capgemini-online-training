import { useState, useCallback, use } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);

  //   const handleClick = () => {
  //     console.log("Button clicked");
  //   };

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}
