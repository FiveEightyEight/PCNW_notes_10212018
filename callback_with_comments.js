console.log('##### WITH FOR LOOP #####')
const grades = [85, 76, 80, 99, 12];
console.log('grades', grades)
let sum = 0;
console.log('initial sum:', sum)
for (let i = 0; i < grades.length; i++) {
  console.log('-------------------')
  console.log('inside for loop, i is:', i)
  console.log('inside for loop, grades['+i+'] is:', grades[i])
  sum += grades[i]
  console.log('inside for loop, updated sum is:', sum)
  console.log('-------------------')
}
console.log(sum/grades.length)


const myLoop = (arr, fn) => {
  console.log('INSIDE MY LOOP')
  console.log('arr is', arr)
  console.log('fn is', fn)
  for(let i = 0; i < arr.length; i++) {
    console.log('-------------------')
    console.log('inside for loop, i is:', i)
    console.log('inside for loop, arr['+i+'] is:', arr[i])
    console.log('inside for loop, calling fn(' + arr[i] + ')')
    fn(arr[i])
    console.log('-------------------')
  }
}

console.log('##### WITH myLoop LOOP #####')
let sum1 = 0;
console.log('ABOUT TO CALL myLoop')
myLoop(grades, (currentGrade) => {
  sum1 = sum1 + currentGrade;
  console.log('UPDATED SUM is,', sum1)
})

