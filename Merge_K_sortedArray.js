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

    print() {
        console.log(this.heap);
    }

}


var mergeKLists = function (lists) {
    let arr = [];
    let result = [];
    lists.forEach(subArr => {
        subArr.forEach(val => {
            arr.push(val);
        });
    });
    console.log(arr);

    const h = new MinHeap();
    h.heapify_V2(arr);
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        result.push(h.extractMin());
    }

    return result;
};

console.log(mergeKLists([[1, 2, 3], [2, 3, 4], [1, 5, 6], [5, 6, 8]]));