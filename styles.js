//javascript
//this is how make an entry in the console
//this is useful to announce values, behavior of variables
//or just visualize what the code is doing

console.log("Hello, World!")
//could also use 
//alert("Hello World!")
//but this notification gets annoying so lets stick to console.log()


// 3 ways to declare variables, var, let, const
// var banana       - outdated format (function scoped or global scoped but has no block scope) {can be used outside of this}
// let strawberry   - use for variables (has block scope) let x = 10 , {let x = 9, x=9} x=10 (and not 9)
// const kiwi = 10  - use for constants (must be assigned, can't be reassigned. defines a constant reference to the value)

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
let xyz;           // Now x is undefined
xyz = 5;           // Now x is a Number
xyz = "John";      // Now x is a String
let mynumber = '74'
Number(mynumber) + 3
console.log(mynumber) 
console.log(typeof mynumber)
let myNumber = 77
console.log(typeof myNumber)
let val = (mynumber)
console.log(typeof val)

console.log("")


//inc decrement operators, can be used before or after a variable
let num1 = 4
num1++
console.log(num1)

let num2 = 6
console.log("number 2 is " + num2--)
console.log(num2)



//seeing how assignment operators work when used on strings and numbers and a combination of both
var one = 1;
var one_again = 1;
var one_string = "1";  // note: this is a string
var two = 2;  
var two_string = "2";  //note: this is a string

let x = 5 + 5;          //10
let y = "5" + 5;        //55
let z = "Hello" + 5;    //Hello5

console.log("")

//== is equal to ; === is equal to value and type of valriable
console.log(one == one_again);  // true
console.log(one == one_string); // true
console.log(one === one_again); // true. Types are same
console.log(one === one_string);// false. Types are different
console.log(one === two); //false. Types are different OR values are different
console.log(one === two_string); //false. Types are different OR values are different

console.log("")

console.log(one != one_again);  // false
console.log(one != one_string); // false
console.log(one !== one_again); // false. Types are same
console.log(one !== one_string);// true. Types are different
console.log(one !== two); //true. Types are different OR values are different
console.log(one !== two_string); //true. Types are different OR values are different

console.log("")

//using assignment operator with integrated arithmetic
let text1 = "What a very ";
text1 += "nice day";
console.log(text1)

let x2 = 3
x2 += 1
console.log(x2)

console.log("")


let testval = true

console.log(Number(testval))
console.log(+testval)

//another example
let apples = "2";
let oranges = "3";
console.log( apples + oranges ); // "23", the binary plus concatenates strings
console.log( +apples + +oranges ); // 5, reads the variables as numbers because of the "+" in front
console.log( +apples + -oranges ); // -1, can also use "-" as implied in the example above


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

//arrays
let car = ["audi","bmw","honda"]
console.log(car[0]) //returns "audi"
car.push("lexus")   //adds a new string to array at end | you could also use car.pop to remove last element
console.log(car[3]) //returns "lexus"

//objects
const person = {firstThing:"John", secondThing:"Banana", thirdThing:"20"}
const human = {
    hair: "black",
    eyes: "brown",
    height: 6,
    combination: function() {
        return human.hair + " " + this.eyes //human.hair or this.hair, format is object.property to return property value
    }
}
console.log(person.secondThing) //returns Banana, could also do person["secondThing"]
console.log(human.combination()) //returns 6

//FUNCTIONS
//namefollowedby()
function name(parameter1, parameter2, parameter3) {
    //code edxecuted here
}

// creating a fn that can be handled as an object

//let newObject = new Math(); //Math is a standard java fn, now a object
function newObject() {
    //now lets use the Random() fn to randomize this object
    return Math.random()
}

let msg = "You lose m8"

let winningNo = 19384
  if (winningNo == newObject) {
      msg = "you win m8"
    }

console.log(msg)

/*
function getRandom() {
  return Math.random();
}
function getRandom() {
    return Math.random() * (10 - 5) + 5;
  }
  console.log(getRandom())
*/

// function return
let testfunction = myFunction(4, 2);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}

console.log(testfunction)

//another example where you can reuse the same function many times for different values and use cases

//lets confert F• to C•
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
console.log(toCelsius(30))      //1.1111111111111112
console.log(toCelsius(60))      //15.555555555555557

//rouding numbers
min1 = 1; max1 = 2
min1 = Math.ceil(min1)//rounds up the min val
max1 = Math.floor(max1)//rounds down the max val


/* example of a while loop for rng calc. random value in a range user selected. how many times the rng had to roll


// creating a fn that can be handled as an object
let rand = Math.random();
//We create a function of randomInt that uses the Math class and the random function to generate an integer from min to max.
function randomInt(min = 0, max = 0) {
    min = Math.ceil(min); //Round up the minimum value
    max = Math.floor(max); //Round down the maximum value
    let rand = Math.random();

  //The maximum is exclusive and the minimum is inclusive
    let int = Math.floor(rand * (max - min) + min);

  return int;
}
//Prompt the user to input the values. The value is stored
let minimum = prompt("Enter a minimum value: ");
let maximum = prompt("Enter a maximum value: ");

let msg = "You lose m8";

let answer = randomInt(minimum, maximum)
let winningNo = 19384



let count = 0
let randomness = 0;
//create a loop with 2 parts
// first part loops the function that generates random numbesr
while (randomness != winningNo) {
  randomness = randomInt(minimum, maximum)
  count++
}


// second part will do ++count on a coutn var to keep track of how many loops occur
// loop ends when the randomInt = winningNo
msg = "that shit took forever bro, uhm actually it took precisely this many tries: " + count
console.log(msg)



*/
//SWITCH, this example about selecting the current weekday
// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
let todayDate = new Date().getDay()
const day = todayDate;

