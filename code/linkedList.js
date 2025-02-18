class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;

		return this;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;

		return this;
	}

	printList() {
		const array = [];
		let currentNode = this.head;

		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return array;
	}

	insert(index, value) {
		// Update the head
		if (index <= 0) {
			return this.prepend(value);
		}

		// Update the tail
		if (index >= this.length) {
			return this.append(value);
		}

		let leader = this.traverseToIndex(index - 1);
		const newNode = new Node(value);
		newNode.next = leader.next;
		leader.next = newNode;
		this.length++;

		return this.printList();
	}

	remove(index) {
		if (this.length < 1) {
			return this;
		}

		if (index <= 0 || this.length === 1) {
			this.head = this.head.next;
			return this;
		}

		const leader = this.traverseToIndex(index >= this.length - 1 ? this.length - 2 : index - 1);
		leader.next = leader.next.next;

		this.length--;
		return this;
	}

	traverseToIndex(index) {
		let currentNode = this.head;
		let counter = 0;

		while (counter < index) {
			currentNode = currentNode.next;
			counter++;
		}

		return currentNode;
	}

	/**
	 * Time Complexity: O(n)
	 * Space Complexity: O(n)
	 */
	reverseWithStack() {
		const stack = [this.head];
		let currentNode = this.head;

		while (currentNode.next !== null) {
			currentNode = currentNode.next;
			stack.push(currentNode);
		}

		this.head = currentNode;
		let reverseNode = this.head;
		while (stack.length > 0) {
			const node = stack.pop();
			reverseNode.next = node;
			reverseNode = reverseNode.next;
		}

		reverseNode.next = null;
	}

	/**
	 * Time Complexity: O(n)
	 * Space Complexity: O(1)
	 * @returns 
	 */
	reverse() {
		if (!this.head.next) {
			return this.head;
		}

		let first = this.head;
		let second = this.head.next;
		this.tail = this.head;

		while (second) {
			const temp = second.next;
			second.next = first;
			first = second;
			second = temp;
		}

		this.head.next = null;
		this.head = first;
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
// myLinkedList.remove(4);
myLinkedList.reverse();
console.log(myLinkedList.printList());
