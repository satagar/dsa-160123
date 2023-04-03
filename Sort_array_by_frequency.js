//https://leetcode.com/problems/sort-array-by-increasing-frequency/description/
class Heap{
    constructor(comparator){
        this.heap = [];
        this.comparator = comparator;
    }
    parent(i) {
        return parseInt((i - 1) / 2);
    }
    lChild(i) {
        return 2 * i + 1;
    }
    rChild(i) {
        return 2 * i + 2;
    }
    swap(x, y) {
        let temp = this.heap[x];
        this.heap[x] = this.heap[y];
        this.heap[y] = temp;
    }
    insert(value) {
        this.heap.push(value);
        this.bottomUp(this.heap.length - 1);
    }
    bottomUp(index) {
        if (index == 0) return;
        const p = this.parent(index);
        if (this.comparator(this.heap[p], this.heap[index]) || (this.heap[p][1] == this.heap[index][1] && this.heap[p][0] < this.heap[index][0]) ) {
            this.swap(p, index)
            this.bottomUp(p);
        }
    }
    length(){
        return this.heap.length;
    }
    findFrequency(){
        const temp = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.topBottom(0);
        return temp;
    }
    topBottom(index) {
        const leftChild = this.lChild(index);
        const rightChild = this.rChild(index);
        if (this.heap.length-1 < leftChild) return;
        if (this.heap.length-1 < rightChild) {
            if (this.comparator(this.heap[leftChild], this.heap[index]) || (this.heap[leftChild][1] == this.heap[index][1] && this.heap[leftChild][0] < this.heap[index][0])) return;
            this.swap(leftChild, index);
            this.topBottom(leftChild);
        } else {
            let k;
            if(this.comparator(this.heap[leftChild],this.heap[rightChild]) || (this.heap[leftChild][1] == this.heap[rightChild][1] && this.heap[leftChild][0] < this.heap[rightChild][0]))
            {
                k = rightChild;
            }else{
                k = leftChild;
            }
            if(this.comparator(this.heap[k], this.heap[index]) || (this.heap[k][1] == this.heap[index][1] && this.heap[k][0] < this.heap[index][0])) return;
            this.swap(k,index);
            this.topBottom(k);
        }
    }
    search() {
        for (let i = 0; i < this.heap.length; i++) {
            console.log(this.heap[i]);
        }
    }

}


var frequencySort = function(nums) {
    let minComparator = (a, b) => { return a[1] > b[1] };
    const map = new Map();
    for(let val of nums){
        map.set(val, map.get(val) + 1 || 1);
    }
    const h = new Heap(minComparator);
    for(let val of map){
        h.insert(val);
    }
    const len = h.length();
    let sortedArray = [];
    for(let i=0;i<len;i++){
        let temp = h.findFrequency();
        for(let j=0;j<temp[1];j++){
            sortedArray.push(temp[0]);
        }
    }
    return(sortedArray);
};


frequencySort([-1,1,-6,4,5,-6,1,4,1]);