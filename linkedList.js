class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  InsertAtBegnining(data) {
    var node = new Node(data);
    if (this.size == 0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  InsertAtEnd(data) {
    var node = new Node(data);
    if (this.size == 0) {
      this.head = node;
    } else {
      var current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  InsertAtIndex(data, index) {
    var node = new Node(data);
    if (index == 0) {
      InsertAtBegnining(data);
    } else {
      var current = this.head;
      while (index - 1 > 0) {
        current = current.next;
        index--
      }
      node.next = current.next;
      current.next = node;
      this.size++;
    }

  }
  getElementAtIndex(index) {
    if (this.size === 0 || this.size <= index) {
      console.log('Array out of index');
    } else {
      var current = this.head;
      while (index > 0) {
        current = current.next;
        index--;
      }
      console.log(current.data);
    }
  }

  deleteAtStart() {
    if (this.size < 1) {
      console.log('No node exists');
      this.head = null;
      this.size = null
    } else {
      this.head = this.head.next;
      this.size--;
    }
  }
  deleteAtEnd() {
    if (this.size < 1) {
      this.head = null;
      this.size = null
    } else {
      var current = this.head;
      while(current.next.next != null){
        current = current.next;
      }
      current.next = null;
      this.size--;
    }
  }
  deleteAtIndex(index) {
    if (this.size < 1) {
      this.head = null;
      this.size = null
    } else {
      var current = this.head;
      while(index -1 > 0){
        current = current.next;
      }
      current.next = current.next.next;
      this.size--;
    }
  }
  PrintLinkedList() {
    var curr = this.head;
    while (curr != null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }

}

var S = new SingleLinkedList();
S.InsertAtBegnining(6);
S.InsertAtEnd(2);
S.InsertAtEnd(4);
S.InsertAtBegnining(5);
S.InsertAtIndex(21, 2);
S.PrintLinkedList();
S.getElementAtIndex(2);
S.deleteAtStart();
S.deleteAtStart();
console.log('After delete');
S.PrintLinkedList();

//5 6 2 4
