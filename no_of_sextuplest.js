function Search(arr, x) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        if (arr[mid] == x) {
            if (arr[left] < x) left++;
            if (arr[right] > x) right--;
        } else if (arr[mid] > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

        if (arr[left] == x && arr[right] == x) {
            break;
        }
    }
    if (right < left) {
        return 0;
    } else {
        return ((right-left)+1);
    }
}

function findSexTuplets(arr, len) {
    let RHS = new Array();
    for (let i = 0; i < len; i++) {
        if (arr[i] != 0) {
            for (let j = 0; j < len; j++) {
                for (let k = 0; k < len; k++) {
                    let element = arr[i] * (arr[j] + arr[k]);
                    RHS.push(element);
                }
            }
        }

    }

    RHS.sort((a, b) => {
        return a - b;
    })

    let count = 0;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            for (let k = 0; k < len; k++) {
                let element = (arr[i] * arr[j]) + arr[k];
                let res = Search(RHS,element);
                count += res;
            }
        }
    }
    console.log(count);
}

console.log(findSexTuplets([2, 3], 2));
console.log(findSexTuplets([1], 1));
console.log(findSexTuplets([1,-1], 2));