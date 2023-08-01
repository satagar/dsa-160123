function subSequence(arr){
	let map = new Map();
  
  for(let i = 0; i < arr.length; i++){
  	 if(map.has(arr[i] - 1)){
     	map.set(arr[i], false);
     }
     else {
     	map.set(arr[i], true);
     }
     
     if(map.has(arr[i] + 1)){
     	map.set(arr[i]+1, false);
     }
  }
  let max = 0, maxStartingNumber = 0;
  for(const key of map.keys()){
  	if(map.get(key) == true){
    	let startingNumber = key;
      let count = 0;
      while(map.has(startingNumber + count)){
      	count++;
      }
      if(count > max){
      	max = count;
        maxStartingNumber = startingNumber;
      }
    }
  }
  
  let res = [];
  for(let i = maxStartingNumber; i <= max; i++){
  	res.push(i);
  }
  console.log(res);
}

subSequence([100,4,200,1,3,2]);
