function intersect(head1, head2){
	let m = 0, n = 0;
  
  let cur = head1;
  while(cur != null){
  	m++;
  }
  
  cur = head2;
  while(cur != null){
  	n++;
  }
  
  let first = head1, second = head2;
  
  if(n > m){
  	first = head2;
    second = head1;
  }
  
  let count = Math.abs(m-n);
  
  while(count != 0){
  	first = first.next;
    count--;
  }
  
  while(first != second){
  	first = first.next;
    second = second.next;
  }
  
  return first;
}