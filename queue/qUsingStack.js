class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(data) {
    this.data[this.top] = data;
    this.top++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Underflow!");
    }
    this.top--;
    let data = this.data[this.top];
    return data;
  }

  peek() {
    return this.data[this.top - 1];
  }

  print() {
    for (let i = this.top - 1; i >= 0; i--) {
      console.log(this.data[i]);
    }
  }

  isEmpty() {
    return this.top == 0;
  }
}

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(value) {
    this.s1.push(value);
  }

  dequeue() {
    if (this.s2.isEmpty()) {
      while (!this.s1.isEmpty()) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }
}

const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.dequeue()); // 10
q.enqueue(40);
console.log(q.dequeue()); // 20
console.log(q.dequeue()); // 30
console.log(q.dequeue()); // 40
