// function findAllOccurrences(arr, value) {
//     let indexes = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === value) {
//             indexes.push(i);
//         }
//     }
//     return indexes;
// }
// let myArray = [1, 2, 3, 4, 2, 5, 2, 6];
// let value = 2;
// console.log(findAllOccurrences(myArray, value));

function globalLinearSearch(arr, key){
    let results = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            results.push(i)
        }
    }
    // If results array is empty, return -1
    if(!results){
        return -1
    }
 
    return results
}

 let myArray = [1, 2, 3, 4, 2, 5, 2, 6];
 let key = 2;
 console.log(globalLinearSearch(myArray, key));



















