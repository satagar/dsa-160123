class Node {
    constructor(data){
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor(){
      this.head = null;
      this.size = 0;
    }
    
    insertAtBeginning(data){
      let newNode = new Node(data);
      this.size++;
      if(this.head == null){
        this.head = newNode;
        return;
      }
      
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    
    printList(){
      let current = this.head;
      while(current != null){
        console.log(current.data);
        current = current.next;
      }
    }
    
    insertAtEnd(data){
      let cur = this.head;
      let newNode = new Node(data);
      this.size++;
      if(this.head == null){
        this.head = newNode;
        return;
      }
      
      while(cur.next != null){
        cur = cur.next;
      }
      
      cur.next = newNode;
      newNode.prev = cur;
    }
    
    insertAtIndex(data, index){
      let newNode = new Node(data);
      this.size++;
      
      if(index < 0 || index > this.size){
        return;
      }
      
      let cur = this.head;
      
      if(index == 0){
        return this.insertAtBeginning(data);
      }
      
      let prev = cur.prev;
      while(index > 0){
        prev = cur;
        cur = cur.next;
        index--;
      }
      
      prev.next = newNode;
      newNode.prev = prev;
      newNode.next = cur;
      if(cur != null){
        cur.prev = newNode;
      }
    }
  }
  
  var x = new DoublyLinkedList();
  x.insertAtBeginning(10);
  x.insertAtBeginning(20);
  x.insertAtEnd(30);
  x.insertAtEnd(40);
  x.insertAtIndex(25,4);
  x.printList();