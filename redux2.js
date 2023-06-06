import { useEffect, useReducer } from "React";

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

function useFetch(url) {
	let shouldCancel = false;

	const [state, dispatch] = useReducer(reducer, {
		responseJSON: null,
		isLoading: true,
		error: null,
	});

	useEffect(() => {
		const callFetch = async () => {
			dispatch({ type: "loading" });
			const response = await fetch(url);
			const newResponseJSON = response.json();
			if (shouldCancel) return;
			dispatch({ type: "success", responseJSON: newResponseJSON });
		};
		callFetch();
		return () => {
			shouldCancel = true;
		};
	}, [url]);
	return state;
}
