// Google question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Give an array = [2,3,4,5]
// It should return undefined

/**
 *
 * @param {any[]} array
 */
function firstRecurringCharacter(array) {
	const charSet = new Set();

	for (let i = 0; i < array.length; i++) {
		if (charSet.has(array[i])) return array[i];
		charSet.add(array[i]);
	}

	return undefined;
}

console.log(firstRecurringCharacter([2, 5, 5, 1, 2, 3, 5, 1, 2, 4]));
