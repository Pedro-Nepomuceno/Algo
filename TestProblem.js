//Implement the following three functions of a basic JavaScript testing framework:
//1. describe
//This function defines a test suite of related testcases. Ittakes in a string testsuiteName and a callback func , which makes one or more calls
//to "it).
//2.'
//This function defines a single test case in a test suite and is called within a descr-ibe •s callback Ifun€. It takes in a string testCaseNane and
//its own callback func , which makes one or more calls to expect
//3. expect
//This function defines a single check in a testcase and is called within an e it •s callback func . It takes in an arbitrary parameter actual and
//returns an object with the following three functions that are used to compare actual toother values:
//1. . toExist())
//This function checks that •ctuat is neither nult nor undefined .
//2. :expect (actual) . toBe (expected
//This function checks that actuat is stricttyequal to expected.
//3. "expect (actual) . toBeType(type)

function describe(testSuiteName, func) {
	console.log(`beginning test suite ${testSuiteName}`);
	try {
		func();
		console.log(`successfuly completed test suite ${testSuiteName}`);
	} catch (error) {
		const { testCaseName, errorMessage } = error;
		console.error(
			`failed running test suite ${testSuiteName} on` +
				`test case ${testCaseName} with error message ${errorMessage}`
		);
	}
}

function it(testCaseName, func) {
	console.log(`beggining test case ${testCaseName}`);
	try {
		func();
		console.log(`successfully completed test case ${testCaseName}`);
	} catch (errorMessage) {
		throw { testCaseName, errorMessage };
	}
}

function expect(actual) {
	return new ExpectFunctions(actual);
}

class ExpectFunctions {
	constructor(actual) {
		this.actual = actual;
		this.stringfiedActual = JSON.stringify(actual);
	}
	toExist() {
		if (this.actual == null) {
			throw `expected value to exist but got ${this.stringfiedActual}`;
		}
	}
	toBe(expected) {
		if (this.actual !== expected) {
			throw `expected ${this.stringfiedActual} to be ${JSON.stringify(
				expected
			)})`;
		}
	}
	toBeType(type) {
		if (typeof this.actual !== type) {
			throw `expected ${
				this.stringfiedActual
			} to be of type ${type} but got ${typeof this.actual}`;
		}
	}
}
