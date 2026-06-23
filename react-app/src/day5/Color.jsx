
import React, { useState } from "react";

const Color = () => {
    const [color, setColor] = useState("red");
    const handleChangeColor = () => {
        setColor(color === "red" ? "blue" : "red");
    }
    return (
        <div className="container">
            <div className="box" style={{ backgroundColor: color }}></div>
            <button onClick={() => setColor("red")} id="red-btn">Red</button>
            <button onClick={() => setColor("green")} id="green-btn">Green</button>
            <button onClick={() => setColor("blue")} id="blue-btn">Blue</button>
        </div>
    )
}

export default Color;