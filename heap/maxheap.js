class Heap{
    constructor(size){
        this.heap=[];
        this.maxSize = size;
        this.heapSize = 0;

    }
    swap(x,y){
    const temp = this.heap[x];
    this.heap[x]=this.heap[y];
    this.heap[y]=temp;
    }
    lchild(n){
        return (2*n + 1);
    }
    rchild(n){
        return (2*n + 2);
    }
    parent(n){
        return parseInt((n-1)/2);
    }
    insert(val){
      if(this.heapSIze === this.maxSize){
        console.log("Overflow:could not insertkey");
        return;
      }
      let i =this.heapSize;
      this.heap[i] = val;
      this.heapSize++;

      while(i !=0 && this.heap[this.parent(i)] < this.heap[i]){
        let temp = this.heap[i];
        this.heap[i]=this.heap[this.parent(i)];
        this.heap[this.parent(i)] = temp
        i= this.parent(i);
      }
    }
    extractMax(){
        if(this.heapSize==0){
            return "extract max function doesn't allow"
        }
        else{
            let val =this.heap[0]
            this.swap(0,this.heap.length - 1)
            this.heap.pop()
            this.heapSize--;
        let index = 0
        while(index < this.heapSize){
           let left = this.lchild(index)
           let right = this.rchild(index)
        if(left >= this.heapSize)break;
        if(right >= this.heaSize){
            if(this.heap[left] < this.heap[index])break;
            this.swap(index,left)
            index = left;
        }
        else{
            let maxIndex = this.heap[left] > this.heap[right] ? left:right;
            if(this.heap[maxIndex] < this.heap[index])break;
            this.swap(maxIndex,index)
            index = maxIndex;
        }
        }
        return val;
        }
       
    }
    iterate(){
        for(let i =0;i<this.heapSize;i++){
            console.log(this.heap[i])
        }
    }
    
}
const h = new Heap(15);
h.insert(70)
h.insert(90)
h.insert(80)
h.insert(60)
h.insert(50)
h.insert(40)
console.log(h.extractMax())
console.log("-------")
h.iterate()

