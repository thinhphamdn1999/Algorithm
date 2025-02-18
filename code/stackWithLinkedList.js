class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		return this.top;
	}

	push(value) {
		const newNode = new Node(value);

		if (this.isEmpty()) {
			this.top = newNode;
			this.bottom = this.top;
			this.length++;
			return this;
		}

		const holdingPointer = this.top;
		this.top = newNode;
		this.top.next = holdingPointer;
		this.length++;

		return this;
	}

	pop() {
		if (this.isEmpty()) {
			return null;
		}

		if (this.top === this.bottom) {
			this.bottom = null;
		}

		this.top = this.top.next;
		this.length--;

		return this;
	}

	isEmpty() {
		return this.length === 0;
	}
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack.pop());
