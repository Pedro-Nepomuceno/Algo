import React, { createContext } from "React";

function Login({ setUserName }) {
	const AppProvider = createContext();
	return (
		<AppProvider.Provider>
			<Logi />
		</AppProvider.Provider>
	);
}
