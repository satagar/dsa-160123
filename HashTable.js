class HashTable {
    constructor() {
        this.data = new Array(127);
        this.size = 0;
    }
    hash(key) {
        let hashvalue = 0;
        for (let i = 0; i < key.length; i++) {
            hashvalue += key.charCodeAt(i);
        }
        return hashvalue % this.data.length;

    }
    set(key, value) {
        let index = this.hash(key);
        if (this.data[index]) {
            for (let i = 0; i < this.data[index].length; i++) {
                if (this.data[index][i][0] == key) {
                    this.data[index][i][1] = value;
                }
            }
            this.data[index].push([key, value]);

        } else {
            this.data[index] = [];
            this.data[index].push([key, value]);
        }
        this.size++;

    }
    get(key) {
        let index = this.hash(key);
        if (this.data[index]) {
            for (let i = 0; i < this.data[index].length; i++) {
                if (this.data[index][i][0] == key) {
                    return `Value is: ${this.data[index][i][1]}`
                }
            }
        } else {
            return `No Value exists for this Key`;
        }

    }
    remove(key) {
        let index = this.hash(key);
        if (this.data[index]) {
            for (let i = 0; i < this.data[index].length; i++) {
                if (this.data[index][i][0] == key) {
                    let temp = this.data[index].splice(i,1);
                    this.size--;
                    return `The Value deleted is : ${temp}`;
                    
                }
            }
        } else {
            return `No Value exists for this Key`;
        }
    }
    display(){
        this.data.forEach((values,index)=>{
            const chainedValues = values.map(
                ([key, value]) => `[ ${key}: ${value} ]`
              );
              console.log(`${index}: ${chainedValues}`);
        })
    }
}

const h = new HashTable();
h.set('spain', [1, 2, 3]);
h.set('pains', 'interchange');
console.log(h.get('spain'));
console.log(h.get('pains'));
console.log(h.remove('pains'));
console.log(h.display());