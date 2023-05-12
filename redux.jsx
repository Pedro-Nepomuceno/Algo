import React, { useReducer } from "react";

//In this example, useReducer is used to manage the state of a counter

// Reducer function
const reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + 1 };
		case "DECREMENT":
			return { count: state.count - 1 };
		default:
			return state;
	}
};
// Component using useReducer
const Counter = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	const increment = () => {
		dispatch({ type: "INCREMENT" });
	};

	const decrement = () => {
		dispatch({ type: "DECREMENT" });
	};
	return (
		<div>
			<p>Count: {state.count}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
};
