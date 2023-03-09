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
}

class Queue {
    constructor() {
        this.s = new Stack();
    }
    enqueue(data){
        let len = this.s.data.length;
        this.s.push(data);
        for(let i=0;i<len;i++){
            let ele = this.s.pop();
            this.s.push(ele);
        }
    }
    dequeue(){
        if(this.s.data.length == 0){
            return `No element`;
        }else{
            return this.s.pop();
        }
    }
}
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());