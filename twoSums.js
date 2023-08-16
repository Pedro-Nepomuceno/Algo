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
//  			   [2,4,8,9]  10 	
function twoNumberSum(array, targetSum) {
	let map = {
		// 2 : true
		// 4 : true
	};

	let emptyArr = []
	for (let val of array) {
		//						10   -  8  = 2
		let potentialSum = targetSum - val;
		if (potentialSum in map) {
			return [potentialSum, val];
		} else map[val] = true;
	}
return emptyArr
}

