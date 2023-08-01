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

const comparator = (a, b) => a > b;

const heap = new Heap(comparator);
heap.add(10);
heap.add(20);
heap.add(25);
heap.add(22);
heap.add(27);
console.log(heap.poll());
console.log(heap.poll());

