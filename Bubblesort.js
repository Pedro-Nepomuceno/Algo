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

// not optimum version

function bubble(array) {
	for (let i = 0; i <= array.length; i++) {
		for (let j = 0; j <= array.length; j++) {
			if (array[j] > array[j + 1]) {
				let tempVal = array[j];
				array[j] = array[j + 1];
				array[j + 1] = tempVal;
			}
		}
	}
	return array;
}

// to be continue
function bubbleSort(array) {
	for (let i = array.length; i > 0; i--) {
		for (let j = 0; j < i - 1; i++) {
			if (array[j] > array[j + 1]) {
				let tempVal = array[j];
				array[j] = array[j + 1];
				array[j + 1] = tempVal;
			}
		}
	}
	return array;
}

//ES15 syntax solution

function bubbleSort2(arr) {
	const swap = (arr, Idx1, Idx2) => {
		[arr[Idx1], arr[Idx2]] = [arr[Idx2], arr[Idx1]];
	};
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; i++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
	return arr;
}
