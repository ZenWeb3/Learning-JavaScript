//sets: A JavaScript Set is a collection of unique values.Each value can only occur once in a Set. The values can be of any type, primitive values or objects.
//how to create a set: passing an array  to new Set(). Creating an empty set and use add() to add values
//if you add equal elements only the first will be saved

//creating a set with new set()
// const letters = new Set(["a", "b", "c"]);

//creating a set with add
// const letters = new Set();

// letters.add("a")
// letters.add("b")
// letters.add("c")


// document.getElementById("demo").innerHTML = "the set has " +letters.size + " values";


//to access the items in the set you use the for 0of method

// const letters = new Set(["a","b","c"]);

// let text = ""

// for (const x of letters) {
//     text += x + "<br>";
// }

// document.getElementById("demo").innerHTML = text 

//sets are objects

//set methods 
// new Set ()
// add ()
// has () --- it is used to check for a certeain value avaliability and returns a boolean value (true, false)

// const letters = new Set(["a", "b", "c",]);
 
// answer = letters.has("d");
// document.getElementById("demo").innerHTML = "the answer is " + answer
//result : false

//forEach() calls a func for each element in the set
// const letters = new Set(["a", "b", "c",]); 

// let text = "";

// letters.forEach(function (value) {
//     text += value + "<br>";
// })

// document.getElementById("demo").innerHTML = text

// another way is 
// const letters = new Set(["a", "b", "c",]); 

// let text = " ";

// letters.forEach(myFunction);
// document.getElementById("demo").innerHTML = text;

// function myFunction(value) {
//     text += value + "<br>"
// }