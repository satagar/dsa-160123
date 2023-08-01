class HashTable {
    constructor() {
        this.tableSize = 5;
        this.hashTable = new Array(this.tableSize);
        this.elementSize = 0;
        this.loadFactor = 0;
        this.MAX_LOAD_FACTOR = 0.75;
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
        } else {
            this.hashTable[index] = [];
            this.hashTable[index].push([key, value]);
        }
        this.elementSize++;
        const loadFactor = this.elementSize / this.tableSize;
        console.log(`Current load factor: ${loadFactor}`);
        if (loadFactor > this.MAX_LOAD_FACTOR) {
            console.log("Re-hashing");
            this.rehash();
            console.log(`New table size: ${this.tableSize}`);
        }
    }

    rehash() {
        const temp = this.hashTable;

        this.elementSize = 0;
        this.tableSize *= 2;
        this.hashTable = new Array(this.tableSize);

        for (let i = 0; i < temp.length; i++) {
            if (!temp[i]) {
                continue;
            }
            for (let j = 0; j < temp[i].length; j++) {
                this.set(temp[i][j][0], temp[i][j][1]);
            }
        }

        console.log("Rehashing done!");
    }

    remove(key) {
        const index = this._hash(key);

        if (this.hashTable[index]) {
            for (let i = 0; i < this.hashTable[index]; i++) {
                if (this.hashTable[index][i][0] == key) {
                    this.hashTable[index].splice(i, 1);
                    this.elementSize--;
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
table.set("S", 222);
table.set("A", 222);
console.log(table.get("S"));
