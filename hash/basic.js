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
        return this.hashTable[index];
    }

    set(key, value) {
        const index = this._hash(key);
        this.hashTable[index] = [key, value];
        this.tableSize++;
    }

    remove(key) {
        const index = this._hash(key);

        if (this.hashTable[index]) {
            this.hashTable[index] = [];
            this.tableSize--;
            return true;
        } else {
            return false;
        }
    }
}

const table = new HashTable();
table.set("Holi", 08032023);
table.set("Ugadi", 22032023);
table.set("Navratri", 22032023);
table.set("GudiPadwa", 22032023);
console.log(table.get("Ugadi"));
console.log(table.get("Holi"));
console.log(table.remove("Holi"));
console.log(table.remove("Holi"));