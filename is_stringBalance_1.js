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
            return -1;
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
    print() {
        for (let i = this.top - 1; i >= 0; i--) {
            console.log(this.data[i]);
        }
    }
    reversePrint() {
        if (this.top == 0) {
            return;
        }
        this.top--;
        let current = this.data[this.top];
        this.reverse();
        console.log(current);
        this.top = this.top + 1;

    }
}
function checkString(str, len) {
    const stack = new Stack();
    for (let i = 0; i < len; i++) {
        let s = str[i];
        if ((i == 0 && s == ')') || (i == len - 1 && s == '(')) {
            return 'Not valid String';
        } else if (s == '(') {
            stack.push('(');
        } else if (stack.pop() == -1) {
            return 'Not valid String'
        }
    }
    console.log(stack.isEmpty() ? 'Valid String' : 'Not Valid String');
}
let s1 = '))()';
let len1 = s1.length;
console.log(checkString(s1,len1));

let s2 = '(()())';
let len2 = s2.length;
console.log(checkString(s2,len2));

let s3 = '())(()';
let len3 = s3.length;
console.log(checkString(s3, len3));