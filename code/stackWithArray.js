class Stack {
	constructor() {
		this.stack = [];
	}

	peek() {
		return this.stack[this.stack.length - 1];
	}

	push(value) {
		this.stack.push(value);

		return this;
	}

	pop() {
		this.stack.pop();

    return this;
	}
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
// myStack.pop();
// myStack.pop();
console.log(myStack.pop());
