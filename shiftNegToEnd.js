function swap(i,j){
let temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}

function shiftNegative(arr) {
    let point1 =1e9-1,point2 =1e9;
    for (let i = 0; i < arr.length; i++) {
        let min = Math.min(point1,point2);
        if (arr[i] > 0 && (point1 != 1e9-1 || point2 != 1e9)) {
            if(point1 != i && point2 != i){
                swap(i,min);
                if(point1 > point2){
                    point2 = i
                }else{ point1  = i}
            }
        }else if(arr[i] < 0){
            if(point1 === 1e9-1){
                point1 = i;
            }else if(point2 === 1e9){
                point2 =i
            }
        }
    }
    return arr;
}

let arr = [-11,1,2,2,-3,54,-5,7,-9]
console.log(shiftNegative(arr));