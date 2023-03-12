class TreeNode{
    constructor(data){
        this.data = data;
        this.descendant = [];
    }
}

const grandparent = new TreeNode('grandparent');
const parent = new TreeNode('parent');
const child = new TreeNode('child');

grandparent.descendant.push(parent);
parent.descendant.push(child);

console.log(grandparent);