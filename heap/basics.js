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
  
  extractMax(){
  	const returnValue = this.heap[0];
    this._swap(0, this.heap.length - 1);
    this.heap.pop();
    
    let n = 0;
    
    while( n < this.heap.length){
    	const leftIndex = (2*n) + 1;
      const rightIndex = (2*n) + 2;
      
      if(leftIndex >= this.heap.length) break;
      
      if(rightIndex >= this.heap.length){
      	if(this.heap[leftIndex] < this.heap[n]) break;
        
        this._swap(leftIndex, n);
        
        n = leftIndex;
      }
      else {
      	const maxIndex = this.heap[leftIndex] > this.heap[rightIndex] ? leftIndex : rightIndex;
        
        if(this.heap[maxIndex] < this.heap[n]) break;
        
        this._swap(maxIndex, n);
        
        n = maxIndex;
      }
    }
    
    return returnValue;
  }
  
  heapify(arr){
  	this.heap = arr;
    let n = arr.length - 1;
    
    while( n >= 0){
    	this._fixChildRecursively(n);
      n--;
    }
  }
  
  _fixChildRecursively(n){
  	const left = (2*n) + 1;
    const right = (2*n) + 2;
    
    if(left >= this.heap.length) return;
    
    if(right >= this.heap.length){
    	if(this.heap[left] > this.heap[n]){
      	this._swap(left, n);
        this._fixChildRecursively(left);
      }
    }
    else {
    	const max = this.heap[left] > this.heap[right] ? left : right;
      if(this.heap[max] > this.heap[n]){
      	this._swap(max, n);
        this._fixChildRecursively(max);
      }
    }
  }
}

let heap = new Heap();
 heap.insert(12);
heap.insert(21);
heap.insert(15);
heap.insert(54);
heap.insert(64); 
// heap.heapify([12,21,15,56,64]);
console.log(heap.extractMax());
console.log(heap.extractMax());
