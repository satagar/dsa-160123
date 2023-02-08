var mySqrt = function(x,p) {
    let l = 0, r = x, ans=0;
    while(l <= r){
        let mid = (l+r)/2;
        if((mid*mid) === x){
            ans = mid;
            break;
        }
        else if((mid*mid) > x){
            r = mid-1;
        }else if((mid*mid) < x){
            ans = mid;
            l = mid+1;
        }
    }
    let precision = 0.1;
    for(let i=0;i<p;i++){
    while(ans * ans <= x){
            ans = ans + precision;
        }
        ans = ans - precision;
        precision = precision / 10;
    }
    return ans.toFixed(p);
};

console.log(mySqrt(24,4));