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

var histogram = function(arr) {
    let M = Math.pow(10, 9) + 7;
    let PLE = new Array(arr.length).fill(-1);
    let NLE = new Array(arr.length).fill(arr.length);
    findPLE(PLE, arr);
    findNLE(NLE, arr);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = Math.max(((NLE[i]-PLE[i]-1) * arr[i]),sum) % M 
    }
    return sum;
};

function findPLE(PLE, arr) {
    let stack = new Stack();
    for (let i = 0; i < arr.length; i++) {
        while (stack.peek() != null && arr[stack.peek()] >= arr[i]) {
            stack.pop();
        }
        if (stack.peek() != null) {
            PLE[i] = stack.peek();
        }
        stack.push(i);
    }
}

function findNLE(NLE, arr) {
    let stack = new Stack();
    for (let i = arr.length-1; i >= 0; i--) {
        while (stack.peek() != null && arr[stack.peek()] > arr[i]) {
            stack.pop();
        }
        if (stack.peek() !=null) {
            NLE[i] = stack.peek();
        }
        stack.push(i);
    }
}



console.log(histogram([6,2,5,4,5,1,6]));
console.log(histogram([2,1,5,6,2,3]));