class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertAtStart(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    printLinkedList() {
        let current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
  
  insertAtEnd(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            this.length++
            return;
        }

        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }

        current.next = newNode;
        this.length++;
    }
}

let l1 = new SinglyLinkedList();
l1.insertAtStart(10);
console.log("------------")
l1.printLinkedList();
l1.insertAtStart(20);
console.log("-------------")
l1.printLinkedList();
l1.insertAtStart(30);
console.log("--------------")
l1.printLinkedList()

l1.insertAtEnd(30);
console.log("--------------")
l1.printLinkedList()

