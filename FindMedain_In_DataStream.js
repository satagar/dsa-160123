class BinaryHeap {
    constructor(Comparator) {
        this.heap = [];
        this.comparator = Comparator;
    }
    parent(i) {
        return parseInt((i - 1) / 2);
    }
    lChild(i) {
        return 2 * i + 1;
    }
    rChild(i) {
        return 2 * i + 2;
    }
    insert(value) {
        this.heap.push(value);
        this.bottomUp(this.heap.length - 1);
    }
    swap(x, y) {
        let temp = this.heap[x];
        this.heap[x] = this.heap[y];
        this.heap[y] = temp;
    }
    bottomUp(index) {
        if (index == 0) return;
        const p = this.parent(index);
        if (this.comparator(this.heap[p], this.heap[index])) {
            this.swap(p, index)
            this.bottomUp(p);
        }
    }
    extract() {
        const temp = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();

        this.topBottom(0);
        return temp;
    }
    topBottom(index) {
        const leftChild = this.lChild(index);
        const rightChild = this.rChild(index);
        if (this.heap.length - 1 < leftChild) return;
        if (this.heap.length - 1 < rightChild) {
            if (this.comparator(this.heap[leftChild], this.heap[index])) return;
            this.swap(leftChild, index);
            this.topBottom(leftChild);
        } else {
            let k;
            if (this.comparator(this.heap[leftChild], this.heap[rightChild])) {
                k = rightChild;
            } else {
                k = leftChild;
            }
            if (this.comparator(this.heap[k], this.heap[index])) return;
            this.swap(k, index);
            this.topBottom(k);
        }
    }
    getsize() {
        return this.heap.length;
    }
    peek() {
        let val = null;
        if (this.heap.length != 0) {
            val = this.heap[0];
            return val;
        }
        return val
    }
}

let minComparator = (a, b) => { return a > b };
let maxComparator = (a, b) => { return a < b };


var MedianFinder = function () {
    this.left = new BinaryHeap(maxComparator);
    this.right = new BinaryHeap(minComparator);
}

MedianFinder.prototype.insert = function (num) {
    if (this.left.getsize() === 0) {
        this.left.insert(num);
        return;
    }
    if (this.left.getsize() > this.right.getsize()) {
        if (this.left.peek() >= num) {
            this.left.insert(num);
            this.right.insert(this.left.extract());
        } else {
            this.right.insert(num);
        }

    } else if (this.left.getsize() < this.right.getsize()) {
        if (this.right.peek() <= num) {
            this.right.insert(num);
            this.left.insert(this.right.extract());
        } else {
            this.left.insert(num);
        }
    } else {
        if(this.left.peek() >= num){
            this.left.insert(num);
        }else{
            this.right.insert(num);
        }
    }

}
MedianFinder.prototype.findMedain = function () {
    if(this.left.getsize() > this.right.getsize()){
        return this.left.peek();
    }else if(this.left.getsize() < this.right.getsize()){
        return this.right.peek();
    }else{
        return (this.left.peek()+this.right.peek())/2
    }
}

const m = new MedianFinder();
m.insert(6);
console.log(m.findMedain());
m.insert(2);
console.log(m.findMedain());
m.insert(7);
console.log(m.findMedain());
m.insert(1);
console.log(m.findMedain());
m.insert(5);
console.log(m.findMedain());
m.insert(3);
console.log(m.findMedain());
m.insert(9);
console.log(m.findMedain());



