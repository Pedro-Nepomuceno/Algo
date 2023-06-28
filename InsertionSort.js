// Loop through the input array from the beginning to the end.
// For each element in the array, find the index of the minimum value that is at or after the current index.
// If the index of the minimum value is not the same as the current index, swap the values at the current index and the index of the minimum value.
// Repeat steps 2 and 3 for each subsequent element in the array.
// After all elements have been processed, return the sorted array.
function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			let temp = arr[i];

			arr[i] = arr[minIndex];
			console.log((arr[i] = arr[minIndex]));
			arr[minIndex] = temp;
		}
	}
	return arr;
}

function selection(arr) {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (let j = i + 1; j < arr.length; j++) {}
	}
}
