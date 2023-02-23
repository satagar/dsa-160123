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

function findStockPrice(arr, len) {
    const stack = new Stack();
    let result = new Array(len).fill(1);
    stack.push(1);
    for (let i = 1; i < len; i++) {
        if (arr[i] > arr[i - 1]) {
            result[i] += 1;
            while (arr[stack.peek() - 1] < arr[i]) {
                stack.pop();
            }
            if (stack.isEmpty()) {
                result[i] = i + 1;
            } else {
                result[i] = (i + 1) - stack.peek();
            }
            stack.push(i + 1);
        } else {
            stack.push(i + 1);
        }
    }
    return result;
}

let arr1 = [100, 80, 60, 70, 60, 75, 85];
let len1 = arr1.length;
console.log(findStockPrice(arr1, len1));

let arr2 = [100, 80, 60, 70, 60, 75, 120];
let len2 = arr2.length;
console.log(findStockPrice(arr2, len2));

let arr3 = [31, 27, 14, 21, 30, 22];
let len3 = arr3.length;
console.log(findStockPrice(arr3, len3));
