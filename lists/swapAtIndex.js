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

    swapAtPosition(i) {
        let count = 1,
            firstPos = this.head,
            firstPrev = null,
            lastPos = this.head,
            lastPrev = null;
        while (count != i) {
            firstPrev = firstPos;
            firstPos = firstPos.next;
            count++;
        }
        let cur = firstPos;
        while (cur.next != null) {
            cur = cur.next;
            lastPrev = lastPos;
            lastPos = lastPos.next;
        }

        if (firstPrev == null) {
            this.head = lastPos;
            lastPrev.next = firstPos;
            const temp = firstPos.next;
            firstPos.next = lastPos.next;
            lastPos.next = temp;
        }
        else if (lastPrev == null) {
            this.head = firstPos;
            firstPrev.next = lastPos;
            const temp = lastPos.next;
            lastPos.next = firstPos.next;
            firstPos.next = temp;
        }
        else {
            firstPrev.next = lastPos;
            lastPrev.next = firstPos;
            const temp = firstPos.next;
            firstPos.next = lastPos.next;
            lastPos.next = temp;
        }
        return this.printList();
    }
}

var x = new SinglyLinkedList();
x.insertAtBeginning(5);
x.insertAtBeginning(4);
x.insertAtBeginning(3);
x.insertAtBeginning(2);
x.insertAtBeginning(1);
console.log(x.printList());
console.log(x.swapAtPosition(2));