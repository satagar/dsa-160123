var arr = [5, 7, 8, 8,8,8,8, 9, 9]
var endpt = []
var mid = Math.floor(arr.length / 2)
console.log(mid)
var key = 9

function subset(arr, key, mid) {
  debugger
  var i = 2
  while (i == 2) {
    

    if (arr[mid] >= key) {
      for (i = 0; i <=mid; i++) {
        if (arr[i] == key) {
          if (arr[i + 1] == key) {
            endpt.push(arr.indexOf(arr[i + 1]))

          } else if(arr[i-1]==key){
            endpt.push(arr.indexOf(arr[i - 1]))
            }
            else
            {
                return 
            }
          
          endpt.join()
          console.log(i, parseInt(endpt)+1)
          return 
        }
      }
      }
    
    if(arr[mid] <key){
        for(i=mid ; i<=arr.length-1;i++)
        {
           if (arr[i] == key) {
          if (arr[i + 1] == key) {
            endpt.push(arr.indexOf(arr[i + 1]))

          } else if(arr[i-1]==key){
            endpt.push(arr.indexOf(arr[i - 1]))
            }
            else
            {
                return
                }
                endpt.join()
          console.log(i, parseInt(endpt)+1)
          return  
    }
  }
  }
  return -1
  }
}
  subset(arr, key, mid)
