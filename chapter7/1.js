var condition = false;
if (condition) {
	sayHi = function() {
		alert("Hi!");
	};
} else {
	sayHi = function() {
		alert("Yo!");
	}
}
sayHi();