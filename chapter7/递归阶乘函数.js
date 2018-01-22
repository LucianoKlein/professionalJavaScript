function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

var anotherFactorial = factorial;
factorial = null;
alert(anotherFactorial(4));
//上边有问题

//下边可以
function factorial(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * arguments.callee(num - 1);
	}
}


var factorial = (function f(num) {
	if (num <= 1) {
		return 1;
	} else {
		return num * f(num - 1);
	}
})
