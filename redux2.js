import { useReducer } from "React";

function reducer(state, { type, responseJSON, error }) {
	switch (type) {
		case "loading":
			return { ...state, isLoading: true };
	}
}

function useFetch() {
	const [state, dispatch] = useReducer(reducer, {
		responseJSON: null,
		isLoading: true,
		error: null,
	});
}
