// Give an array numbers. Check if pair sum exited with sum give by a user.
// Ex: [1, 2, 4, 4], sum = 8 => Return true (4 + 4 = 8)
//     [1, 2, 3, 4], sum = 8 => Return false. No existed pair sum matches 8.

// Native solution
// Nested loop and plus 2 number in the array
/**
 *
 * @param {number[]} arr - number array
 * @param {number} sum - pair sum
 */
function pairSum(arr, sum) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === sum) {
				return true;
			}
		}
	}

	return false;
}

// console.log(pairSum([1, 2, 3, 4], 8));

// Hash map
// Create a hash map, when we loop the array, we will compare item in the array will be equal with the item in the hash map
function pairSum2(arr, sum) {
	const map = new Set();

	for (let i = 0; i < arr.length; i++) {
		if (map.has(arr[i])) {
			return true;
		}

		map.add(sum - arr[i]);
	}

	return false;
}

console.log(pairSum([1, 2, 4, 4], 8));
