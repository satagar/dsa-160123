function uniqueSubstring(str) {
  let map = new Map();
  let left = 0,
    right = 0,
    max = 0;
  for (let right = 0; right < str.length; right++) {
    let ch = str[right];

    if (map.has(ch)) {
      let index = map.get(ch);
      if (index >= left) {
        left = index + 1;
      }
    }
    let count = right - left + 1;
    if (count > max) {
      max = count;
    }
    map.set(ch, right);
  }
  console.log(max);
}

uniqueSubstring("abcabcbb");

uniqueSubstring("pwwkew");

uniqueSubstring("tmmuzxt");
