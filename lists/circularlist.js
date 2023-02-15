class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CLL {
    constructor() {
      this.tail = null;
      this.size = 0;
    }
  
    insertInEmptyList(data) {
      let newNode = new Node(data);
      this.size++;
  
      newNode.next = newNode;
      this.tail = newNode;
    }
  
    insertAtBeginning(data) {
      if (this.size == 0) {
        this.insertInEmptyList(data);
        return;
      }
  
      let newNode = new Node(data);
      this.size++;
  
      newNode.next = this.tail.next;
      this.tail.next = newNode;
    }
  
    printList() {
      let current = this.tail.next;
      do {
        console.log(current.data);
        current = current.next;
      } while (current != this.tail.next);
    }
  
    insertAtEnd(data) {
      if (this.size == 0) {
        this.insertInEmptyList(data);
        return;
      }
  
      let newNode = new Node(data);
      this.size++;
  
      newNode.next = this.tail.next;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    insertAtIndex(data,index){
        let newNode = new Node(data);
      this.size++;
      
      // if index == 0 and index == size
      
      let current = this.tail.next;
      
      while(index - 1 > 0){
          index--;
        current = current.next;
      }
      let nextNode = current.next;
      newNode.next = nextNode;
      
      current.next = newNode;
    }
  }
  
  const list = new CLL();
  list.insertAtBeginning(10);
  list.insertAtBeginning(20);
  list.insertAtEnd(30);
  list.insertAtEnd(40);
  list.insertAtIndex(35,3);
  list.printList();
  