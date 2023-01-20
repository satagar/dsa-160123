const str1 = "silent";
const str2 = "listen";

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const arr = new Array(26).fill(0);

  for (var i = 0; i < str1.length; i++) {
    const charCode = str1[i].charCodeAt(0) - "a".charCodeAt(0);
    arr[charCode]++;
  }
  for (var i = 0; i < str2.length; i++) {
    const charCode = str2[i].charCodeAt(0) - "a".charCodeAt(0);
    arr[charCode]--;
  }
  for (let i = 0; i < 26; i++) {
    if (arr[i] !== 0) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram(str1, str2));
