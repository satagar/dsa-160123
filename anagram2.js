var inputArr = ["data", "atad", "number", "tada", "adat", "bernum"];

function printAnagrams(arr) {
  var size = arr.length;
  var map = new Map();

  const sortMethod = (str) =>
    str
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");

  for (var i = 0; i < arr.length; i++) {
    var sortedWord = sortMethod(arr[i]);

    if (map.has(sortedWord)) {
      map.get(sortedWord).push(arr[i]);
    } else {
      map.set(sortedWord, [arr[i]]);
    }
  }
  const result = [];
  for (const sortedAnagramKey of map.keys()) {
    var anagramArray = map.get(sortedAnagramKey);
    result.push(...anagramArray);
  }
  console.log(result);
}

printAnagrams(inputArr);
