function maxFreq(str) {
    const map = new Map();

    for (let i = 0; i < str.length; i++) {
        const ch = str[i].charCodeAt(0);
        if (map.has(ch)) {
            let count = map.get(ch);
            map.set(ch, count + 1);
        }
        else {
            map.set(ch, 1);
        }
    }

    let result = 0, ch;
    for (let key of map.keys()) {
        let value = map.get(key);
        if (value > result) {
            result = value;
            ch = key;
        }
    }

    return String.fromCharCode(ch);
}

console.log(maxFreq("abbfed"));
console.log(maxFreq("wefeqeeeb"));