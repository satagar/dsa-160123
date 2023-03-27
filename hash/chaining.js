class HashTable {
    constructor() {
        this.hashTable = new Array(256);
        this.tableSize = 0;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.hashTable.length;
    }

    get(key) {
        const index = this._hash(key);
        if (this.hashTable[index]) {
            for (let i = 0; i < this.hashTable[index].length; i++) {
                if (this.hashTable[index][i][0] == key) {
                    return this.hashTable[index][i][1];
                }
            }
        }
    }

    set(key, value) {
        const index = this._hash(key);
        if (this.hashTable[index]) {
            for (let i = 0; i < this.hashTable[index].length; i++) {
                if (this.hashTable[index][i][0] == key) {
                    this.hashTable[index][i][1] = value;
                    return;
                }
            }
            this.hashTable[index].push([key, value]);
        }
        else {
            this.hashTable[index] = [];
            this.hashTable[index].push([key, value]);
            this.tableSize++;
        }
    }

    remove(key) {
        const index = this._hash(key);

        if (this.hashTable[index]) {
            for (let i = 0; i < this.hashTable[index]; i++) {
                if (this.hashTable[index][i][0] == key) {
                    this.hashTable[index].splice(i, 1);
                    this.tableSize--;
                    return true;
                }
            }
        } else {
            return false;
        }
    }
}

const table = new HashTable();
table.set("Spain", 220);
table.set("ǻ", 200);
console.log(table.get("Spain"));