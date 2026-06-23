
import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }
    return (
        <div className="container">
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement} id="btn1">Increment</button>
            <button onClick={handleDecrement} id="btn2">Decrement</button>
        </div>
    )
}

export default Counter;