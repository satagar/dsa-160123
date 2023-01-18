const str1 = "silent";
const str2 = "listen";

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const arr = new Array(26).fill(0);

  const str1AsArray = str1.split("");

  for (var i = 0; i < str1AsArray.length; i++) {
    const charCodeIndex = str1AsArray[i].charCodeAt(0) - "a".charCodeAt(0);
    arr[charCodeIndex]++;
  }

  for (var i = 0; i < str2.length; i++) {
    const charCodeIndex = str2[i].charCodeAt(0) - "a".charCodeAt(0);
    arr[charCodeIndex]--;
  }

  for (var i = 0; i < 26; i++) {
    if (arr[i] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram(str1, str2));
