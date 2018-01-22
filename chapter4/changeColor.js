var color = "blue";

function changeColor() {
	if (color == 'blue') {
		color = 'red';
	} else {
		color = 'blue';
	}
}

changeColor();

alert("Color is now " + color);

var color = "blue";

function changeColor() {
	var anotherColor = "red";
	
	function swapColor() {
		var tempColor = anotherColor;
		anotherColor = color;
		color = tempColor;
	}
	
	swapColors();

}
changeColor();