function linearSearch(arr, len, num) {
    for(let i=0;i<len;i++){
        if(arr[i] === num){
            return i;
        }
    }
    return -1;
}

(function () {
    let arr = [5,3,6,9,3,34,6,65,2,67,1];
    let res = linearSearch(arr, arr.length, 89);
    res === -1 ? console.log('Not Found') : console.log(`Found at index ${res}`);
})();

