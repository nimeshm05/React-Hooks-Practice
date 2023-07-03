import React, { useState } from "react";

function StatePractice() {
    const [number, setNumber] = useState(0);
    const [showText, setShowText] = useState(true);
    const [textSize, setTextSize] = useState("16px");

    const increment = () => {
        setNumber((number) => number + 1);
        setShowText(false);
    };

    const decrement = () => {
        if (number < 0 || number === 0) {
            setShowText(true);
            return;
        } else if (number === 1) {
            setShowText(true);
            setNumber((number) => number - 1);
        } else {
            setNumber((number) => number - 1);
        }
    };

    const multiply = (multiplier) => {
        setNumber((number) => number * multiplier);
        setShowText(false);
    };

    const zero = () => {
        setNumber(0);
        setShowText(true);
    };

    const increase = () => {
        const number = textSize.slice(0, 2);
        const increasedNumber = parseInt(number) + 2;
        const reJoinText = increasedNumber + "px";
        setTextSize(reJoinText);
    };

    const decrease = () => {
        const number = textSize.slice(0, 2);
        const decreasedNumber = parseInt(number) - 2;
        const reJoinText = decreasedNumber + "px";
        setTextSize(reJoinText);
    };

    return (
        <div>
            <h1>Use Case 1:</h1>
            <h2>Number: {number}</h2>
            {showText && <p>You can not decrement below 0!</p>}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => multiply(2)}>Multiply</button>
            <button onClick={zero}>Set to zero</button>
            <h1>Use Case 2:</h1>
            <p style={{ fontSize: `${textSize}` }}>TextSize</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}

export default StatePractice;
