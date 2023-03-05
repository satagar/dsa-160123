//Rotate from Nth position from the linkedlist
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    InsertAtBegnining(data) {
        var node = new Node(data);
        if (this.size == 0) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    PrintLinkedList() {
        var curr = this.head;
        while (curr != null) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

}

function ReverseAtPos(k) {
    let s = new SingleLinkedList();
    s.InsertAtBegnining(6);
    s.InsertAtBegnining(5);
    s.InsertAtBegnining(4);
    s.InsertAtBegnining(3);
    s.InsertAtBegnining(2);
    s.InsertAtBegnining(1);
    console.log(`Print Actual Linked list`);
    s.PrintLinkedList();

    let current = s.head;
    let start = s.head;
    while (current.next != null) {
        if (k - 1 > 0) {
            start = start.next;
            k--;
        }
        current = current.next;
    }
    let temp = start.next;
    current.next = s.head;
    start.next = null;
    s.head = temp;
    console.log(`After Rotate Linked list`);
    s.PrintLinkedList();
}

ReverseAtPos(3);


