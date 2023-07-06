input = [
	[2, 4, 6],
	[1, 2, 5],
	[1, 4, 6],
];

//expected output

function transposeMatrix(matrix) {
	let result = [];
	for (let i = 0; i < matrix[0].length; i++) {
		let newRow = [];
		for (let j = 0; j < matrix.length; j++) {
			newRow.push(matrix[j][i]);
		}
		result.push(newRow);
	}

	return result;
}
