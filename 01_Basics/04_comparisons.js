// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// Not preferable
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
/*
An equality check == and comparisons > < >= <= work differently in JS.
Comparisons convert null to a number, treating it as 0.
That's why nulln >=0 is true and null > 0 is false.
*/

// Not preferable
console.log(undefined == 0); 
console.log(undefined > 0);
console.log(undefined < 0);
/*
Comparing anything with undefined 
will give false. 
*/

// Strict check (===)
// check value and also check its data type

console.log("2" == 2); // true
console.log("2" === 2) // false (As strict check)
