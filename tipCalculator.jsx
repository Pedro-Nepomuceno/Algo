import React from "react";

export default function TipCalculator() {
	const [bill, setBill] = useState("50");
	const [tip, setTip] = useState("9");
	const [people, setNumberPeople] = useState("1");

	const handleChange = (e) => {
		setBill(e.target.value);
	};

	return (
		<>
			<input value={bill} onChange={handleChange}>
				{bill}
			</input>
			<input value={tip} onChange={handleChangeTip}>
				{bill}
			</input>
			<input value={bill} onChange={handleChangePeople}>
				{bill}
			</input>
		</>
	);
}
