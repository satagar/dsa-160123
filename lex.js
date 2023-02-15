function lex(str) {
    let freq = new Array(26).fill(0);
    let n = str.length;
    let base = "a".charCodeAt(0);
  
    for (let i = 0; i < n; i++) {
      let key = str[i].charCodeAt(0) - base;
      freq[key]++;
    }
  
    for (let i = 1; i < 26; i++) {
      freq[i] += freq[i - 1];
    }
    let result = new Array(n).fill('');
    for (let i = n - 1; i >= 0; i--) {
      let key = str[i].charCodeAt(0) - base;
      result[freq[key] - 1] = str[i];
      freq[key]--;
    }
    return result.join('');
  }
  
  lex("unacademy");
  