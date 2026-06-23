
import React, { useState } from "react";

const Text = () => {
    const [text, setText] = useState('');

    const handleChangeText = (e) => {
        setText(e.target.value);
    }

    return (
        <div className="container">
            <h2>Text Input</h2>
            <label htmlFor="txt">enter text:</label>
            <input type="text" name="" id="txt" value={text} onChange={(e) => handleChangeText(e)} />
            <p>Typed Text:{text === '' ? 'No text entered' : text}</p>
        </div>
    )
}

export default Text;