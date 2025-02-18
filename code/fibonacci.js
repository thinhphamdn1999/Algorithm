function fibonacciRecursive(number) {
	// O(n)
	if (number < 2) {
		return number;
	}

	return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
}

function fibonacciIterative(number) {
	// O(2^n)
	if (number < 2) {
		return number;
	}

	let firstFibonacci = 0;
	let secondFibonacci = 1;
	let temp;

	for (let index = 2; index <= number; index++) {
		temp = firstFibonacci + secondFibonacci;
		firstFibonacci = secondFibonacci;
		secondFibonacci = temp;
	}

	return secondFibonacci;
}

function fibonacciMaster() { // Time: O(n), Space: 
	let cache = {};

	return function fib(n) {
		if (n in cache) {
			return cache[n];
		}

		if (n < 2) {
			return n;
		}

		cache[n] = fib(n - 1) + fib(n - 2);
		return cache[n];
	};
}

const fasterFib = fibonacciMaster();

console.log(fasterFib(100));
