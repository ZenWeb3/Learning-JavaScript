//A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
//how to create a map:
//passing an array to new Map()
// creating a map and use map.set()

//.get() is a method used to get a particular value with a specific key in the map
// const fruits = new Map([
//     ["apples", 500],
//     ["banana", 300],
//     ["oranges", 200]
// ]);

// let value = fruits.get("apples");
// document.getElementById("demo").innerHTML = "There are " + value + " apples."

//set() method

// const fruits = new Map();

// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);



// //set can also be used to change existing map values

// fruits.set("bananas", 600)

// let value = fruits.get("bananas");
// document.getElementById("demo").innerHTML = "There are " + value + " bananas."


// methods
// .get() - to get the value of the key in the map  
// Map.set()
// Map.size - returns the number of elements in a map 
// fruits.size
// Map.delete()- to remove a map element
// Map.clear() -remove all the elements in a map
// Map.has()-returns a boolean if a key exists in a map

// //Object as keys
// const apples = {name: 'Apples'};
// const bananas = {name: 'Bananas'};
// const oranges = {name: 'Oranges'};

// // Create a Map
// const fruits = new Map();

// // Add the Objects to the Map
// fruits.set(apples, 500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 200);

// document.getElementById("demo").innerHTML = fruits.get(apples);

// const apples = {name: 'Apples'};
// const bananas = {name: 'Bananas'};
// const oranges = {name: 'Oranges'};

// // Create a Map
// const fruits = new Map();

// // Add the Objects to the Map
// fruits.set(apples, 500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 200);

// document.getElementById("demo").innerHTML = fruits.get(apples);
// Remember: The key is an object (apples), not a string ("apples"):