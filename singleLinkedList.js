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

  // insertAtEnd(data){
  //   let newNode = new Node(data);
  //   this.size++;

  // }

  printList() {
    var cur = this.head;
    while (cur != null) {
      console.log(cur.data);
      cur = cur.next;
    }
  }
}

let myLinkedList = new singlyLinkedList();
myLinkedList.insertAtBeginning(10);
myLinkedList.insertAtBeginning(20);
myLinkedList.insertAtBeginning(45);
myLinkedList.insertAtBeginning(56);

myLinkedList.printList();
