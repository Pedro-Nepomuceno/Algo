function sortedSquaredArray(array) {
	let arr1 = [];
	array.forEach((num) => {
		arr1.push(num ** 2);
	});
	return arr1;
}
