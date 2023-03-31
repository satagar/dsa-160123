class heap {
    constructor(comparator){
        this.data=[];
        this.comparator = comparator
    }
parent(i){
    return parent(i-1)/2
}
lchild(i){
    return 2*i+1
}
rchild(i){
    return 2*i+2
}
insert(val){
    this.heap.push(val)
    this.bottomup[this.heap.length - 1]
}
swap(x,y){
    const temp =this.data[x];
    this.data[x]=this.data[y];
    this.data[y]=temp;
}
bottomup(index){
    
}
}
let minComparator =(a,b)=> a > b;