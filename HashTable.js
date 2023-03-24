class HashTable {
    constructor() {
        this.limit = 127;
        this.data = new Array(this.limit);
        this.size = 0;
        this.MAX_LOAD_FACTOR = 0.80;
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
        let loadFactor = this.size / this.limit;
        if(loadFactor > this.MAX_LOAD_FACTOR){
            this.rehash();
            console(`New Table size : ${this.limit}`);
        }
       
    }
    rehash(){
        let temp = this.data;
        this.size = 0;
        this.limit *= 2;
        this.data = new Array(this.limit);
        for(let i=0;i<temp.length;i++){
            if(!temp[i]){
                continue;
            }
            for(let j=0;j<temp[i].length;j++){
                this.set(temp[i][j][0],temp[i][j][1]);
            }
        }
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
h.set('spain', [1, 5, 56]);
h.set('pains', 'interchange');
console.log(h.get('spain'));
console.log(h.get('pains'));
