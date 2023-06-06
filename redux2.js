import { useReducer } from "React";

function reducer(state, { type, responseJSON, error }) {
	switch (type) {
		case "loading":
			return { ...state, isLoading: true };
		case "success":
			return { responseJSON, isLoading: false, error: null };
		case "error":
			return { responseJSON: null, isLoading: false, error };
		default:
			throw new Error("unknow type");
	}
}

function useFetch() {
	const [state, dispatch] = useReducer(reducer, {
		responseJSON: null,
		isLoading: true,
		error: null,
	});
}
