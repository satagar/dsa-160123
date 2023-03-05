//Remove Duplicates from sorted linkedlist
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
    RemoveDuplicates(){
        let current = this.head;
        while(current.next != null){
            if(current.data == current.next.data){
                current.next = current.next.next;
            }else{
                current = current.next;
            }
        }
        this.PrintLinkedList();
    }

}

function RemoveDuplicates(){
    let s = new SingleLinkedList();
    s.InsertAtBegnining(7);
    s.InsertAtBegnining(6);
    s.InsertAtBegnining(6);
    s.InsertAtBegnining(6);
    s.InsertAtBegnining(6);
    s.InsertAtBegnining(5);
    s.InsertAtBegnining(4);
    s.InsertAtBegnining(3);
    s.InsertAtBegnining(3);
    s.InsertAtBegnining(2);
    s.InsertAtBegnining(1);
    s.InsertAtBegnining(1);
    s.RemoveDuplicates();
}

console.log(RemoveDuplicates());


