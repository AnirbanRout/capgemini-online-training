
import React, { useState } from "react";

const CheckBox = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = (e) => {
        setIsChecked(e.target.checked);
    }

    return (
        <div className="checkbox">
            <h1>Check Box</h1>
            <label htmlFor="checkbox">Complete React Practice:</label>
            <input type="checkbox" name="checkbox" id="checkbox" checked={isChecked} onChange={handleCheck} />
            <p>{isChecked ? "Task Completed" : "Task not completed"}</p>
        </div>
    )

}

export default CheckBox;