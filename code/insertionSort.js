/**
 *
 * @param {number[]} array
 */
function insertionSort(array) {
	const length = array.length;

	for (let i = 0; i < length; i++) {
		if (array[i] < array[0]) {
			array.unshift(array.splice(i, 1)[0]);
		} else {
			for (let j = 0; j < i - 1; j++) {
				if (array[j] < array[i] && array[j + 1] > array[i]) {
					array.splice(j + 1, 0, array.splice(i, 1)[0]);
				}
			}
		}
	}

	return array;
}

console.log(insertionSort([2, 4, 10, 5, 0, -2, -8]));
