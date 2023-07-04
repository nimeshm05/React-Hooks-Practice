import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "changeName":
            return { name: action.newName, age: state.age };

        case "changeAge":
            return { name: state.name, age: state.age + 1 };

        default:
            return state;
    }
};

function ReducerPractice() {
    const [state, dispatch] = useReducer(reducer, { name: "Nimesh", age: 23 });

    const handleNameChange = (e) => {
        dispatch({
            type: "changeName",
            newName: e.target.value,
        });
    };

    const handleAgeChange = () => {
        dispatch({
            type: "changeAge",
        });
    };

    return (
        <div>
            <h1>Reducer Hook:</h1>
            <label htmlFor="name">Enter name</label>
            <input type="text" id="name" onChange={handleNameChange} value={state.name} />
            <button onClick={handleAgeChange}>Increment</button>
            <div>
                <p>
                    Hello, {state.name}, You are {state.age} years old!
                </p>
            </div>
        </div>
    );
}

export default ReducerPractice;
