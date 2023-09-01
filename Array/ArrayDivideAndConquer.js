// given an ordered array and a value, find where the value is located in the array
// or return -1

function search(array, value) {
	let min = 0;
	let max = array.length - 1;

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		if (array[middle] < value) {
			min = middle + 1;
		} else if (array[middle] > value) {
			max = middle - 1;
		} else {
			return middle;
		}

		return -1;
	}
}
