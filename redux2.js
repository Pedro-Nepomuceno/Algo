import { useReducer } from "React";

function useFetch() {
	const [state, dispatch] = useReducer(reducer, {
		responseJSON: null,
		isLoading: true,
		error: null,
	});
}
