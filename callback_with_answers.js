const myLoop = (arr, fn) => {
  for(let i = 0; i < arr.length; i++) {
    fn(arr[i])
  }
}

const capitals = ["albany", "trenton", "sacramento", "providence"];
// swap the forloop with a myloop
// for (let k = 0; k < capitals.length; k++) {
//   capitals[k] = capitals[k].slice(0,1).toUpperCase() + capitals[k].slice(1);
// }
myLoop(capitals, (currentCapital) => {
  console.log('currentCapital is', currentCapital)
  console.log(currentCapital.slice(0,1).toUpperCase() + currentCapital.slice(1))
})
console.log(capitals)

const grades = [85, 76, 80, 99, 12];
let sum = 0;
myLoop(grades, (currentGrade) => {
  console.log('currentGrade,', currentGrade)
  sum += currentGrade
})
console.log(sum/grades.length);
