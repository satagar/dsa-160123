class Node {
    constructor(key, value) {
      this.key = key;
      this.value = value;
      this.next = null;
    }
  }
  
  class List {
    constructor() {
      this.head = null;
    }
  
    addToEnd(key, value) {
      const node = new Node(key, value);
  
      if (this.head == null) {
        this.head = node;
        return;
      }
  
      let cur = this.head;
      while (cur.next != null) {
        cur = cur.next;
      }
      cur.next = node;
      return node;
    }
  
    deleteAtBeginning() {
      const result = this.head;
      this.head = this.head.next;
      return result;
    }
  
    deleteNode(node) {
      if (node == this.head) {
        return this.deleteAtBeginning();
      }
  
      let cur = this.head;
      let prev = null;
  
      while (cur != node) {
        prev = cur;
        cur = cur.next;
      }
  
      prev.next = cur.next;
    }
    
    print(){
        let cur = this.head;
        const result = [];
        while(cur != null){
          result.push(cur.value);
          cur = cur.next;
        }
        return result;
      }
  }
  
  class LRU {
    constructor(size) {
      this.size = size;
      this.list = new List();
      this.map = new Map();
    }
  
    put(key, value) {
      if (this.map.has(key)) {
        const node = this.map.get(key);
        this.use(node);
        return;
        // Use below lines to overwrite existing entry of key with new value.
        node.value = value;
        this.map.delete(key);
        this.map.set(key, value);
      }
      if (this.map.size >= this.size) {
        const node = this.list.deleteAtBeginning();
        this.map.delete(node.key);
      }
  
      const tnode = this.list.addToEnd(key, value);
      this.map.set(key, tnode);
    }
  
    get(key) {
      if (this.map.has(key)) {
        const node = this.map.get(key);
        this.use(node);
        return node;
      }
      return null;
    }
  
    use(node) {
      this.list.deleteNode(node);
      this.list.addToEnd(node.key, node.value);
    }
    
    display(){
         console.log(this.list.print());
      }
  }
  
  const lru = new LRU(4);
  lru.put(1, 'a');
  lru.put(2, 'b');
  lru.put(3, 'c');
  lru.put(4, 'd');
  console.log(lru.get(3).value);
  lru.put(5, 'e');
  lru.put(6, 'f');
  console.log(lru.get(4).value);
  lru.display();
  lru.put(7, 'g');
  lru.display();
  