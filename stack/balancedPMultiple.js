class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }

    push(data) {
        this.data[this.top] = data;
        this.top++;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Underflow!");
        }
        this.top--;
        let data = this.data[this.top];
        return data;
    }

    peek() {
        return this.data[this.top - 1];
    }

    print() {
        for (let i = this.top - 1; i >= 0; i--) {
            console.log(this.data[i]);
        }
    }

    isEmpty() {
        return this.top == 0;
    }
}

function balancedBrackets(str) {
    var s = new Stack();
    var map = new Map();
    map.set("{", "}");
    map.set("(", ")");
    map.set("[", "]");

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (map.has(ch)) {
            s.push(ch);
        }
        else {
            if (s.isEmpty()) {
                return false;
            }
            let top = s.pop();
            if (map.get(top) !== ch) {
                return false;
            }
        }
    }
    return s.isEmpty();
}

balancedBrackets("({[]})");
