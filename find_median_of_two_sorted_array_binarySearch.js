var findMedianSortedArrays = function (nums1, nums2) {

    //find the smallest length array
    const len1 = nums1.length;
    const len2 = nums2.length;

    if (len1 > len2) {
        return findMedianSortedArrays(nums2, nums1);
    }
    let low = 0;
    let high = len1;

    while (low <= high) {
        let cut1 = parseInt((low + high) / 2);
        let cut2 = parseInt((len1 + len2) / 2) - cut1;

        let l1 = (cut1 == 0) ? Number.MIN_SAFE_INTEGER : nums1[cut1 - 1];
        let r1 = (cut1 == len1) ? Number.MAX_SAFE_INTEGER : nums1[cut1];
        let l2 = (cut2 == 0) ? Number.MIN_SAFE_INTEGER : nums2[cut2 - 1];
        let r2 = (cut2 == len2) ? Number.MAX_SAFE_INTEGER : nums2[cut2];
        if (l1 > r2) {
            high = cut1 - 1;
        } else if (l2 > r1) {
            low = cut1 + 1;
        } else {
            if ((len1 + len2) % 2 === 0) return (Math.max(l1, l2) + Math.min(r1, r2)) / 2
            else return (Math.min(r1, r2))
        }
    }

};

let nums1 = [1,3];
let nums2 = [2];
console.log(findMedianSortedArrays(nums1,nums2));