var searchRange = function (arr, target) {
    let n = arr.length;
    if (n == 0) {
        return [-1, -1];
    }
    let start = 0, end = n - 1;
    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        if (arr[mid] === target) {
            if(arr[start] < target) start++;
            if(arr[end] > target) end--;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else if(arr[mid] > target) {
            end = mid - 1;
        }
        if(arr[start] === target && arr[end] === target)break;
    }
    if (end < start) {
        return [-1, -1];
    } else {
        return [start, end];
    }
};

// Below code is done by me but same code is witten by two times to find range.So optimal code is above

// var searchRange = function (arr, target) {
//     let n = arr.length;
//     let low,high;
//     if (n == 0) {
//         return [-1, -1];
//     }
//     let start = 0, end = n - 1;
//     let res = [-1, -1];
//     while (start <= end) {
//         let mid = parseInt((start + end) / 2);
//         if (arr[mid] === target) {

//             if (arr[mid - 1] != target) {
//                 low = mid;
//                 start = mid+1;
//             }if(arr[mid + 1] != target){
//                 high  = mid;
//                 end = mid-1;
//             }
//             start = mid+1;
//         } else if (arr[mid] < target) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
//     start =0,end = n-1;
//     while (start <= end) {
//         let mid = parseInt((start + end) / 2);
//         if (arr[mid] === target) {

//             if (arr[mid - 1] != target) {
//                 low = mid;
//                 start = mid+1;
//             }if(arr[mid + 1] != target){
//                 high  = mid;
//                 end = mid-1;
//             }
//             end = mid-1;
//         } else if (arr[mid] < target) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
//     if(low == undefined || high == undefined){
//         return [-1,-1];
//     }else{
//         return [low,high];
//     }
// };

(function () {
    let arr = [5, 7, 7, 8, 10];
    let res = searchRange(arr, 8);
    console.log(res);
})();