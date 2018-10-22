const average = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum / arr.length;
}

let globalSum = 0;
const addToGlobalSum = (num) => {
  globalSum = globalSum + num;
}

let globalSquareSum = 0;
const addToGlobalSquareSum = (num) => {
  globalSquareSum = globalSquareSum + (num**2);
}
const myLoop = (arr, callback) => {
  if (typeof callback !== "function") {
    // do something/...
  }

  
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}

console.log("BEFORE", globalSum)
myLoop([1,2,3,4,5], addToGlobalSum);
console.log("AFTER", globalSum)

console.log("BEFORE", globalSquareSum)
myLoop([1,2,3,4,5], (num) => {
  console.log('lol this is running in a callback!')
  console.log(num)
});
myLoop([1,2,3,4,5], function(num) {
  console.log('lol this is running in a callback!')
  console.log(num)
});
console.log("AFTER", globalSquareSum)


console.log(average([1,2,3,4,5]))
myLoop(["a", "b", "c", "d", "e"])
