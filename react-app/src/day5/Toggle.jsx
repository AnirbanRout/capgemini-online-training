
import React, { useState } from "react";

const Toggle = () => {
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => {
        setIsOn(!isOn);
    }
    return (
        <div className="container">
            <h1>{isOn ? "Hide" : "Show"}</h1>
            <button onClick={handleToggle} id="btn1">Toggle</button>
            {isOn && <p>The toggle is ON</p>}
        </div>
    )
}

export default Toggle;