class Node {
    constructor(data) {
        this.data = data;//this paramiters stores the actual data represented by the node
        this.next = null;//this paramiter stores the address of the next adjacent node
    }
}
class singlyLinkedList {
    constructor() {
        this.head = null;
    }
    insertAtHead(data) {
        let newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            newNode.next = this.head
            this.head = newNode;
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

let ll = new singlyLinkedList();
ll.insertAtHead(10);
ll.insertAtHead(20);
ll.insertAtHead(30);
ll.display()

