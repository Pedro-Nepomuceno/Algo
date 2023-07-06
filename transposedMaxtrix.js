input = [
	[2, 4, 6],
	[1, 2, 5],
	[1, 4, 6],
];

//expected output
output = [
	[2, 1, 1],
	[4, 2, 4],
	[6, 5, 6],
];

function transposedMatrix(array) {
	let result = [];

	for (let i = 0; i < array[0].length; i++) {
		let newRow = [];
		for (let j = 0; j < array.length; j++) {
			newRow.push(array[j][i]);
		}
		result.push(newRow);
	}
	return result;
}

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
