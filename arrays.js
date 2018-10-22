const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

/*
daysOfWeek[0] => Sunday
...
daysOfWeek[6] => Saturday
*/

console.log(daysOfWeek[0]);
console.log(daysOfWeek[1]);
console.log(daysOfWeek[2]);
console.log(daysOfWeek[3]);
console.log(daysOfWeek[4]);
console.log(daysOfWeek[5]);
console.log(daysOfWeek[6]);

let i = 0;

console.log(daysOfWeek[i]);
i = i + 1;

console.log(daysOfWeek[i]);
i = i + 1;

let j = 0;
while (j < daysOfWeek.length) {
    console.log(daysOfWeek[j]);
    j = j + 1;
}

for (let k = 0; k < daysOfWeek.length; k = k + 1) {
    console.log(daysOfWeek[k]);
}









