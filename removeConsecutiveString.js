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

function GenerateString(str, len) {
    const stack = new Stack();
    for (let i = 0; i < len; i++) {
        if (!stack.isEmpty()) {
            if (str[i] == stack.peek()) {
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        } else {
            stack.push(str[i]);
        }
    }
    return stack.data.join('');
}

let s1 = 'abbaca';
let len1 = s1.length;
console.log(GenerateString(s1, len1));
