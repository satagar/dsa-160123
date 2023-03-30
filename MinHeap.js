class MinHeap {
    constructor() {
        this.heap = [];
    }
    parent(i) {
        return parseInt((i - 1) / 2);
    }
    lchild(i) {
        return (2 * i + 1);
    }
    rchild(i) {
        return (2 * i + 2);
    }
    swap(x, y) {
        let temp = this.heap[x];
        this.heap[x] = this.heap[y];
        this.heap[y] = temp;
    }
    insert(val) {
        this.heap.push(val);
        let len = this.heap.length - 1;
        while (len != 0 && this.heap[this.parent(len)] > this.heap[len]) {
            this.swap(this.parent(len), len);
            len = this.parent(len);
        }
    }
    extractMin() {
        if (this.heap.length <= 0) {
            return 'There is no Element in the heap';
        } else {
            let temp = this.heap[0];
            this.swap(0, this.heap.length - 1);
            this.heap.pop();
            let n = 0;
            while (n < this.heap.length) {
                let leftChild = this.lchild(n);
                let rightChild = this.rchild(n);

                if (leftChild >= this.heap.length) break;
                if (rightChild >= this.heap.length) {
                    if (this.heap[leftChild] > this.heap[n]) break;
                    this.swap(leftChild, n);
                    n = leftChild;
                } else {
                    let minIndex = this.heap[leftChild] < this.heap[rightChild] ? leftChild : rightChild;
                    if (this.heap[minIndex] > this.heap[n]) break;
                    this.swap(minIndex, n);
                    n = minIndex;
                }
            }
            return temp;
        }
    }
    // The heapify_V1 takes O(nLogn) time complexity
    heapify_V1(arr) {
        this.heap = [];
        for (let i = 0; i < arr.length; i++) {
            this.insert(arr[i]);
        }
    }
    // The heapify_V2 takes O(n) time complexity
    heapify_V2(arr) {

        this.heap = arr;
        let n = this.heap.length - 1;
        while (n >= 0) {
            this.fixHeap(n);
            n--;
        }

    }
    fixHeap(n) {

        let leftChild = this.lchild(n);
        let rightChild = this.rchild(n);

        if (leftChild >= this.heap.length) return;
        if (rightChild >= this.heap.length) {
            if (this.heap[leftChild] > this.heap[n]) return;
            this.swap(leftChild, n);
            n = leftChild;
        } else {
            let minIndex = this.heap[leftChild] < this.heap[rightChild] ? leftChild : rightChild;
            if (this.heap[minIndex] > this.heap[n]) return;
            this.swap(minIndex, n);
            n = minIndex;
        }

    }
    search() {
        for (let i = 0; i < this.heap.length; i++) {
            console.log(this.heap[i]);
        }
    }
    find(val){
        for (let i = 0; i < this.heap.length; i++) {
            if(this.heap[i] == val) console.log(this.heap[i]);
        }
    }

}

let m = new MinHeap();
m.insert(8);
m.insert(9);
m.insert(6);
m.insert(7);
m.insert(5);
m.insert(4);
m.insert(1);
m.insert(2);
m.insert(3);
// for (let i = 0; i < 6; i++) {
//     console.log(m.extractMin());
// }
//m.heapify_V1([100, 50, 40, 300, 150, 170]);
m.heapify_V2([100, 50, 40, 300, 150, 170]);
m.search();
