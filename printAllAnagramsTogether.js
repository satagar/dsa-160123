// Given an array of strings, youy need to print all anagrams together
const inputArray = ["data", "atad", "number", "tada", "adat", "bernum"];

function printAnagramsTogether(arr) {
  //creating an empty array to store strings and theior original indexes together
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push({ string: arr[i], index: i });
  }
  //console.log(temp);

  //sorting all the strings of temp array individually
  for (let i = 0; i < temp.length; i++) {
    temp[i].string = temp[i].string.split("").sort().join("");
  }
  //console.log(temp);

  //now, sorting the temp array based on all the strings
  temp.sort((a, b) => {
    return a.string.localeCompare(b.string);
  });
  //console.log(temp);

  //Creating a final array of output where all the anagrams are bundeled together
  let finalArray = [];
  for (let i = 0; i < temp.length; i++) {
    finalArray.push(arr[temp[i].index]);
  }
  return finalArray;
}

console.log(printAnagramsTogether(inputArray));
