class Node {
	constructor(data){
  	this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
	constructor(){
  	this.head = null;
    this.size = 0;
  }
}

function insertAtB(head, data){
	let temp = new Node(data);
  let cur = head;
  
  if(cur == null){
  	return temp;
  }
  else {
  	temp.next = cur;
    return temp;
  }
}

function printLL(head){
	let cur = head;
  while(cur != null){
  	console.log(cur.data);
    cur = cur.next;
  }
}

function insertAtE(head, data){
	let temp = new Node(data);
  
  let cur = head;
  
  if(cur == null){
  	return temp;
  }
  else {
  	while(cur.next != null){
    	cur = cur.next;
    }
    cur.next = temp;
  }
  return head;
}

function insertAtI(head, data, i){
	let temp = new Node(data);
  
  let cur = head;
  
  if(i == 0) return insertAtB(head,data);
  
  while (i - 1 > 0 && cur != null){
  	cur = cur.next;
    i--;
  }
  
  temp.next = cur.next;
  cur.next = temp;
  return head;
}

function getDataAtI(head,i){
	let cur = head;
  
  while( i > 0 && cur != null){
  	cur = cur.next;
    i--;
  }
  
  return cur.data;
}

function deleteElementAtS(head){
	let cur = head;
  if(cur == null) return null;
  return head.next;
}

function deleteElementAtI(head,i){
	
}

let head = insertAtB(null,10)

head = insertAtE(head,20);

head = insertAtI(head,30,2);

printLL(head);

/* console.log(getDataAtI(head,0)); */

head = deleteElementAtS(head);

printLL(head);