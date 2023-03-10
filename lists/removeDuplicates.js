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

    removeDuplicates() {
        let cur = this.head;
        if (cur == null) {
            return this.printList();
        }
        while (cur.next != null) {
            if (cur.data === cur.next.data) {
                cur.next = cur.next.next;
                this.size--;
            } else {
                cur = cur.next;
            }
        }

        return this.printList();
    }
}

var x = new SinglyLinkedList();
x.insertAtBeginning(4);
x.insertAtBeginning(3);
x.insertAtBeginning(3);
x.insertAtBeginning(3);
x.insertAtBeginning(2);
x.insertAtBeginning(2);
x.insertAtBeginning(1);
console.log(x.printList());
console.log(x.removeDuplicates());
