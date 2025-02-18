class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}

		return hash;
	}

	// O(1)
	set(key, value) {
		let address = this._hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
		return this.data;
	}

	// O(1)
	get(key) {
		let address = this._hash(key);
		if (this.data[address]) {
			return this.data[address].find((item) => item[0] === key)?.[1];
		}
	}

	keys() {
		const keysArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i] && this.data[i].length > 0) {
				for (let j = 0; j < this.data[i].length; j++) {
					keysArray.push(this.data[i][j][0]);
				}
			}
		}

		return keysArray;
	}
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
myHashTable.set('a', 2);
myHashTable.set('a', 2);
console.log(myHashTable.keys());
