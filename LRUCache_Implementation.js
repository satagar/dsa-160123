class LRUCache {
    constructor(n) {
      this.size = n;
      this.q = [];
      this.map = new Map();
    }
   
    refer(x) {
        if(!this.map.has(x)){
            if(this.q.length === this.size){
                let ele = this.q[this.q.length-1];
                this.q.pop();
                this.map.delete(ele);
            }
        }else{
            this.q.splice(this.q.indexOf(x),1);
        }
        this.q.unshift(x);
        this.map.set(x,0);
    }
    display() {
      console.log(this.q);
    }
  }
   
  const cache = new LRUCache(3);
   
  cache.refer(1);
  cache.refer(2);
  cache.refer(3);
  cache.refer(2);
  //cache.refer(5);
  cache.display();