var mySqrt = function(x,p) {
    let l = 0, r = x, ans=0;
    while(l <= r){
        let mid = parseInt((l+r)/2);
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
    if(ans * ans === x){
        return ans;
    }
    let left = 0;
    let right = '';
    for(let i=0;i<p;i++){
        right = right + '9';
    }
    right = parseInt(right);
    let output = 0;
    while(left < right){
        let element = parseInt((left+right)/2);
        mid = parseFloat(ans + '.' + element);
        if(mid * mid > x){
            right = element-1;
        }else{
            left = element+1;
            output = element;
        }
        
    }
    return ans + '.' + output;
};

console.log(mySqrt(29,7));