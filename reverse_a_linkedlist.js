class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.size = null;
    }
    isEmpty() {
        return this.head;
    }
    InsertAtBegining(data) {
        let newnode = new Node(data);
        if (this.size == 0) {
            this.head = newnode;
        } else {
            newnode.next = this.head;
            this.head = newnode;
        }
        this.size++;
    }
    printLinkedList() {
        if (!this.isEmpty()) {
            console.log('No Element in Linked List');
        } else {
            let current = this.head;
            while (current != null) {
                console.log(current.data);
                current = current.next;
            }
        }
    }
    reverse() {
        let current = this.head;
        let prev = null;
        let next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;

        }
        this.head = prev;

    }
}

let s = new SingleLinkedList();
s.printLinkedList();
s.InsertAtBegining(4);
s.InsertAtBegining(3);
s.InsertAtBegining(2);
s.InsertAtBegining(1);
s.InsertAtBegining(0);
s.printLinkedList();
s.reverse();
console.log('After reverse a Linked List');
s.printLinkedList();