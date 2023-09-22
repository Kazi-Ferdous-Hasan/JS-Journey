/*
Based on how the data is stored 
in the memory and accessed 
from the memory, there are
two types of data.

1. Primitive
2. Non Primitive/ Reference type

*/
/*
Primitive: 7 categories
String, Number, Boolean, null, undefined, Symbol(Used to make unique components), 
BigInt

Non Primitive (Reference type): 
Array, Objects, Functions
*/ 

//Primitive Examples
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

//Non Primitive examples
const heros = ["SuperMan", "IronMan", "SpiderMan"];
let myObj = {
    name: "Hasan",
    age: 23,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Return type of variables in JavaScript 
//(using typeof())
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object
