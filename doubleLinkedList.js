class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoubleLinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }

    InsertAtBegnining(data) {
      var node = new Node(data);
      if (this.size == 0) {
        this.head = node;
      } else {
        this.head.prev = node;
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
        node.prev = current;
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
          index--;
        }
        node.next = current.next;
        node.prev = current;  
        current.next = node;
        node.next.prev = node;
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
        this.size = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
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
        current.next.prev = current;
        this.size--;
      }
    }
    PrintLinkedList() {
      var curr = this.head;
      while (curr != null) {
        console.log(curr);
        curr = curr.next;
      }
    }
  }
  
  var S = new DoubleLinkedList();
  S.InsertAtBegnining(6);
  S.InsertAtBegnining(2);
  S.InsertAtEnd(5);
  S.InsertAtEnd(1);
  S.InsertAtIndex(9,2);
  S.InsertAtIndex(7,1);
  S.deleteAtEnd();
  S.deleteAtStart();
  S.getElementAtIndex(0);
  S.getElementAtIndex(1);
  S.getElementAtIndex(2);
  S.getElementAtIndex(3);
  S.deleteAtIndex(1);
  S.getElementAtIndex(0);
  S.getElementAtIndex(1);
  S.getElementAtIndex(2);
  S.PrintLinkedList();
  