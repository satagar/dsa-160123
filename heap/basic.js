class Heap {
	constructor(){
  	this.heap = [];
  }
  
  _swap(x,y){
  	const temp = this.heap[x];
    this.heap[x] = this.heap[y];
    this.heap[y] = temp;
  }
  
  insert(value){
  	this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    
    while(currentIndex != 0){
    	const parentIndex = Math.floor((currentIndex - 1)/2);
      
      if(this.heap[parentIndex] > this.heap[currentIndex]) return;
      
      this._swap(parentIndex, currentIndex);
      
      currentIndex = parentIndex;
    }
  }
}

let heap = new Heap();
heap.insert(10);
heap.insert(20);
heap.insert(25);
heap.insert(22);
heap.insert(27);
console.log(heap.heap);