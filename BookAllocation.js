let n=4
let m=2
let arr =[12,34,67,90]

function bookAllocation(n, m , arr) {

    let low = arr[0];
    let high = 0;

    for(let i = 0; i < arr.length; i++) {
        high += arr[i]
    }

    let ans = 0;
    while(low <= high) {

        //here mid represents atmost no of pages a student can read
        let mid = parseInt((low + high) / 2);

        if(good(mid, n, m , arr)) {
            ans = mid;

            high = mid - 1;
        }else{
            low = mid + 1;
        }
    
    }
    return ans;
}

function good(mid, n, m, arr) {
    //Each student can read atmost mid no of pages

    let stud = 1;
    let csum = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i]  > mid) {
            return false
        }
        if(csum + arr[i] > mid) {
            stud++;
            csum = arr[i]

            if(stud > m) {
                return false;
            }
        }else{
            csum += arr[i];
        }
    }

    return true;

}

console.log(bookAllocation(n, m, arr));
