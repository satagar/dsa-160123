class MaxHeap {
    constructor(size) {
        this.array = new Array();
        this.maxsize = size;
        this.heapSize = 0;
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
    swap(prev, curr) {
        let temp = this.array[curr];
        this.array[curr] = this.array[prev];
        this.array[prev] = temp;
    }
    insert(val) {                                  //time complexity O(logn)
        if (this.heapSize === this.maxSize) {
            console.log("Overflow: Could not insertKey");
            return;
        }
        let i = this.heapSize;
        this.array[i] = val;
        this.heapSize++;
        while (i != 0 && this.array[this.parent(i)] < this.array[i]) {
            //swap
            let temp = this.array[i];
            this.array[i] = this.array[this.parent(i)];
            this.array[this.parent(i)] = temp;
            i = this.parent(i);
        }

    }
    extractMax() {
        if (this.heapSize == 0) {
            return 'No Elements in heap';
        } else {
            let temp = this.array[0];
            this.array[0] = this.array[this.heapSize - 1];
            this.array.pop();
            this.heapSize--;
            let index = 0;
            while (index < this.heapSize) {
                let left = this.lchild(index);
                let right = this.rchild(index);

                if (left >= this.heapSize) break;
                if (right >= this.heapSize) {
                    if (this.array[left] < this.array[index]) break;
                    this.swap(left, index);
                    index = left
                } else {
                    const maxIndex = this.array[left] > this.array[right] ? left : right;
                    if (this.array[maxIndex] < this.array[index]) break;
                    this.swap(maxIndex, index);
                    index = maxIndex;
                }
            }
            return temp;
        }

    }

    // The heapify_V1 takes (nLogn) time complexity
    heapify_V1(arr) {
        if (arr.length > this.maxsize) {
            console.log(`This Heap cannot store length not more than ${this.maxsize}`);
        } else {
            this.array = [];
            this.heapSize = 0;
            for (let i = 0; i < arr.length; i++) {
                this.insert(arr[i]);
            }
        }
    }
    // The heapify_V1 takes O(nLogn) time complexity
    heapify_V1(arr) {
        if (arr.length > this.maxsize) {
            console.log(`This Heap cannot store length not more than ${this.maxsize}`);
        } else {
            this.array = [];
            this.heapSize = 0;
            for (let i = 0; i < arr.length; i++) {
                this.insert(arr[i]);
            }
        }
    }
    // The heapify_V2 takes O(n) time complexity
    heapify_V2(arr) {
        if (arr.length > this.maxsize) {
            console.log(`This Heap cannot store length not more than ${this.maxsize}`);
        } else {
            this.array = arr;
            this.heapSize = arr.length;
            let n = this.heapSize;
            while (n >= 0) {
                this.fixHeap(n);
                n--
            }

        }
    }

    fixHeap(index) {
        const left = this.lchild(index);
        const right = this.rchild(index);

        if (left >= this.heapSize) return;
        if (left >= this.heapSize) return;
        if (right >= this.heapSize) {
            if (this.array[left] < this.array[index]) return;
            this.swap(left, index);
            this.fixHeap(left);
        } else {
            const maxIndex = this.array[left] > this.array[right] ? left : right;
            if (this.array[maxIndex] < this.array[index]) return;
            this.swap(maxIndex, index);
            this.fixHeap(maxIndex);
        }
    }
    search(val) {
        for (let i = 0; i < this.heapSize; i++) {
            if(this.array[i] == val) console.log(this.array[i]);
        }
    }
}

let h = new MaxHeap(15);
h.insert(12);
h.insert(21);
h.insert(15);
h.insert(56);
h.insert(64);
//console.log(h.extractMax());
//h.heapify_V1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
h.heapify_V2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
h.search(23);

