import React from "react";
import useInput from "../hooks/useInput";

function displayMessage(inputValue) {
    alert(inputValue);
};

function Input(props) {
    const [inputValue, handleChange, submitAction] = useInput("", displayMessage);

    return (
        <div>
            <h1>Input</h1>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <button onClick={submitAction}>제출</button>
        </div>
    );
}

export default Input;