// init variables
var pTag = document.querySelector('p');
var button = document.querySelector('#buttonID');
var overlay = document.querySelector('#overlay');
var defaultButton = document.querySelector('#defaultButton');
var x = 5;
var y = 6;
var z = 7;
var animals = ["dog", "cat", "bird"];
var person = {
	eyeColor: "green",
	hairColor: "black",
	walk: function() {
		console.log("i'm walking");
	}
}

// set properties on person object
person.eyeColor = "brown";
person["eyeColor"] = "black";

// set main content
// pTag.innerHTML = 'Hello world!';


// button handlers
button.onclick = function() {
    overlay.classList.add('show');
}
button.onmouseover = function() {
	button.classList.add('hover');
} 
button.onmouseout = function() {
	button.classList.remove('hover');
} 
defaultButton.onclick = function() {
	overlay.classList.remove('show');
}

// functions
function multiply(num1, num2) {
  var result = num1 * num2;
  console.log("hello");
  console.log("world");
  return result;

}

var multiply = function(num1, num2) {
	// some stuff
}

multiply(2, 3);

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

}

switch(x) {
	case 4: 
		// do something
		break;
	case 6: 
		// do something
		break;
	case 4:
		// do something
		break;
	default:
		// do something
		break;
}

//console.log("person.eyeColor: " + person.eyeColor);
//console.log("person[eyeColor]: " + person["eyeColor"]);
//console.log("person.walk(): " + person.walk());
//person.walk();
//console.log("person.walk: " + person.walk);