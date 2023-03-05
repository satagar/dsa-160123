//Merge two Sorted linkedlist
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

function MergeLinkedList(){
    let s1 = new SingleLinkedList();
    let s2 = new SingleLinkedList();
    s1.InsertAtBegnining(4);
    s1.InsertAtBegnining(3);
    s1.InsertAtBegnining(2);
    s1.InsertAtBegnining(1);
    s2.InsertAtBegnining(5);
    s2.InsertAtBegnining(4);
    s2.InsertAtBegnining(1);

    let head1 = s1.head;
    let head2 = s2.head;
    let s = new SingleLinkedList();
    while(head1 !=null && head2!=null){
        if(head1.data > head2.data){
            s.InsertAtBegnining(head2.data);
            head2 = head2.next;
        }else{
            s.InsertAtBegnining(head1.data);
            head1 = head1.next;
        }
    }
    if(head1 == null){
        while(head2!=null){
            s.InsertAtBegnining(head2.data);
            head2 = head2.next;
        }
    }else{
        while(head1!=null){
            s.InsertAtBegnining(head1.data);
            head1 = head1.next;
        }
    }
    s.PrintLinkedList();
}

console.log(MergeLinkedList());


