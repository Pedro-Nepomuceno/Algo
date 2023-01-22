// implement a function which accepts a sorted array
// and counts the unique values in the array
// there can be negative n# in the array but it will always be sorted

function countUniqueValues(arr) {
	let arrCount = 0;

	for (let i = 0; i < arr.length; i++) {
		let second = i + 1;
		if (arr[i] !== arr[second]) {
			arrCount++;
		}
	}
	return arrCount;
}
