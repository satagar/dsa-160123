function Machine(arr, N) {
    let count = 0;
    for (let i = 0; i < N; i++) {
        if(arr[i] == 1 && arr[i+1] == 0){
        let k = i;
        while (k < N) {
            if(arr[k] == 1 && arr[k+1] == 0){
            arr[k] = 0;
            arr[k+1] = 1;
            k += 2;
            console.log(arr);
            }
            k++;
        }
        count++;
        }
    }
    return count;
    
}
let arr = [0, 0, 1, 0, 0, 1, 0, 0, 1];
console.log(Machine(arr, arr.length));
