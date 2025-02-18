/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns
 */
function mergeSortedArrays(arr1, arr2) {
	if (!arr1 || !arr2) {
		return 'Error';
	}

	const mergedArray = [];
	let arr1Index = 0;
	let arr2Index = 0;
	const arr1Length = arr1.length;
	const arr2Length = arr2.length;
	while (mergedArray.length < arr1Length + arr2Length) {
		if (arr2Index >= arr2Length || arr1[arr1Index] < arr2[arr2Index]) {
			mergedArray.push(arr1[arr1Index]);
			arr1Index++;
			continue;
		}

		mergedArray.push(arr2[arr2Index]);
		arr2Index++;
	}

	return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], []));
