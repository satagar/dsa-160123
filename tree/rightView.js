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

function rightView(root) {
    let q = new Queue();
    q.enqueue(root);
    q.enqueue('$');
    let prev = null;
    while (!q.isEmpty()) {
        let node = q.dequeue();

        if (node == '$' && !q.isEmpty()) {
            q.enqueue('$');
        } else {
            if (node.left != null)
                q.enqueue(node.left);
            if (node.right != null)
                q.enqueue(node.right);
        }
        if (node == '$') {
            console.log(prev.data);
        }
        prev = node;
    }
}

let root = createTree([1, 2, 3, null, 6, 4, 5, null, null, null, null, 7], 0);
rightView(root);
