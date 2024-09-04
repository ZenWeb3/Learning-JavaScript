// loops is used to execute lins of code multiple of times

// for loop
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = ""
// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";

// }

// document.getElementById("demo").innerHTML = text;

// for loop loops through a block of code a number of times
// let text = "";
// for (let i = 0; i < 10; i++) {
//   text += "the number is " + i + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

// for in loop
// it is used to loop through the properties of an object

// syntax
// for (const key in object) {

// }

// example
// const person = {fname:"John", lname:"Doe", age:25};

// let text ="";
// for (let x in person) {
//     text += person[x] + " ";
// }

// document.getElementById("demo").textContent=text ;

// for each()
// calls a function once for each array element
// let numbers = [1,2,3,4,5];

// let text = "";
// numbers.forEach(myFunction);
// document.getElementById("demo").innerHTML=text

// function myFunction(value) {
//     text+=value + "<br>";
// }

// The JavaScript for of statement loops through the values of an iterable object.
// 
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

// Syntax

// for (variable of iterable) {
//     // code block to be executed
// }

// looping over an array
// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of catextContentinners) {
//     text += x + "<br>";
// }

// looping over a string
// let name ="Samuel"

// let text = ""
// for (let x of name) {
//     text += x + "<br>"
// }

// document.getElementById("demo").innerHTML=text;

//while loop
// Loops can execute a block of code as long as a specified condition is true.
// Syntax
// while (condition) {
//   // code block to be executed
// }

// let text = "";
// let i = 0;
// while (i < 5) {
//   text += "<br>The number is " + i;
//   i++;
// }
// document.getElementById("demo").innerHTML = text;

//break
//break statement is used to jump out of a loop, basically ending it
// for (let i = 0; i < 10; i++) {
//     if (i === 3) { break; }
//     text += "The number is " + i + "<br>";
//   }

//continue
//continue is used to jump over one iteration in the loop
// for (let i = 0; i < 10; i++) {
//     if (i === 3) { continue; }
//     text += "The number is " + i + "<br>";
//   }