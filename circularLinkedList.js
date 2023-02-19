class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}
class SingleCircularLinkedList {
    constructor() {
        this.tail = null;
        this.size = 0;
    }

    InsertAtBegining(data) {
        let newnode = new Node(data);
        if (this.size == 0) {
            newnode.next = newnode;
            this.tail = newnode;
        } else {
            newnode.next = this.tail.next;
            this.tail.next = newnode;
        }
        this.size++;
    }
    InsertAtEnd(data) {
        let newnode = new Node(data);
        if (this.size == 0) {
            InsertAtBegining(data);
        } else {
            newnode.next = this.tail.next;
            this.tail.next = newnode;
            this.tail = newnode;
            this.size++;
        }
    }
    InsertAtIndex(data, index) {
        let newnode = new Node(data);
        if (this.size < 1) {
            this.InsertAtBegining(data);
        } else {
            let current = this.tail.next;
            while (index - 1 > 0) {
                current = current.next;
                index--;
            }
            newnode.next = current.next;
            current.next = newnode;
            this.size++;
        }
    }
    getElementAtIndex(index) {
        if (this.size <= index) {
            console.log('Out of bound');
        } else {
            let current = this.tail.next;
            while (index > 0) {
                current = current.next;
                index--;
            }
            console.log(current.data);
        }
    }

    deleteAtStart() {
        if (this.size <= 1) {
            this.tail = null;
            this.size = 0;
        } else {
            this.tail.next = this.tail.next.next;
            this.size--;
        }
    }
    deleteAtEnd() {
        if (this.size <= 1) {
            this.tail = null;
            this.size = 0;
        } else {
            var current = this.tail.next;
            while (current.next != this.tail) {
                current = current.next;
            }
            current.next = this.tail.next;
            this.tail = current;
            this.size--;
        }
    }
    deleteAtIndex(index) {
        if (this.size <= index) {
            console.log('Out of bound');
        } else if (this.size == index + 1) {
            this.deleteAtEnd();
        }else if(index == 0){
            this.deleteAtStart();   
        } else {
            var current = this.tail.next;
            while (index - 1 > 0) {
                current = current.next;
                index--;
            }
            current.next = current.next.next;
            this.size--;
        }
    }

    printList() {
        if (this.tail != null) {
            let current = this.tail.next;
            do {
                console.log(current);
                current = current.next;
            } while (current != this.tail.next)
        }
    }
}

var c = new SingleCircularLinkedList();
c.InsertAtBegining(1);
c.InsertAtBegining(6);
c.InsertAtBegining(2);
c.InsertAtIndex(7, 1);
c.deleteAtIndex(5);
c.printList();
