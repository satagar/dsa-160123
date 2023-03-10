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

var x = new SinglyLinkedList();
x.insertAtBeginning(4);
x.insertAtBeginning(3);
x.insertAtBeginning(2);
x.insertAtBeginning(1);
console.log(x.printList());

var y = new SinglyLinkedList();
y.insertAtBeginning(5);
y.insertAtBeginning(4);
y.insertAtBeginning(1);
console.log(y.printList());

function mergeList(l1, l2) {
    const result = new SinglyLinkedList();

    let head1 = l1.head,
        head2 = l2.head;
    let cur = null;
    while (head1 != null && head2 != null) {
        let temp;
        if (head1.data < head2.data) {
            temp = new Node(head1.data);
            head1 = head1.next;
        } else {
            temp = new Node(head1.data);
            head2 = head2.next;
        }
        if (result.head == null) {
            result.head = temp;
            cur = temp;
        } else {
            cur.next = temp;
            cur = cur.next;
        }
    }
    while (head1 != null) {
        const temp = new Node(head1.data);
        cur.next = temp;
        cur = cur.next;
        head1 = head1.next;
    }
    while (head2 != null) {
        const temp = new Node(head2.data);
        cur.next = temp;
        cur = cur.next;
        head2 = head2.next;
    }
    return result.printList();
}

console.log(mergeList(x, y));