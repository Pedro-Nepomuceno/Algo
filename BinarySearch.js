//write a function that accepts a sorted array and a value, and return where the value is located

function binarySearch(arr, value) {
	let min = 0;
	let max = arr.length - 1;

	while (min < max) {
		let middle = Math.floor(min + max / 2);
		if (value > middle) {
			let min = middle;
		} else if (value < middle) {
			let max = middle;
		}
		return middle;
	}
	return -1;
}
