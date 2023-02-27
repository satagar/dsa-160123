function median(A, B) {
    let m = A.length,
      n = B.length;
  
    let start = 0,
      end = m;
    let mergedArrayMid = Math.floor((m + n + 1) / 2);
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      let leftA = mid <= 0 ? Number.MIN_VALUE : A[mid - 1];
      let rightA = mid == m ? Number.MAX_VALUE : A[mid];
      let leftB =
        mergedArrayMid == mid ? Number.MIN_VALUE : B[mergedArrayMid - mid - 1];
      let rightB =
        mergedArrayMid - mid == n ? Number.MAX_VALUE : B[mergedArrayMid - mid];
  
      if (leftA <= rightB && leftB <= rightA) {
        if ((m + n) % 2 == 0) {
          return Math.floor(
            (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2
          );
        } else {
          return Math.max(leftA, leftB);
        }
      } else if (leftA > rightB) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return 0;
  }
  
  console.log(median([7, 12, 14, 15], [1, 2, 3, 4, 9, 11]) == 8);
  console.log(
    median(
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15, 16, 17, 18, 19]
    ) == 10
  );
  console.log(median([900], [5, 8, 10, 20]) == 10);
  console.log(median([-5, 3, 6, 12, 15], [-12, -10, -6, -3, 4, 10]) == 3);
  console.log(median([2, 3, 5, 8], [10, 12, 14, 16, 18, 20]) == 11);