/**
 *
 * @param {number[]} array
 * @param {number} left
 * @param {number} right
 */
function quickSort(array, left, right) {
	let pivot;
	let partitionIndex;

	if (left < right) {
		// Chose the pivot
		pivot = right;
		partitionIndex = partition(array, pivot, left, right);

		// Quick sort left and right pivot
		quickSort(array, left, partitionIndex - 1);
		quickSort(array, partitionIndex + 1, right);
	}

	return array;
}

/**
 *
 * @param {number[]} array
 * @param {number} pivot
 * @param {number} left
 * @param {number} right
 * @returns
 */
function partition(array, pivot, left, right) {
	let pivotValue = array[pivot];
	let partitionIndex = left;

	// Move smaller element to the left
	for (let i = left; i < right; i++) {
		if (array[i] < pivotValue) {
			swap(array, i, partitionIndex);
			partitionIndex++;
		}
	}

	// After move all elements are smaller than pivot to the left,
	// Move pivot (the right element) to the correct position and return its position
	swap(array, right, partitionIndex);
	return partitionIndex;
}

/**
 *
 * @param {number[]} array
 * @param {number} firstIndex
 * @param {number} secondIndex
 */
function swap(array, firstIndex, secondIndex) {
	const temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
