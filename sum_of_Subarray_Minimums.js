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

function sumofSubarrayMinimum(arr) {
    let len = arr.length;
    let LHS = new Array(len).fill(1);
    let RHS = new Array(len).fill(1);
    const stack1 = new Stack();
    const stack2 = new Stack();
    stack1.push(0);
    for (let i = 1; i < len; i++) {
        let temp = 1;
        while (stack1.peek() != null && arr[stack1.peek()] > arr[i]) {
            temp = i - stack1.peek() + 1;
            stack1.pop();
        }
        if(stack1.peek() == null) temp = i+1;
        LHS[i] = temp;
        stack1.push(i);
    }
    stack2.push(len - 1);
    for (let i = len - 2; i >= 0; i--) {
        let temp = 1;
        while (stack2.peek() != null && arr[stack2.peek()] > arr[i]) {
            temp = (stack2.peek() - i) + 1;
            stack2.pop();
        }
        if(stack2.peek() == null) temp = len - i;
        RHS[i] = temp;
        stack2.push(i);
    }
    console.log(LHS, RHS)
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += LHS[i] * RHS[i] * arr[i];
    }
    return sum;
}


console.log(sumofSubarrayMinimum([3, 1, 2, 4]));
console.log(sumofSubarrayMinimum([11, 81, 94, 43, 3]));