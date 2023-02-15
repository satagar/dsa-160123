class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
 
class doublyLinkedLists {
    constructor() {
        this.head = null;
        this.size = 0
    }

    insertAtEnd(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
            newNode.next = null;
            this.size++;
        }
    }
    display() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}
let dll = new doublyLinkedLists();
dll.insertAtEnd(10);
dll.insertAtEnd(20);
dll.insertAtEnd(30);
dll.display()