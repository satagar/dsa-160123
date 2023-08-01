class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Queue {
    constructor() {
        this.data = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(data) {
        this.data[this.rear] = data;
        this.rear++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.data[this.front];
        this.front++;
        return result;
    }

    isEmpty() {
        return this.front === this.rear;
    }

    print() {
        console.log(this.data);
    }
}

function createTree(arr, i) {
    if (i >= arr.length || arr[i] == null) return;
    let node = new Node(arr[i]);

    node.left = createTree(arr, 2 * i + 1);
    node.right = createTree(arr, 2 * i + 2);

    return node;
}

function bfs(root) {
    let q = new Queue();
    q.enqueue(root);

    while (!q.isEmpty()) {
        let node = q.dequeue();
        if (node != null) {
            console.log(node.data);
            q.enqueue(node.left);
            q.enqueue(node.right);
        }
        else {
            console.log('null');
        }
    }
}

let pre = 0;
function greaterTree(root) {
    if (root == null) return;

    greaterTree(root.right);
    pre += root.data;
    root.data = pre;
    greaterTree(root.left);
}

let root = createTree(
    [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8],
    0
);
bfs(root);
greaterTree(root);
console.log('-----')
bfs(root);