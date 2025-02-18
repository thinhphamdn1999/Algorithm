class DoubleNode {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoubleLinkedList {
	constructor(value) {
		this.head = new DoubleNode(value);
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new DoubleNode(value);
		this.tail.next = newNode;
		this.tail.prev = this.tail;
		this.tail = newNode;
		this.length++;
	}

	prepend(value) {
		const newNode = new DoubleNode(value);
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length++;
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

	traverseToIndex(index) {
		let currentNode = this.head;
		let counter = 0;

		while (counter < index) {
			currentNode = currentNode.next;
			counter++;
		}

		return currentNode;
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
		const newNode = new DoubleNode(value);
		newNode.next = leader.next;
		newNode.prev = leader.prev;
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
			this.head.prev = null;
			return this;
		}

		const leader = this.traverseToIndex(index >= this.length - 1 ? this.length - 2 : index - 1);
		leader.next = leader.next.next;
		leader.prev = leader.prev.prev;

		this.length--;
		return this;
	}
}

const myLinkedList = new DoubleLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(4, 99);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
