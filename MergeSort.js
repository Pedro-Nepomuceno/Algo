function merge(arr, arr2) {
	let result = [];
	let i = 0;
	let j = 0;
	while (i < arr.length && j < arr2.length) {
		if (arr2[j] > arr[i]) {
			result.push(arr[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}
	while (i < arr.length) {
		result.push(arr[i]);
		i++;
	}
	while (j < arr2.length) {
		result.push(arr[j]);
		j++;
	}

	return result;
}
function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}
