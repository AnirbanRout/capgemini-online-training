
import React, { useState } from "react";

const FontSize = () => {

    const [size, setSize] = useState(16);

    return (
        <div className="font-size">
            <h1>Font Size</h1>
            <label htmlFor="size">Font Size:</label>
            <button onClick={() => setSize(size - 1)} id="btn1">Decrease</button>
            <button onClick={() => setSize(size + 1)} id="btn2">Increase</button>
            <p style={{ fontSize: `${size}px` }}>This text is {size}px</p>
        </div>
    )

}

export default FontSize;