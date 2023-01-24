var arr = [0, 2, 4, -1, -3, 4, -5, 5];

function subArraySum(){
	var sum = 0;
  var output = [];
  var map = new Map();
	for(let i = 0; i < arr.length; i++){
  	sum+=arr[i];
    
    if(sum == 0){
    	output.push({
      	start: 0,
        end: i
      });
    }
    var mapValue = [];
    if(map.has(sum)){
    mapValue = map.get(sum);
    	for(let j = 0; j < mapValue.length; j++){
      	output.push({
        	start: mapValue[j] + 1,
          end:i
        })
      }
    }
    mapValue.push(i);
    map.set(sum, mapValue);
  }
  if(output.length == 0){
  	console.log("No solution exists!")
  }
  else {
  	print(output);
  }
}

function print(arr){
	for(let i = 0; i < arr.length; i++){
  	var obj = arr[i];
    console.log("Index " + obj.start + " to " + obj.end + "\n");
  }
}

subArraySum();