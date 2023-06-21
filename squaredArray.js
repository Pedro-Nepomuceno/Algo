function sortedSquaredArray(array) {
	let arr1 = [];

	for (let i = 0; i <= array.length; i++) {
		arr1.push(array[i] ** 2);
	}
	arr1.sort();
	return arr1;
}
