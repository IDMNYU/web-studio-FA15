// init variables
// querySelector will return an array of the selected element if
// more than one instance of that element exists on the page
var pTag = document.querySelector('p');
// reference an element based on its ID:
// can only have one instance of this ID on your HTML page
var showButton = document.querySelector('#showButton');
var hideButton = document.querySelector('#hideButton');
// can also reference an element based on its class:
// var button = document.querySelector('.button');
var overlay = document.querySelector('#overlay');

// set main content
// pTag.innerHTML = 'Hello world!';

// button handlers
showButton.onclick = function() {
	var div = overlay.querySelector('.overlay-child');
    div.classList.add('show');
}
showButton.onmouseover = function() {
	showButton.classList.add('hover');

	var div = overlay.querySelector('.overlay-child');
    div.classList.add('show');
} 
showButton.onmouseout = function() {
	showButton.classList.remove('hover');
	
	var div = overlay.querySelector('.overlay-child');
    div.classList.remove('show');
} 
hideButton.onclick = function() {
	var div = overlay.querySelector('.overlay-child');
    div.classList.remove('show');
}

// Numbers
var x = 7;
var y = 6;
var z = 7.3904;

// Strings
var string1 = "i am a string"
var string2 = 'i am also a string'

// Arrays
var animals = ["dog", "cat", "bird"];

// Objects
var person = {
	eyeColor: "green",
	hairColor: "black",
	walk: function() {
		console.log("i'm walking");
	},
	add: function(num1, num2) {
		console.log("adding numbers: " + (num1+num2));
	}
}

// calling methods on objects
console.log("does person have 'walk'? : " + person.walk);
person.walk();
person.add(2, 2);

// set properties on person object
// person.eyeColor = "brown";
// person.talk = function() {
// 	console.log("i'm talking");
// }
// person["eyeColor"] = "black";
// person["eat"] = function() {
// 	console.log("i'm eating!");
// }

// console.log("person eyecolor (should be black): " + person["eyeColor"]);
// console.log("person.hairColor: " + person.hairColor);

// person.eyeColor = "blue";

// console.log("person eyecolor (should be blue): " + person["eyeColor"]);

// Booleans
var empty = true; // can also be 1
var full = false; // can also be 0

// functions
function multiply(num1, num2) {
  var result = num1 * num2;
  cosole.log("multiply called! result: " + result);
  return result;
}

// assigning an anonymous function to a variable
var multiply = function(num1, num2) {
	// some stuff
}

// calling functions
multiply(2, 3);


// conditionals
if (x == 4) {
	// do something
}
else if (x == 5) {
	// do something
}
else if (x==6) {
	// do something
}
else {
	// take some default action
}

// switch statement conditional
switch(x) {
	case 4: 
		// do something
		console.log("x was 4");
	case 6: 
		// do something
		console.log("x was 4 or 6");
		break;
	case 7:
		// do something
		console.log("x was 7");
		break;
	default:
		// do something
		console.log("default x value");
		break;
}