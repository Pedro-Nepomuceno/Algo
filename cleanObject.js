// given an object, clean the values that repeat

let object = {
	value1: "1m",
	value2: "1m",
	value3: "2m",
	value4: "2m",
};

function cleanData(obj) {
	const valueCounts = {};
	const uniqueObj = {};

	for (const key in obj) {
		const value = obj[key];
		if (!valueCounts[value]) {
			valueCounts[value] = 1;
			uniqueObj[key] = value;
		} else {
			valueCounts[value]++;
		}
	}
	return uniqueObj;
}

const removeData = cleanData(object);
console.log(removeData);
