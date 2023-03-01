class Queue {
    constructor() {
        this.data = [];
        this.front = 0;
        this.rear = 0;
    }

    addFront(data) {
        if (this.isEmpty()) {
            this.data[this.front] = data;
            this.rear++;
            return;
        }
        else if(this.front != 0){
            this.front--;
            this.data[this.front] = data;
            return;
        }
        let i = this.rear;
        for (i; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[i] = data;
        this.rear++;
    }
    addback(data) {
        this.data[this.rear] = data;
        this.rear++;
    }
    removeFront() {
        if (!this.isEmpty()) {
            let element = this.data[this.front];
            this.data[this.front] = 0;
            this.front++;
            return element;
        }
    }
    removeBack() {
        if (!this.isEmpty()) {
            let element = this.data[this.rear-1];
            this.data[this.rear-1] = 0;
            this.rear--;
            return element;
        }
    }
    isEmpty() {
        if (this.rear == this.front) {
            return true;
        }
        return false;
    }
}

let q = new Queue();
q.addFront(7);
q.addback(1);
q.addFront(5);
console.log(q.removeFront());
console.log(q.removeBack());
console.log(q.removeBack());
console.log(q.removeFront());