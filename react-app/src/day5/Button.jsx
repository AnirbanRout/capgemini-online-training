
import React, { useState } from "react";

const Button = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div className="container">
            <h1>Likes: {count}</h1>
            <button onClick={handleClick} id="btn1">Like</button>
        </div>
    )

}

export default Button;  