function SumUsingRecursion(n,sum){
  if(n<=0) return sum
 return   SumUsingRecursion(n-1,sum+n)
}

console.log(SumUsingRecursion(10,0))