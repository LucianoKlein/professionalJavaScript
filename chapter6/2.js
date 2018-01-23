function SuperType() {
	this.property = "父类";
}

SuperType.prototype.getSuperValue = function() {
	return this.property;
};

function SubType() {
	this.subproperty = "子类";
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
	return this.subproperty;
}

var instance = new SubType();
alert(instance.getSuperValue()); //True

