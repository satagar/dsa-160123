function groupAnagram(arr) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];

        let key = str.split("").sort().join("");

        if (map.has(key)) {
            let value = map.get(key);
            value.push(str);
            map.set(key, value);
        }
        else {
            map.set(key, [str]);
        }
    }

    const result = [];
    for (let key of map.keys()) {
        result.push(map.get(key));
    }
    console.log(result);
}

groupAnagram(["cat", "tac", "dog", "act", "tea", "god"]);