switch (day) {
    case 0:
        console.log("It's Sunday, time to relax!");
        break;
    case 1:
        console.log("Happy Monday!");
        break;
    case 2:
        console.log("It's Tuesday. You got this!");
        break;
    case 3:
        console.log("Hump day already!");
        break;
    case 4:
        console.log("Just one more day 'til the weekend!");
        break;
    case 5:
        console.log("Happy Friday!");
        break;
    case 6:
        console.log("Have a wonderful Saturday!");
        break;
    default:
        console.log("Something went horribly wrong...");
}


//html events

//<element event="some JavaScript">

//here's and example where clicking a button will add the date in the "demo" <p>

/*<html>
<body>
<button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>
<p id="demo"></p> //this is where the date gets entered



</body>
</html>
*/

//document.getElementById("").innerHTML
//document.this.innerHTML

//you could also call a function that's nested in the <script> of that html
//<button onclick="displayDate()">The time is?</button>
//<script>
//  function displayDate() {
//    document.getElementById("demo").innerHTML = Date();
//}

/* a list of common hTML events
onchange	An HTML element has been changed
onclick	    The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	    The browser has finished loading the page
*/

//STRINGS
let text = "this is a test"
let lengthOfText = text.length //14

console.log(lengthOfText)

//use \ before any "" or '' or \ in a string to maintain structure

let text2 = "Hello! my name is \" Wassim \""

console.log(text2)

//a few more
/*
Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator
*/


console.log(text)

/* the following DOM works when added in the HTML file in a <script> tag
this is because it's calling "document."
document.getElementById("demo").innerHTML = typeof text
~string
would be an object if text were declared as an object:
let text = new String("this is a test")
*/

//object === object //returns always false
//don't declare strings as objects, complicates thinga and slows down code

//slice

let newString = "Apple, Banana, Kiwi"
let partOfString = str.slice(7,13) //Banana
let lastPartOfString = str.slice(-4) //Kiwi

console.log(lastPartOfString)//Kiwi

/*
slice(start, end)
substring(start, end)
substr(start, length)
*/

//replace
/*
  let text = "Please visit Microsoft and Microsoft!";
  let newText = text.replace("Microsoft", "W3Schools");//replaces text but in a new declared string



  let text = "Please visit Microsoft!";
  let newText = text.replace("MICROSOFT", "W3Schools"); //this won't work because it's case sensitive. see next example



  let text = "Please visit Microsoft!";
  let newText = text.replace(/MICROSOFT/i, "W3Schools");//to replace case insensitive, use /.../i


  let text = "Please visit Microsoft and Microsoft!";
  let newText = text.replace(/Microsoft/g, "W3Schools");//to replace all global matches
*/

let upperText = text.toUpperCase
//converts a string to uppercase
//same for toLowerCase

let concattedText = text1.concat(" adding that to this ", text2)
console.log(concattedText)

let stringWithSpace = "          Hello dudes           "
let stringWithoutSpace = stringWithSpace.trim()

let nonPadded = "5" //padding only works on strings
let padded = nonPadded.padStart(4,0)
console.log(padded) //0005


let nonPadded2 = "5" //padding only works on strings
let padded2 = nonPadded2.padEnd(5,1)
console.log(padded2) //51111


//factorial function example


function factorial(num) {

  if (num < 0) return undefined
  if (num == 0) return 1

  let x = num - 1

  while (x > 1) {
    num *= x
    x--
  }
  return num
}






console.log(factorial(3))


//circumference of a circle function with given radius with a result that has 2 numbers after the decimal place

function circumference(rad) {
  if (rad < 0) return undefined
  let circ = 2*Math.PI*rad
  return circ.toFixed(2)
}

console.log(circumference(5))


//random number function

const rand = Math.random()
console.log(rand)

//function that joins an array into a string
const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
console.log(madeAString);



//example function with return
function aa() {
  const y = 2
  return (y)
}
console.log(aa()) //2

//example function with output
/*
function ab() {
  const y = 2
  output(y)
}
console.log(ab()) //Uncaught ReferenceError: output is not defined
*/



//example of using functions with parameters and arguments
//with strings
function favoriteAnimal(animal) {
  console.log(animal + " is my favorite animal!")
}

favoriteAnimal('Goat')
//with math
function multiplyBy10(num) {
  console.log(num * 10)
}

multiplyBy10(10)


//arrow functions
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/
/*
console.log( sum(1, 2) ); // 3

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3
*/

//exercises for function

//fn that capitalizes a string's first letter. can accept strings with any case form
function capitalize(txt) {
  let firstLetter = txt.charAt(0)
  let restOfString = txt.slice(1)
  return firstLetter.toUpperCase() + restOfString.toLowerCase()
}
console.log(capitalize("teST"))


//fn that returns last letter of the string
function lastLetter(txt) {
  let x = txt.length - 1
  let last = txt.slice(x)
  console.log(last)
}
lastLetter("banana") // ~ a


//the FizzBuzz problem
/*Write a program that takes a user’s input and prints the 
numbers from one to the number the user entered. However,
 for multiples of three print Fizz instead of the number and
  for the multiples of five print Buzz. For numbers which are
   multiples of both three and five print FizzBuzz.*/
   console.log("This is FizzBuzz!!")
//let num = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
function FizzBuzz(num) {
  if (num < 0) {
    console.log("please enter a positive integer")
  }
  let x = 1
  while (x <= num) {
    if (x % 3 == 0 && x % 5 == 0) {
      console.log("Fizz Buzz")
    }
    else if (x % 3 == 0) {
      console.log("Fizz")
    }
    else if (x % 5 == 0) {
      console.log("Buzz")
    }    
    else  {
      console.log(x)
    }    
    x++
  }
}

FizzBuzz(40)