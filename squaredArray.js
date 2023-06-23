function sortedSquaredArray(array) {
	const squaredArray = array.map((num) => num * num);
	return squaredArray.sort((a, b) => a - b);
}

// trying optimun solution

function sortedSquaredArray(array) {
	const newArray = new Array(array.length).fill(0);
	let leftPointer = 0;
	let rightPointer = array.lenght - 1;
	for (let i = 0; i <= array.length; i++) {
		if (array[i] > array[rightPointer]) {
		} else {
		}
	}
}
