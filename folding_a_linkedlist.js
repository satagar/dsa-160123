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
    reverse(head) {
        let current = head;
        let prev = null;
        let next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;

        }
        return prev;

    }
    reorder() {
        let slow = this.head;
        let fast = this.head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
       
        let first = this.head;
        let second = slow.next;
        slow.next = null;

        second = this.reverse(second);
        console.log(second);
        while (second != null) {
            let a = first.next;
            let b = second.next;

            first.next = second;
            second.next = a;

            first = a;
            second = b;
        }

    }
}

let s = new SingleLinkedList();
//s.printLinkedList();
s.InsertAtBegining(5);
s.InsertAtBegining(4);
s.InsertAtBegining(3);
s.InsertAtBegining(2);
s.InsertAtBegining(1);
s.printLinkedList();
console.log('After folding/Reorder a Linked List');
s.reorder();
s.printLinkedList();