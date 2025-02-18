function findFactorialRecursive(number) {
	if (number <= 1) {
		return 1;
	}

	return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
	if (number <= 1) {
		return 1;
	}

	let result = 1;
	for (let i = 2; i <= number; i++) {
		result = result * i;
	}

	return result;
}

console.log(findFactorialIterative(2));
