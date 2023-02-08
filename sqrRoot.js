function floorSqrt(num)
{
    let i = 1;
    let result = 1;
     
    while (result <= num)
    {
        i++;
        result = i * i;
    }
    return i - 1;
}
let num = 49;
console.log(floorSqrt(num));