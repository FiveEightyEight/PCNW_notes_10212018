/*
    @func removeNegatives
    @param {array} arr
    @returns {array}
    @desc - takes all engative numbers and makes positive
    @example - removeNegatives([-3,-2,1,2,3,-4]); // [3,2,1,2,3,4]
*/
const removeNegatives = arr => {
    // check to see if input param is array
    if (!Array.isArray(arr)) {
        throw new Error('input must be array');
    }

    // check to see if array has valyes
    if (arr.length === 0) {
        return [];
    }

    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(Math.abs(arr[i]));
        /*
        if (arr[i] < 0) {
            newArr.push(arr[i] * -1)
        }
        else {
            newArr.push(arr[i]);
        }
        */
    }

    return newArr;
}
console.log('------ TESTS.removeNegatives ------');
console.table({'Passing in empty array returns empty array':
    Array.isArray(removeNegatives([])) && removeNegatives([]).length === 0})
try {
    removeNegatives('abc');
    console.table({'Passing in non array values throws error': false});
}
catch(e) {
    console.table({'Passing in non array values throws error': true});
}
console.log('Passing in only positive array values returns positive array values\n',
    removeNegatives([100, 99, 98]), [100, 99, 98]) // expect to get 
console.log('Passing in only negatives array values returns positive array values\n',
    removeNegatives([-100, -99, -98]), [100, 99, 98]) // expect to get 
console.log('Passing in positive/negative values returns positive array values\n',
    removeNegatives([100, -99, 98]), [100, 99, 98]) // expect to get 

/*
    @func findVal
    @param {array} arr
    @param {anything} val
    @returns {number}
    @desc - checks each value of array and compares to val
            if found, returns the INDEX at which val was found
            otherwise, returns -1
    @example
        findVal([1,2,3,4], 1); // 0
        findVal([1,2,3,4], 4); // 3
        findVal([1,2,3,4], 9); // -1
*/
const findVal = (arr, needle) => {
    if (!Array.isArray(arr)) {
        throw new Error('input must be array');
    }

    if (typeof needle === "undefined") {
        throw new Error('needle must be defined');
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === needle) {
            return i;
        }
    }

    return -1;
}


console.log('------ TESTS.findVal ------');
try {
    findVal("lol this is so wrong", "test");
    console.table({"if first param is not array, throw Err": false});
}
catch (e) {
    console.table({"if first param is not array, throw Err": true});
}
try {
    findVal([1,2,3]);
    console.table({"if second param is undefined, throw Err": false});
}
catch (e) {
    console.table({"if second param is undefined, throw Err": true});
}
console.table({
    "if second param not found, return -1": findVal([1,2], 9) === -1,
    "if second param IS found, return index": findVal(["a","b"], "a") === 0,
});

/*
    @func removeOdds
    @param {array} arr
    @returns {array}
    @desc - checks each value of array
            if odd, remove from array
            otherwise, keep in array
    @example
        removeOdds([1,2,3,4]); // [2,4]
        removeOdds([1,"2",3,4]); // [4]
*/
const removeOdds = arr => {
    if (!Array.isArray(arr)) {
        throw new Error("input must be array");
    }

    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            // this will skip the rest of the loop and go
            // to the next iteration...
            continue;
        }
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log('------ TESTS.removeOdds ------');
try {
    removeOdds("lol this is so wrong");
    console.table({"if first param is not array, throw Err": false});
}
catch (e) {
    console.table({"if first param is not array, throw Err": true});
}

console.table({
    "if all odds, return empty array": removeOdds([1,3,5]).length === 0,
    "if all evens, return same array": removeOdds([4])[0] === 4,
    "if strings passed in, ignore": removeOdds(["4"]).length === 0,
});

/*
    @func addSquares
    @param {array} arr
    @returns {array}
    @desc - for each value in array, square it then add to array
    @example - 
        addSquares([1,2,3,4); // [1,2,3,4,1,4,9,16]
*/
const addSquares = arr => {
    if (!Array.isArray(arr)) {
        throw new Error('array is required');
    }

    const newArr = new Array(arr.length*2);
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
        newArr[i + arr.length] = arr[i]**2;
    }

    return newArr;
}

console.log('------ TESTS.addSquares ------');
try {
    addSquares("lol this is so wrong");
    console.table({"if first param is not array, throw Err": false});
}
catch (e) {
    console.table({"if first param is not array, throw Err": true});
}

console.table({
    "the returned array is double in length of input":
        addSquares([1]).length === 2,
    "the return array contains squares of each input":
        addSquares([12, 13])[2] == 144 && addSquares([12, 13])[3] === 169,
        // [12, 13] => [12, 13, 144, 169]
});

/*
    @func doubleify
    @param {array} arr
    @returns {array}
    @desc - take each value of array, add same value right after
    @example - doubleify([1,2,3,4); // [1,1,2,2,3,3,4,4]
*/

/*
    INPUTS      |       OUTPUTS
    valid input     Array
    [1]             [1,1]
    1               []
    ["a"]           ["a", "a"]
    []              []
    [undefined]     [undefined, undefined]
*/

// doubleify(1)

const doubleify = (arr) => {

    if (Array.isArray(arr) === false) {
        return [];
    }

    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
        newArr.push(arr[i])

        // another way: newArr.push(arr[i], arr[i])
    }
    return newArr;
}

/*
    INPUTS      |       OUTPUTS
    valid input     Array
    [1]             [1,1]
    1               []
    ["a"]           ["a", "a"]
    []              []
    [undefined]     [undefined, undefined]
*/

console.log(doubleify([1,2,3])) // gotta be an array
console.log(doubleify([1])) // [1,1]
console.log(doubleify(null)) // []
console.log(doubleify(["a"])) // ["a", "a"]
console.log(doubleify([])) // []
console.log(doubleify([undefined])) // [undefined, undefined]

