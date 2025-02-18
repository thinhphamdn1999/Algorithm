function selectionSort(array) {
	const length = array.length;

	for (let i = 0; i < length - 1; i++) {
		let min = array[i];
		let swapIndex = i;
		for (let j = i + 1; j < length; j++) {
			if (min > array[j]) {
				min = array[j];
				swapIndex = j;
			}
		}
		let temp = array[swapIndex];
		array[swapIndex] = array[i];
		array[i] = temp;
	}

	return array;
}

console.log(selectionSort([2, 4, 10, 5, 0, -2, -8]));
