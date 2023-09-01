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

//By using tempVal as an intermediary variable during the swapping process, we ensure that the elements are correctly swapped without losing any values. This helps maintain the integrity of the sorting algorithm.
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
// good to use if data is almost sorted

function bubbleSort(array) {
	let noSwap;
	for (let i = array.length; i > 0; i--) {
		noSwap = true;
		for (let j = 0; j < i - 1; i++) {
			if (array[j] > array[j + 1]) {
				let tempVal = array[j];
				array[j] = array[j + 1];
				array[j + 1] = tempVal;
				noSwap = false;
			}
		}
		if (noSwap) break;
	}
	return array;
}

function bubbleSort(arr) {
	const n = arr.length;
  // length 7

  //			1		6
	for (let i = 0; i < n - 1; i++) {
	  // Last i elements are already in place, so no need to check them
	  //				7 - 0 - 1 = 6
	  // 				7 - 1 - 1 = 5
	  for (let j = 0; j < n - i - 1; j++) {
		// Compare adjacent elements
		if (arr[j] > arr[j + 1]) {
		  // Swap them if they are in the wrong order
		  const temp = arr[j];
		  arr[j] = arr[j + 1];
		  arr[j + 1] = temp;
		}
	  }
	}
  }
  
  // Example usage
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  // 34 64 25
  // 34 25 64
  bubbleSort(unsortedArray);
  console.log(unsortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
  