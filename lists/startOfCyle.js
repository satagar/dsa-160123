function startofcycle(head){
	let slow = head;
  let fast = head.next;
  
  while(fast != slow){
  	fast = fast.next.next;
    slow = slow.next;
  }
  
  slow = head;
  
  while(slow != fast){
  	slow = slow.next;
    fast = fast.next;
  }
  
  return fast;
}