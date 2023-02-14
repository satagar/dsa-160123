class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null
    }
}
class doublyll {
    constructor() {
        this.head = null;
        this.length = 0
    }
    insertAtHead(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        newNode.previous = null;
        if (this.head !== null) {
            this.head.prev = newNode
        }
        this.head = newNode;
        this.length++
    }
    display() {
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}

let ll = new doublyll();
ll.insertAtHead(10);
ll.insertAtHead(20);
ll.insertAtHead(30);
ll.display()

