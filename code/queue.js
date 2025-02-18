class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	peek() {
		return this.first;
	}

	enqueue(value) {
		const newNode = new Node(value);

		if (this.isEmpty()) {
			this.first = newNode;
			this.last = newNode;
			this.length++;

			return this;
		}

		this.last.next = newNode;
		this.last = newNode;
		this.length++;

		return this;
	}

	dequeue() {
		if (this.isEmpty()) {
			return null;
		}

		if (this.first === this.last) {
			this.last = null;
		}

		this.first = this.first.next;
		this.length--;

		return this;
	}

	isEmpty() {
		return this.length === 0;
	}
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.dequeue();
myQueue.dequeue();

console.log(myQueue.peek());
console.log(myQueue.dequeue());
