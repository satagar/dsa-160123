class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(data) {
        let newnode = new Node(data);
        if (this.rear == null) {
            this.front = newnode;
            this.rear = newnode;
            return;
        } else {
            this.rear.next = newnode;
            this.rear = newnode;
        }
    }
    dequeue() {
        if (this.front == null) {
            return;
        }
        let element = this.front.data;
        this.front = this.front.next;

        if (this.front == null) {
            this.rear = null;
        }
        return element;
    }

}

let q = new Queue();
q.enqueue(7);
q.enqueue(1);
q.enqueue(2);
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());