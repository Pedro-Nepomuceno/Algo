import React from "react";

export default function TipCalculator() {
	const [bill, setBill] = useState(50);
	const [tip, setTip] = useState(9);
	const [people, setNumberPeople] = useState(1);

	const handleChange = (e) => {
		setBill(parseInt(e.target.value));
	};
	const handleChangeTip = (e) => {
		setTip(parseInt(e.target.value));
	};
	const handleChangePeople = (e) => {
		setNumberPeople(e.target.value);
	};

	return (
		<>
			<label htmlFor="bill">Bill</label>
			<input
				id="bill"
				type="number"
				min="0"
				value={bill}
				onChange={handleChange}
			/>
			<label htmlFor="tipPercentage">Tip Percentage</label>
			<input
				id="tipPercentage"
				value={tip}
				type="number"
				onChange={handleChangeTip}
			/>
			<label htmlFor="people">Number of People</label>
			<input
				id="people"
				value={bill}
				type="number"
				onChange={handleChangePeople}
			/>
			<p>Total tip {}</p>
			<p>Tip Per Person: {}</p>
		</>
	);
}
