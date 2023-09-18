"use strict"; // If you write this before start writing the code, All the js the codes will be treated as newer version

// allert("Hello")
// This is supposed to pop up an allert showing "Hello"
//It is directly useable in browsers
//But, in node, it is not useable directly. It will show an error.
//ReferenceError: allert is not defined
// We're using node js not browser

// Priority for Code readability should be high

let name = "hasan" //Satring

let age = 24 // number

let isLoggedIn = false // boolean

/*
-- Premetive Data Types
number => 2 to power 53
bigint

string => "..."

boolean => true or false

null => Actually a standalone value, representation of an empty value. It is not undefined, it is actually an empty value.

undefined => when we don't assign value

symbol => unique

-- Objects 
*/

console.log(typeof "Hasan");

console.log(typeof age);

console.log(typeof null);
//Will print object. Because, null is the representation of a standalone epmty value.

console.log(typeof undefined); //Will print null. Because undefined is itself a type.

console.log(typeof number); //Will print null. Because number is itself a type.
