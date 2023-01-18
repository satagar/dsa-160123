function freqRecursive(tChar, str){
	// Base condition
  if(str.length === 0){
  	return 0;
  }
  
  let resultCount = 0;
  
  if(str[0] === tChar){
  	resultCount = 1
  }
  
  const count = freqRecursive(tChar, str.substr(1));
  
  return resultCount+count;
}

console.log(freqRecursive('r', 'relevel'));
