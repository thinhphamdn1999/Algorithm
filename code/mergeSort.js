/**
 *
 * @param {number[]} array
 */
function mergeSort(array) {
	if (array.length === 1) {
		return array;
	}

	const mid = Math.floor(array.length / 2);
	const left = array.slice(0, mid);
	const right = array.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
}

/**
 *
 * @param {number[]} left
 * @param {number[]} right
 */
function merge(left, right) {
	let leftIndex = 0;
	let rightIndex = 0;
	const mergedArray = [];

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex] || rightIndex === right.length) {
			mergedArray.push(left[leftIndex]);
			leftIndex++;
		} else {
			mergedArray.push(right[rightIndex]);
			rightIndex++;
		}
	}

	// merge the rest of the array (left or right)
	return mergedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const answer = mergeSort(numbers);
console.log(answer);
