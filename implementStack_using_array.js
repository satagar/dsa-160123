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
    insertAtBottom(data){
        if(this.top == 0){
            this.data[this.top] = data;
            this.top++;
            return;
        }
        let current = this.pop();
        this.insertAtBottom(data);
        this.push(current);
    }
    reverseStack(){
        if(this.top == 0){
            return;
        }
        let current = this.pop();
        this.reverseStack();
        this.insertAtBottom(current);
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.peek());
stack.insertAtBottom(0);
stack.print();
stack.reverseStack();
console.log('After Reverse');
stack.print();

//console.log(stack.reversePrint());