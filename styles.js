//javascript
//this is how make an entry in the console
//this is useful to announce values, behavior of variables
//or just visualize what the code is doing

console.log("Hello, World!")
//could also use 
//alert("Hello World!")
//but this notification gets annoying so lets stick to console.log()


// 3 ways to declare variables, var, let, const
// var banana       - outdated format (function scoped or global scoped but has no block scope)
// let strawberry   - use for variables
// const kiwi = 10  - use for constants

//exercises: simple match problems
console.log((23+97))
console.log((4+6+9)/77)

//declaring a variable
let a = 10
console.log(a)
console.log(a*9)
let b = 7 * a
console.log(b)

//looking at certain functions, more math with a constant
const max = 57
let actual = max - 13
let percentage = actual / max
console.log(percentage)


//how to check the type of dataset
console.log(typeof actual)
//there are 8 types of datasets
// Number
// BigInt
// Boolean
// String
// null
// undefined
// Symbol
// Object

let mynumber = '74'
Number(mynumber) + 3
console.log(mynumber) 
console.log(typeof mynumber)
let myNumber = 77
console.log(typeof myNumber)
let val = (mynumber)
console.log(typeof val)

//inc decrement operators
let num1 = 4
num1++
console.log(num1)

let num2 = 6
console.log("number 2 is " + num2--)
console.log(num2)

var one = 1;
var one_again = 1;
var one_string = "1";  // note: this is a string
var two = 2;  
var two_string = "2";  //note: this is a string


console.log(one != one_again);  // false
console.log(one != one_string); // false
console.log(one !== one_again); // false. Types are same
console.log(one !== one_string);// true. Types are different
console.log(one !== two); //true. Types are different OR values are different
console.log(one !== two_string); //true. Types are different OR values are different


console.log("")



let testval = true

console.log(Number(testval))
console.log(+testval)

//another example
let apples = "2";
let oranges = "3";

console.log( +apples + -oranges ); // "23", the binary plus concatenates strings


// 4 variables: first name, last name, current year, and birth year.
let firstName = "Wassim"
let lastName = "Shomali"
let thisYear = 2022
let birthYear = 1994
let fullName = `${firstName} ${lastName}`
let age = thisYear - birthYear
// a 5th variable (greeting) that is constructed from the previous 4, it should contain a greeting with the person's full name and their age.
let greeting = "Hello, my name is " + fullName + 
" and I am " + (thisYear - birthYear) + " years old."

console.log(greeting)

let txt = "Hello World!";
txt = txt.toUpperCase()

console.log(txt)

//slice extracts a part of a string and returns the extracted part in a new string. 
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log(part)

//substring is similar to slice. difference is that substring cannot accept negative indexes
let part2 = str.substring(7, 13);    
console.log(part2)

//substr is similar to slice. The difference is that the second 
//parameter specifies the length of the extracted part
let part3 = str.substr(7, 6);
console.log(part3)

//LOGICAL OPERATORS
//OR
//The “OR” operator is represented with two vertical line symbols:

result = a || b;

//AND
//The AND operator is represented with two ampersands &&:
result = a && b;

//NOT
//The boolean NOT operator is represented with an exclamation sign !.
value = 3
result = 3
result =!value;
console.log(result)

//A double NOT !! is sometimes used for converting a value to boolean type:





