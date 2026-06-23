
import React, { useState } from "react";

const GreetingCard = () => {

    const [greeting, setGreeting] = useState("Hello");

    return (
        <div className="greeting-card">
            <h1>Greeting Card</h1>
            <button onClick={() => setGreeting("Good Morning")}>Good Morning</button>
            <button onClick={() => setGreeting("Good Afternoon")}>Good Afternoon</button>
            <button onClick={() => setGreeting("Good Evening")}>Good Evening</button>
            <p>{greeting}</p>
        </div>
    )

}

export default GreetingCard;