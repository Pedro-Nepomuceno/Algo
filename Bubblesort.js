// define a function that accepts an array, return the array sorted.

function bubbleSort(array) {
	for (let i = array.length - 1; i <= 0; i--) {
		for (let j = 0; j <= array.length; j++) {
			if (array[i] > array[j]) {
				array[j];
			}
		}
	}
}
