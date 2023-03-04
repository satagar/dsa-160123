class Queue {
  constructor() {
    this.data = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(data) {
    this.data[this.rear] = data;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.data[this.front];
    this.front++;
    return result;
  }

  isEmpty() {
    return this.rear === this.front;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.data[this.front];
    }
    return null;
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    const result = [];
    for (let i = this.front; i < this.rear; i++) {
      result.push(this.data[i]);
    }
    console.log(result);
  }
}

class Stack {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  push(value) {
    this.q1.enqueue(value);
  }

  pop() {
    let count = this.q1.size();
    while (count > 1) {
      this.q2.enqueue(this.q1.dequeue());
      count--;
    }
    const result = this.q1.dequeue();
    while (!this.q2.isEmpty()) {
      this.q1.enqueue(this.q2.dequeue());
    }
    return result;
  }
}

const s = new Stack();
s.push(10);
s.push(20);
console.log(s.pop()); // 20
s.push(30);
console.log(s.pop()); // 30