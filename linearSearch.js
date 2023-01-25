let E=42;
let found = 0;
let arr =[12,47,85,96,7,4,42]
for(let i=0;i<arr.length;i++){
    if(arr[i]===E){
        found=1;
      break;
    }
}
if(found){
    console.log(`Element is found ${E}`)
}
else{
    console.log(`Element ins not found `)
}