/*
    @func findMax
    @param {array}
    @returns {number}
    @desc - find largest number in array
    @example - findMax([1,2,3,99,4]); // 99
*/

const findMax = arr => {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (arr.length === 0) {
        return NaN;
    }

    let max = arr[0];
    for (let i = 1; i < arr.length; i = i + 1) {
        if (max < arr[i] && typeof arr[i] === "number") {
            max = arr[i];
        }
    }

    return max;
}

/*
    INPUTS          |           OUTPUTS

    any valid input     Number
    not array           NaN
    []                  NaN
    [9, 8, 343, 12]     343
    [1, 2, "99"]        2
    [-9, -8, -78, -1]   -1
    [3, 4, 8, 8, -1]    8
    [1, 1, 1, 1, 1]     1
    [7, 8, 9.9, 2]      9.9
    [1,2,NaN]           2
*/

// any valid input     Number
console.log(findMax([1,2,3]));

// not array           NaN
console.log(findMax('this is garbage lol'));

// []                  NaN
console.log(findMax([]));

// [9, 8, 343, 12]     343
console.log(findMax([9, 8, 343, 12]))

// [1, 2, "99"]        2
console.log(findMax([1, 2, "99"]))

//    [-9, -8, -78, -1]   -1
console.log(findMax([-9, -8, -78, -1]))

// [3, 4, 8, 8, -1]    8
console.log(findMax([3,4,8,8,-1]))

// [1, 1, 1, 1, 1]     1
console.log(findMax([1,1,1,1,1]))

//     [7, 8, 9.9, 2]      9.9
console.log(findMax([7, 8, 9.9, 2]))

//     [1,2,NaN]           2
console.log(findMax([1, 2, NaN]))

//     [NaN, NaN, NaN]     NaN
console.log(findMax([NaN, NaN, NaN]))
