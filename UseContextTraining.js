import React, { createContext } from "React";

function Login({ setUserName }) {
	return (
		<>
			<input
				onChange={(event) => {
					setUserName(event.target.value);
				}}
			/>
		</>
	);
}
