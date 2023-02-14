function binarySearch(num,l,r){
  if(l>r) return r;

  const mid = l + Math.floor((r-l)/2);
  const value = mid*mid;
  
  if(value == num){
    return mid;
  }
  else if(value > num){
    return binarySearch(num,l,mid-1);
  }
  else {
    return binarySearch(num,mid+1,r);
  }
}



(function sqrtfn(num, p){
  const wholenum = binarySearch(num,0,num/2);
  let multiplier = Math.pow(10,p);
  let left = 1, right = multiplier-1, mid;
  while(left<right){
      mid = left + Math.floor((right-left)/2);
      const temp = wholenum + (mid/multiplier);
      const value = temp*temp;
      // console.log(`${left}:${mid}:${right}:${value}`);
      if(value == num){
        return value;
      }
      else if(value > num){
        right = mid - 1;
      }
      else {
        left = mid + 1;
      }
  }
  return wholenum + mid/multiplier;
  
})(52,3);

