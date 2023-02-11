class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class singlyLinkedList {
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
}

let myLinkedList = new singlyLinkedList();
myLinkedList.insertAtBeginning(10);
console.log(myLinkedList.size);
console.log(myLinkedList.head);
myLinkedList.insertAtBeginning(20);
console.log(myLinkedList.size);
console.log(myLinkedList.head);
myLinkedList.insertAtBeginning(30);
console.log(myLinkedList.size);
console.log(myLinkedList.head);
