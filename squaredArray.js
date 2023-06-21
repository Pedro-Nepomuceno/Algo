function sortedSquaredArray(array) {
	const squaredArray = array.map((num) => num * num);
	return squaredArray.sort((a, b) => a - b);
}
