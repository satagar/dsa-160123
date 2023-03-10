class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
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

    printList() {
        let result = [];
        let current = this.head;
        while (current != null) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }

    reverseAtPos(i) {
        let cur = this.head;
        let count = 1;

        while (count != i) {
            count++;
            cur = cur.next;
        }

        let targetNode = cur;

        while (cur.next != null) {
            cur = cur.next;
        }

        let lastNode = cur;

        lastNode.next = this.head;
        this.head = targetNode.next;
        targetNode.next = null;

        return this.printList();
    }
}

var x = new SinglyLinkedList();
x.insertAtBeginning(6);
x.insertAtBeginning(5);
x.insertAtBeginning(4);
x.insertAtBeginning(3);
x.insertAtBeginning(2);
x.insertAtBeginning(1);
console.log(x.printList());
console.log(x.reverseAtPos(3));