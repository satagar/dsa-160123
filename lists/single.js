class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtBeginning(data) {
    let newNode = new Node(data);
    this.size++;
    if (this.head == null) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  printList() {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }

  insertAtEnd(data) {
    let cur = this.head;
    let newNode = new Node(data);
    this.size++;
    if (this.head == null) {
      this.head = newNode;
      return;
    }

    while (cur.next != null) {
      cur = cur.next;
    }

    cur.next = newNode;
  }

  reverse() {
    let prev = null;
    let cur = this.head;
    let next = null;

    while (cur != null) {
      next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.head = prev;
  }

  shuffle() {
    let slow = this.head;
    let fast = this.head;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let second = slow.next;
    let first = this.head;
    slow.next = null;

    second = reverse(second);

    while (second != null) {
      let a = first.next;
      let b = second.next;

      first.next = second;
      second.next = a;

      first = a;
      second = b;
    }
  }
}

function reverse(head) {
  let prev = null;
  let cur = head;
  let next = null;

  while (cur != null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

var x = new SinglyLinkedList();
x.insertAtBeginning(5);
x.insertAtBeginning(4);
x.insertAtBeginning(3);
x.insertAtBeginning(2);
x.insertAtBeginning(1);
x.printList();
x.shuffle();
x.printList();
