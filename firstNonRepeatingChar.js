var str = "relevel";

function firstNonRepeatingChar(str){
	var count = Array(26).fill(0);
  
  var i = 0;
  
  for( i = 0; i < str.length; i++){
  	count[str.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  
  //console.log(count);
  
  for( i = 0; i < str.length; i++){
  	if(count[str.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)] === 1){
    	console.log(str.charAt(i));
      return;
    }
  }
  
  console.log('No non repeating character!');
}

firstNonRepeatingChar(str);