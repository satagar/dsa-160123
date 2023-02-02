(function() {
  let E = 42;
  let arr = [12, 47, 85, 96, 7, 4, 42]
  
  let found = linearSearch(arr, E);

  if (found != -1) {
    console.log(`Element is found ${E}`)
  } else {
    console.log(`Element ins not found `)
  }
})();


function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return key;
    }
  }
  return -1;
}
