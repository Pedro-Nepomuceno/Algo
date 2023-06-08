//write a function that takes an unsorted array and a target number, the function should return an array that sums to the target number

// not optimum solution
function twoNumberSum(array, targetSum) {
	let emptyArr = [];
	for (let i = 0; i <= array.length; i++) {
		for (let j = i + 1; j <= array.length - 1; j++) {
			if (array[i] + array[j] === targetSum) {
				emptyArr.push(array[i], array[j]);
			}
			return emptyArr;
		}
	}
}

// optimum solution

function twoNumberSum(array, targetSum) {
	let emptyArr = {};
	for (let val of array) {
		let potentialSum = targetSum - val;
		if (potentialSum in emptyArr) {
			return [potentialSum, val];
		} else emptyArr[val] = true;
	}
	return [];
}
