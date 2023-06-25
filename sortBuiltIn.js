// how built in javascript sort algo works

function sortAlgo(num1, num2) {
	return num1 - num2;
}

let arrayToSort = [10, 39, 49, 4, 2, 59];

arrayToSort.sort(sortAlgo);

// expected output

[2, 4, 10, 39, 49, 59];
