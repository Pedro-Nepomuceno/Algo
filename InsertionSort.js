function insertionSort(arr) {
	for (let i = 1; i <= arr.length; i++) {
		let currentVal = arr[i];
		for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}
	return arr;
}
[6, 3, 1, 5];

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			const tempVal = arr[j];
			if (arr[i] > arr[j]) {
				arr[j] = arr[i];
				tempVal = arr[j];
			}
		}
	}
	return arr;
}
