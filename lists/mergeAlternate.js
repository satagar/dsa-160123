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
}

function merge(x, y) {
    let head1 = x.head, head2 = y.head;
    while (head1 != null && head2 != null) {
        const temp1 = head1.next;
        const temp2 = head2.next;
        head1.next = head2;
        head2.next = temp1;
        head1 = temp1;
        head2 = temp2;
        // y.head = head2;
    }
    if (head2 != null) {
        y.head = head2;
    }
    else {
        y.head = null;
    }
    console.log(x.printList());
    console.log(y.printList());
}

var x = new SinglyLinkedList();
x.insertAtBeginning(7);
x.insertAtBeginning(5);
x.insertAtBeginning(3);
x.insertAtBeginning(1);
console.log(x.printList());
var y = new SinglyLinkedList();
y.insertAtBeginning(9);
y.insertAtBeginning(8);
y.insertAtBeginning(6);
y.insertAtBeginning(4);
y.insertAtBeginning(2);
console.log(y.printList());
merge(x, y);
