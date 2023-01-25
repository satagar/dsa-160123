let str="ssssaaddal";
let char="s";
let n =str.length
function frequency(str,char){
    let count =0;
    for(let i=0;i<n;i++){
        if(str[i]===char){
            count++;
        }
    }
    return count 
}
console.log(frequency(str,char))