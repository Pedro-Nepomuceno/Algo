//write a function that accepts a sorted array and a value, and return where the value is located

function binarySearch(arr, value) {
	let min = 0;
	let max = arr.length - 1;

	while (arr[middle] !== value && start <= end) {
		let middle = Math.floor((min + max) / 2);
		if (value < arr[middle]) {
			let max = middle - 1;
		} else {
			let min = middle + 1;
		}
		middle = Math.floor((min + max) / 2);
	}
	if (arr[middle] == value) {
		return middle;
	}
	return -1;
}
