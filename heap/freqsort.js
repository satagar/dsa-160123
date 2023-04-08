class Heap {
    constructor(comparator) {
        this.data = [];
        this.comparator = comparator;
    }

    _swap(x, y) {
        const temp = this.data[x];
        this.data[x] = this.data[y];
        this.data[y] = temp;
    }

    peek() {
        if (this.data.length <= 0) return null;
        return this.data[0];
    }

    add(value) {
        this.data.push(value);
        this.bottomUp(this.data.length - 1);
    }

    bottomUp(index) {
        if (index == 0) return;
        const data = this.data;

        const parentIndex = Math.floor((index - 1) / 2);

        if (this.comparator(data[index], data[parentIndex])) {
            this._swap(index, parentIndex);
            this.bottomUp(parentIndex);
        }
    }

    poll() {
        const data = this.data;
        const value = data[0];
        data[0] = data[data.length - 1];
        data.pop();

        this.topBottom(0);
        return value;
    }

    topBottom(index) {
        const left = (2 * index) + 1;
        const right = (2 * index) + 2;

        let nextIndex = index, n = this.data.length;

        if (left < n && this.comparator(this.data[left], this.data[index])) {
            nextIndex = left;
        }

        if (right < n && this.comparator(this.data[right], this.data[index])) {
            nextIndex = right;
        }

        if (nextIndex != index) {
            this._swap(nextIndex, index);
            this.topBottom(nextIndex);
        }
    }
}

function freqSort(arr) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            let freq = map.get(arr[i]);
            map.set(arr[i], freq + 1);
        }
        else {
            map.set(arr[i], 1);
        }
    }

    const comparator = (a, b) => a[1] < b[1];
    const heap = new Heap(comparator);

    for (let key of map.keys()) {
        heap.add([key, map.get(key)]);
    }
    const result = [];

    while (heap.data.length > 0) {
        const node = heap.poll();
        for (let i = 0; i < node[1]; i++) {
            result.push(node[0]);
        }
    }

    return result;
}

console.log(freqSort([1, 2, 3, 2, 3, 3, 2, 3, 3, 4, 4]));

