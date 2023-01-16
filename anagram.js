var inputArr = ['data', 'atad', 'number', 'tada', 'adat', 'bernum'];



class Anagram {
	constructor(str, index)
  {
  	this.str = str;
    this.index = index;
  }
}

function printAnagrams(arr){
	var size = arr.length;
  //var anagramArray = [];
  var anagramArray = Array(size).fill(null);
  var i = 0;
  for(i = 0; i < size; i++) {
  	anagramArray[i] = new Anagram(arr[i], i);
  }
  
  // Sorting
  const sortMethod = str => str.split('').sort((a,b) => a.localeCompare(b)).join('');
  var i = 0;
  for(i = 0; i < size; i++) {
  	anagramArray[i].str = sortMethod(anagramArray[i].str);
  }
  anagramArray.sort((a,b) => a.str.localeCompare(b.str));
  
  for(i = 0; i < size; i++) {
  	console.log(arr[anagramArray[i].index]);
  }
  
  //console.log(anagramArray);
}

printAnagrams(inputArr);