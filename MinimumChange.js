// find the minimum change one person can not give.
// input [1,2,5]
// output [4]

function nonConstructibleChange(coins) {
	let miniChange = 1;
	for (let coin of coins.slice().sort((a, b) => a - b)) {
		if (coin > miniChange) break;
		miniChange += coin;
	}
	return miniChange;
}
