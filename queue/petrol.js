class Station {
	constructor(petrol, distance){
  	this.petrol = petrol;
    this.distance = distance;
  }
}

function isCircular(arr){
	let n = arr.length;
  let start = 0, end = 1;
  let cur_petrol = arr[start].petrol - arr[start].distance;
  
  while(end != start && cur_petrol < 0){
  	while(cur_petrol < 0 && start != end){
    	cur_petrol -= arr[start].petrol - arr[start].distance;
    	start = (start + 1) % n;
      
      if(start == 0){
      	return -1;
      }
    }
  	
    cur_petrol += arr[end].petrol - arr[end].distance;
    end = (end + 1) % n;
  }
  return start;
}

let arr = [
	new Station(4,6),
  new Station(6,5),
  new Station(7,3),
  new Station(4,5)
];

let result = isCircular(arr);
console.log(result);