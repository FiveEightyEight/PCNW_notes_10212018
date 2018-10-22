const myLoop = (arr, fn) => {
  // arr => ["a", "b", "c", "d", "e"]
  for(let i = 0; i < arr.length; i++) {
    // i = 0, arr[0] => "a", fn("a"), ("a") => capitalizedLtrs.push("a".toUpperCase())
    // i = 1, arr[1] => "b", fn("b"), ("b") => capitalizedLtrs.push("a".toUpperCase())
    // i = 2, arr[2] => "c", fn("c"), ("c") => capitalizedLtrs.push("c".toUpperCase())
    // i = 3, arr[3] => "d", fn("d"), ("d") => capitalizedLtrs.push("d".toUpperCase())
    // i = 4, arr[4] => "e", fn("e"), ("e") => capitalizedLtrs.push("e".toUpperCase())
    fn(arr[i])
  }
}

// letters => ["a", "b", "c", "d", "e"]
for (let j = 0; j < letters.length; j++) {
  // i = 0, letters[0] => "a", capitalizedLtrs.push(letters[0] => "a".toUpperCase())
  // i = 1, letters[1] => "b", capitalizedLtrs.push(letters[0] => "a".toUpperCase())
  // i = 2, letters[2] => "c", capitalizedLtrs.push(letters[0] => "a".toUpperCase())
  // i = 3, letters[3] => "d", capitalizedLtrs.push(letters[0] => "a".toUpperCase())
  // i = 4, letters[4] => "e", capitalizedLtrs.push(letters[0] => "a".toUpperCase())
  capitalizedLtrs.push(letters[j].toUpperCase())
}

const letters = ["a", "b", "c", "d", "e"];
const capitalizedLtrs = []
myLoop(letters, (letter) => {
  capitalizedLtrs.push(letter.toUpperCase())
})
console.log(capitalizedLtrs)


