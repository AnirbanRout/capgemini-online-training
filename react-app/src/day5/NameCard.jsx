
import React, { useState } from "react";

const NameCard = () => {

    const [name, setName] = useState("Guest");

    return (
        <div className="name-card">
            <h1>Name Card</h1>
            <label htmlFor="name">enter name:</label>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <p>Hello, {name}</p>
        </div>
    )

}

export default NameCard;