/**
 * Reverse a string
 * @param {string} str - a string need to be reversed
 */
function reverse(str) {
	// Check the input is valid or not
	if (!str || str.length < 2 || typeof str !== 'string') {
		return 'Error';
	}

	// Convert to an array
	const strArray = [];
	const length = str.length;
	for (let i = length - 1; i >= 0; i--) {
		strArray.push(str[i]);
	}

	console.log(strArray);

	let result = '';
	for (let i = 0; i < strArray.length; i++) {
		result = str[i] + result;
	}
	return result;

	// Alter solution
	// return str.split('').reverse().join('');
}

/**
 *
 * @param {string} str
 * @returns
 */
function reverseStringRecursive(str) {
	if (str === '') {
		return '';
	}

	return reverseStringRecursive(str.substring(1)) + str.charAt(0);
}

const reverse3 = (str) => [...str].reverse().join('');

console.log(reverseStringRecursive('Hi, Thinh'));
