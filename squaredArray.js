function sortedSquaredArray(array) {
	const squaredArray = array.map((num) => num * num);
	return squaredArray.sort((a, b) => a - b);
}

// trying optimun solution

function sortedSquaredArray(array) {
	const newArray = new Array(array.length).fill(0);
	let leftPointer = 0;
	let rightPointer = array.lenght - 1;
	let index = array.length - 1;
	while (leftPointer <= rightPointer) {
		let leftVal = Math.pow(array[leftPointer], 2);
		let rightVal = Math.pow(array[rightPointer], 2);
		if (leftVal < rightVal) {
			newArray[index] = rightVal;
			rightPointer--;
		} else {
			newArray[index] = leftVal;
			leftPointer++;
		}
		index--;
	}
	return newArray;
}
