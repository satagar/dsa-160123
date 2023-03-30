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
        if (this.heap.length-1 < leftChild) return;
        if (this.heap.length-1 < rightChild) {
            if (this.comparator(this.heap[leftChild], this.heap[index])) return;
            this.swap(leftChild, index);
            this.topBottom(leftChild);
        } else {
            let k;
            if(this.comparator(this.heap[leftChild],this.heap[rightChild]))
            {
                k = rightChild;
            }else{
                k = leftChild;
            }
            if(this.comparator(this.heap[k], this.heap[index])) return;
            this.swap(k,index);
            this.topBottom(k);
        }
    }
    search() {
        for (let i = 0; i < this.heap.length; i++) {
            console.log(this.heap[i]);
        }
    }
}

let minComparator = (a, b) => { return a > b };
let maxComparator = (a, b) => { return a < b };


let h = new BinaryHeap(minComparator);
h.insert(9);
h.insert(8);
h.insert(7);
h.insert(6);
h.insert(5);
h.insert(4);
h.insert(3);
console.log(h.extract());
console.log(h.extract());
console.log(h.extract());
h.search();

