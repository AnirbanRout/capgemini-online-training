import { useMemo, useState } from "react";

const CompUseMemo = () => {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("Calculating result...");
    return 10 + 20;
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>result: {result}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CompUseMemo;
