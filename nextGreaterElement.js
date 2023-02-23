class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }
    push(data) {
        this.data[this.top] = data;
        this.top = this.top + 1;
    }
    isEmpty() {
        if (this.top === 0) {
            return true;
        }
        return false;
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack Underflow');
        }
        this.top = this.top - 1;
        let element = this.data[this.top];
        return element;
    }
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.data[this.top - 1];
    }
}

function findNextGreater(arr, len) {
    const stack = new Stack();
    let result = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        if (arr[i] < arr[i + 1]) {
            result[i] = arr[i + 1];

            while (arr[stack.peek()] < arr[i + 1]) {
                result[stack.peek()] = arr[i + 1];
                stack.pop();
            }
        } else {
            stack.push(i);
        }
    }
    return result;
}


let arr1 = [2, 7, 3, 5, 4, 6, 8];
let len1 = arr1.length;
console.log(findNextGreater(arr1, len1));