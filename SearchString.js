// - Search Naive string
// Dedine a function that acceptes two strigs, and search for following matching carachters

function findMatchinglong(long, short) {
	let counter = 0;

	for (let i = 0; i <= long.length; i++) {
		for (let j = 0; j <= short.length; j++) {
			if (short[j] !== long[i + j]) {
				break;
				console.log(j);
			}
			if (j === short.length - 1) {
				counter++;
				console.log(counter);
			}
		}
	}
}
